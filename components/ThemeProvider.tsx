"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

interface CustomThemeProviderProps extends ThemeProviderProps {
  readonly children: React.ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: Readonly<CustomThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-muted animate-pulse" />;
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="relative">
      <motion.div
        className="flex items-center bg-muted/50 backdrop-blur-sm rounded-xl p-1 border border-border/50"
        layout
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.name;

          return (
            <motion.button
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${themeOption.label} theme`}
              // Add this cast to avoid type error
              {...({} as any)}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-lg"
                    layoutId="theme-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              <Icon className="w-5 h-5 relative z-10" />
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}

// Advanced theme configuration with custom properties
export function ThemeCustomizer() {
  const { theme } = useTheme(); // Remove setTheme assignment (not used)
  const [mounted, setMounted] = useState(false);
  const [customColors, setCustomColors] = useState({
    primary: "#3b82f6",
    secondary: "#64748b",
    accent: "#f59e0b",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCustomColor = (
    colorType: keyof typeof customColors,
    color: string
  ) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));

    // Update CSS custom properties
    document.documentElement.style.setProperty(`--color-${colorType}`, color);
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50"
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        Theme Customization
      </h3>

      <div className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-muted-foreground mb-2"
            htmlFor="theme-mode-toggle"
          >
            Theme Mode
          </label>
          <div className="flex items-center space-x-2" id="theme-mode-toggle">
            <ThemeToggle />
            <span className="text-sm text-muted-foreground capitalize">
              Current: {theme}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Custom Colors</h4>

          {Object.entries(customColors).map(([colorType, colorValue]) => (
            <div key={colorType} className="flex items-center justify-between">
              <label
                className="text-sm text-muted-foreground capitalize"
                htmlFor={`color-input-${colorType}`}
              >
                {colorType}
              </label>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg border border-border color-preview" />
                <input
                  id={`color-input-${colorType}`}
                  type="color"
                  value={colorValue}
                  onChange={(e) =>
                    updateCustomColor(
                      colorType as keyof typeof customColors,
                      e.target.value
                    )
                  }
                  className="w-8 h-8 rounded border-none cursor-pointer opacity-0 absolute"
                  title={`Pick ${colorType} color`}
                  placeholder={`Pick ${colorType} color`}
                />
              </div>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setCustomColors({
              primary: "#3b82f6",
              secondary: "#64748b",
              accent: "#f59e0b",
            });
            // Reset CSS custom properties
            document.documentElement.style.removeProperty("--color-primary");
            document.documentElement.style.removeProperty("--color-secondary");
            document.documentElement.style.removeProperty("--color-accent");
          }}
          className="w-full py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
        >
          Reset to Default
        </motion.button>
      </div>
    </motion.div>
  );
}

// Theme-aware components
export function ThemedCard({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <motion.div
      className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

export function ThemedButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: Readonly<{
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    ghost: "bg-transparent text-foreground hover:bg-muted focus:ring-muted",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      
    >
      {children}
    </motion.button>
  );
}

// System theme detection utilities
export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return systemTheme;
}

// Auto theme switching based on time
export function useAutoTheme() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const updateThemeBasedOnTime = () => {
      const hour = new Date().getHours();
      const isDayTime = hour >= 6 && hour < 18;
      setTheme(isDayTime ? "light" : "dark");
    };

    // Update immediately
    updateThemeBasedOnTime();

    // Update every hour
    const interval = setInterval(updateThemeBasedOnTime, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [setTheme]);
}


