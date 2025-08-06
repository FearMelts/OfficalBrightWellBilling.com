// Core application types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "user" | "viewer";
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: "create" | "read" | "update" | "delete" | "*";
}

// Billing and Payment types
export interface Customer {
  id: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
  address?: Address;
  paymentMethods: PaymentMethod[];
  subscriptions: Subscription[];
  invoices: Invoice[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  metadata?: Record<string, any>;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  id: string;
  type: "card" | "bank_account" | "digital_wallet";
  card?: {
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
  };
  bankAccount?: {
    bankName: string;
    accountType: "checking" | "savings";
    last4: string;
  };
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  interval: "monthly" | "yearly" | "weekly" | "daily";
  intervalCount: number;
  trialPeriodDays?: number;
  features: string[];
  isActive: boolean;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  id: string;
  customerId: string;
  planId: string;
  status: "active" | "inactive" | "canceled" | "past_due" | "trialing";
  currentPeriodStart: string;
  currentPeriodEnd: string;
  trialStart?: string;
  trialEnd?: string;
  canceledAt?: string;
  cancelAtPeriodEnd: boolean;
  quantity: number;
  amount: number;
  currency: string;
  discount?: Discount;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface Discount {
  id: string;
  type: "percentage" | "fixed_amount";
  value: number;
  currency?: string;
  duration: "once" | "repeating" | "forever";
  durationInMonths?: number;
  validFrom: string;
  validTo?: string;
  maxRedemptions?: number;
  timesRedeemed: number;
  code?: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  subscriptionId?: string;
  number: string;
  status: "draft" | "open" | "paid" | "void" | "uncollectible";
  amount: number;
  currency: string;
  subtotal: number;
  tax: number;
  discount?: number;
  total: number;
  dueDate: string;
  paidAt?: string;
  voidedAt?: string;
  items: InvoiceItem[];
  paymentAttempts: PaymentAttempt[];
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitAmount: number;
  amount: number;
  currency: string;
  periodStart?: string;
  periodEnd?: string;
  proration?: boolean;
}

export interface PaymentAttempt {
  id: string;
  invoiceId: string;
  paymentMethodId: string;
  amount: number;
  currency: string;
  status: "pending" | "succeeded" | "failed" | "canceled";
  failureCode?: string;
  failureMessage?: string;
  processingFee?: number;
  createdAt: string;
  processedAt?: string;
}

// Analytics and Metrics types
export interface AnalyticsData {
  period: "day" | "week" | "month" | "quarter" | "year";
  startDate: string;
  endDate: string;
  metrics: Record<string, number>;
  dimensions: Record<string, any>;
}

export interface RevenueMetrics {
  mrr: number;
  arr: number;
  growth: number;
  churn: number;
  ltv: number;
  cac: number;
  paybackPeriod: number;
}

export interface CustomerMetrics {
  totalCustomers: number;
  activeCustomers: number;
  newCustomers: number;
  churnedCustomers: number;
  churnRate: number;
  retentionRate: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}

// API and Response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: APIError;
  pagination?: Pagination;
  metadata?: Record<string, any>;
}

export interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  statusCode: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SearchParams {
  query?: string;
  filters?: Record<string, any>;
  sort?: {
    field: string;
    direction: "asc" | "desc";
  };
  pagination?: {
    page: number;
    limit: number;
  };
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export interface InputProps extends BaseComponentProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closable?: boolean;
  maskClosable?: boolean;
  footer?: React.ReactNode;
}

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: keyof T;
  width?: number | string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

export interface TableProps<T = any> extends BaseComponentProps {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    onChange?: (page: number, pageSize: number) => void;
  };
  rowKey?: string | ((record: T) => string);
  onRow?: (
    record: T,
    index: number
  ) => React.HTMLAttributes<HTMLTableRowElement>;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "select"
    | "textarea"
    | "checkbox"
    | "radio"
    | "date";
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: SelectOption[];
  disabled?: boolean;
  helperText?: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface ValidationRule {
  type: "required" | "email" | "min" | "max" | "pattern" | "custom";
  value?: any;
  message: string;
  validator?: (value: any) => boolean;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  loop?: boolean;
  direction?: "normal" | "reverse" | "alternate";
}

export interface MotionVariants {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  hover?: Record<string, any>;
  tap?: Record<string, any>;
}

// Theme types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
}

// File and Upload types
export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
  progress?: number;
  status: "pending" | "uploading" | "success" | "error";
  error?: string;
  createdAt: string;
}

export interface UploadConfig {
  maxSize: number;
  maxFiles: number;
  acceptedTypes: string[];
  multiple: boolean;
  autoUpload: boolean;
}

// Notification types
export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
  actions?: NotificationAction[];
  createdAt: string;
  read: boolean;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: "primary" | "secondary";
}

// Settings and Configuration types
export interface UserSettings {
  theme: "light" | "dark" | "system";
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisibility: "public" | "private";
    allowAnalytics: boolean;
  };
}

export interface SystemSettings {
  siteName: string;
  siteDescription: string;
  logoUrl: string;
  faviconUrl: string;
  primaryColor: string;
  secondaryColor: string;
  currency: string;
  timezone: string;
  language: string;
  features: {
    enableRegistration: boolean;
    enablePayments: boolean;
    enableAnalytics: boolean;
  };
}

// Blog and Content types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  status: "draft" | "published" | "archived";
  tags: string[];
  category: string;
  featuredImage?: string;
  readingTime: number;
  viewCount: number;
  seo: SEOData;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
  featured: boolean;
  videoUrl?: string;
  createdAt: string;
}

// Feature types
export interface Feature {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  enabled: boolean;
  premium: boolean;
}

// Event and Analytics tracking types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId?: string;
}

export interface TrackingConfig {
  googleAnalytics?: {
    measurementId: string;
    enabled: boolean;
  };
  hotjar?: {
    siteId: string;
    enabled: boolean;
  };
  mixpanel?: {
    token: string;
    enabled: boolean;
  };
}

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type NonNullable<T> = Exclude<T, null | undefined>;

// Component state types
export type LoadingState = "idle" | "loading" | "success" | "error";

export type SortDirection = "asc" | "desc";

export type FilterOperator =
  | "eq"
  | "ne"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "contains"
  | "startsWith"
  | "endsWith";

export interface Filter {
  field: string;
  operator: FilterOperator;
  value: any;
}

export interface Sort {
  field: string;
  direction: SortDirection;
}

// Export commonly used React types for convenience
export type {
  ComponentProps,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
