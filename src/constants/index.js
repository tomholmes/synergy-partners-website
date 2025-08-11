// Application constants and configuration
export const APP_CONFIG = {
  NAME: import.meta.env.VITE_APP_NAME || 'SynergyPartners.AI',
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'tholmes@synergypartners.ai',
  TAGLINE: 'From AI Curious to AI Confident',
  DESCRIPTION: 'Comprehensive AI governance and transformation platform'
}

// Environment variables
export const ENV_CONFIG = {
  ZAPIER_WEBHOOK_URL: import.meta.env.VITE_ZAPIER_WEBHOOK_URL,
  NODE_ENV: import.meta.env.MODE
}

// Navigation paths
export const ROUTES = {
  HOME: '/',
  INSIGHT_IQ: '/insightiq',
  TRUST_IQ: '/trustiq',
  ACTION_IQ: '/actioniq',
  PLAN_IQ: '/planiq',
  HIGHER_EDUCATION: '/industries/higher-education',
  MANUFACTURING: '/industries/manufacturing',
  ENTERPRISE: '/industries/enterprise',
  FINANCIAL_SERVICES: '/industries/financial-services',
  HEALTHCARE: '/industries/healthcare',
  PUBLIC_SECTOR: '/industries/public-sector',
  ENERGY_UTILITIES: '/industries/energy-utilities',
  RETAIL_ECOMMERCE: '/industries/retail-ecommerce'
}

// Industry route mapping for use case navigation
export const INDUSTRY_ROUTES = {
  'Government': ROUTES.PUBLIC_SECTOR,
  'Enterprise': ROUTES.ENTERPRISE,
  'Manufacturing': ROUTES.MANUFACTURING,
  'Healthcare': ROUTES.HEALTHCARE,
  'Financial': ROUTES.FINANCIAL_SERVICES,
  'Education': ROUTES.HIGHER_EDUCATION,
  'Energy': ROUTES.ENERGY_UTILITIES,
  'Retail': ROUTES.RETAIL_ECOMMERCE
}

// Module information
export const MODULES = {
  INSIGHT_IQ: 'InsightIQ',
  TRUST_IQ: 'TrustIQ',
  ACTION_IQ: 'ActionIQ',
  PLAN_IQ: 'PlanIQ'
}

// Validation patterns
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s\-()]+$/
}

// Default values
export const DEFAULTS = {
  WEBHOOK_URL: 'https://hooks.zapier.com/hooks/catch/your-webhook-id/'
}
