import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight, CheckCircle, AlertCircle, Mail } from 'lucide-react'
import PropTypes from 'prop-types'
import { APP_CONFIG } from '../constants'
import { validateField, VALIDATION_RULES, sanitizeInput } from '../lib/validation'

function EmailCaptureMailto({ source = "homepage" }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    organization: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

      const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: sanitizeInput(value)
      }))
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.firstName.trim()) {
      setStatus('error')
      setMessage('Please enter your first name')
      return
    }
    
    if (!formData.lastName.trim()) {
      setStatus('error')
      setMessage('Please enter your last name')
      return
    }
    
    if (!formData.email || !VALIDATION_RULES.email.pattern.test(formData.email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }
    
    if (!formData.organization.trim()) {
      setStatus('error')
      setMessage('Please enter your organization')
      return
    }

    // Create email content
    const subject = `New Lead: ${formData.firstName} ${formData.lastName} from ${formData.organization}`
    const body = `
New Lead Submission from SynergyPartners.AI Website

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Title: ${formData.title || 'Not provided'}
- Organization: ${formData.organization}

Lead Details:
- Source: ${source}
- Timestamp: ${new Date().toISOString()}

This lead was captured from the SynergyPartners.AI website.
Please follow up promptly.

---
SynergyPartners.AI Lead Capture System
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:${APP_CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setStatus('success')
    setMessage('Your email client should open with the lead information. Please send the email to complete your submission.')
    
    // Clear form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      organization: ''
    })
  }

  const handleDirectEmail = () => {
    const subject = `Interest in ${APP_CONFIG.NAME}`
    const body = `Hi Tom,

I'm interested in learning more about ${APP_CONFIG.NAME} and would like to schedule a demo.

My details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Title: ${formData.title || 'Not provided'}
- Organization: ${formData.organization}

Please contact me to discuss how ${APP_CONFIG.NAME} can help our organization.

Best regards,
${formData.firstName} ${formData.lastName}`

    const mailtoLink = `mailto:${APP_CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            className="bg-white text-foreground"
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            className="bg-white text-foreground"
            required
          />
        </div>
        
        <Input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-white text-foreground"
          required
        />
        
        <Input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleInputChange}
          className="bg-white text-foreground"
        />
        
        <Input
          type="text"
          name="organization"
          placeholder="Organization *"
          value={formData.organization}
          onChange={handleInputChange}
          className="bg-white text-foreground"
          required
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            type="submit" 
            size="lg" 
            className="text-lg"
            variant="secondary"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send via Email
          </Button>
          
          <Button 
            type="button"
            onClick={handleDirectEmail}
            size="lg" 
            className="text-lg"
            variant="outline"
            disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.organization}
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Contact Direct
          </Button>
        </div>
      </form>
      
      {status === 'success' && (
        <div className="flex items-start text-green-600 mt-4 p-4 bg-green-50 rounded-lg">
          <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{message}</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center text-red-600 mt-4 p-4 bg-red-50 rounded-lg">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{message}</span>
        </div>
      )}
      
      <div className="text-center space-y-2">
        <p className="text-xs text-primary-foreground/70">
          * Required fields. We respect your privacy and will never share your information.
        </p>
        <p className="text-xs text-primary-foreground/60">
          Having trouble? Email us directly at{' '}
          <a 
            href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}
            className="underline hover:text-primary-foreground"
          >
            {APP_CONFIG.CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </div>
  )
}

EmailCaptureMailto.propTypes = {
  source: PropTypes.string
}

export default EmailCaptureMailto

