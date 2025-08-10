// Validation utility functions
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^\+?[\d\s\-\(\)]+$/,
    message: 'Please enter a valid phone number'
  },
  required: {
    test: (value) => value && value.trim().length > 0,
    message: 'This field is required'
  },
  minLength: (min) => ({
    test: (value) => value && value.length >= min,
    message: `Must be at least ${min} characters long`
  }),
  maxLength: (max) => ({
    test: (value) => !value || value.length <= max,
    message: `Must be no more than ${max} characters long`
  })
}

export function validateField(value, rules) {
  for (const rule of rules) {
    if (typeof rule === 'string' && VALIDATION_RULES[rule]) {
      const validationRule = VALIDATION_RULES[rule]
      if (!validationRule.test(value)) {
        return validationRule.message
      }
    } else if (typeof rule === 'function') {
      const validationRule = rule(value)
      if (!validationRule.test(value)) {
        return validationRule.message
      }
    } else if (rule && typeof rule === 'object') {
      if (!rule.test(value)) {
        return rule.message
      }
    }
  }
  return null
}

export function validateForm(formData, validationSchema) {
  const errors = {}
  
  for (const [fieldName, rules] of Object.entries(validationSchema)) {
    const value = formData[fieldName]
    const error = validateField(value, rules)
    if (error) {
      errors[fieldName] = error
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
}

export function formatPhoneNumber(phone) {
  if (!phone) return phone
  
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  
  return phone
}
