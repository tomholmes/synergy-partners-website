import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { APP_CONFIG } from '../constants'

function EmailCapturePhp({ source = "homepage" }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    organization: '',
    // Honeypot fields (hidden from users, bots often fill these)
    website: '',
    phone: '',
    // CAPTCHA fields
    captcha: '',
    captchaAnswer: ''
  })

  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  // Generate simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    return { question: `${num1} + ${num2} = ?`, answer: (num1 + num2).toString() }
  }

  const [captcha, setCaptcha] = useState(generateCaptcha())

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
    setFormData(prev => ({ ...prev, captchaAnswer: '' }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      // Validation
      if (!formData.firstName.trim()) {
        setStatus('error')
        setMessage('Please enter your first name to schedule your demo')
        return
      }
      
      if (!formData.lastName.trim()) {
        setStatus('error')
        setMessage('Please enter your last name to schedule your demo')
        return
      }
      
      if (!formData.email || !formData.email.includes('@')) {
        setStatus('error')
        setMessage('Please enter a valid email address to receive demo confirmation')
        return
      }
      
      if (!formData.organization.trim()) {
        setStatus('error')
        setMessage('Please enter your organization to personalize your demo')
        return
      }

      // Validate CAPTCHA
      if (formData.captchaAnswer !== captcha.answer) {
        setStatus('error')
        setMessage('Please complete the CAPTCHA verification correctly')
        return
      }

      // Submit form data
      const requestBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        title: formData.title,
        organization: formData.organization,
        source: source,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      }

      console.log('Submitting form with data:', requestBody)
      
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      
      const result = await response.json()
      console.log('Response result:', result)

      if (response.ok && result.success) {
        setStatus('success')
        setMessage('Thank you! We\'ve received your demo request and will contact you within 24 hours to schedule your personalized AI governance demo.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          title: '',
          organization: '',
          website: '',
          phone: '',
          captcha: '',
          captchaAnswer: ''
        })
      } else {
        throw new Error(result.error || result.message || 'Failed to submit')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      
      if (error.name === 'AbortError') {
        setStatus('error')
        setMessage('Request timed out. Please check your connection and try again.')
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setStatus('error')
        setMessage('Network error. Please check your connection and try again.')
      } else {
        setStatus('error')
        setMessage(`Submission failed: ${error.message}. Please try again or contact us directly.`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Schedule Your AI Governance Demo</h3>
        <p className="text-sm text-muted-foreground">
          Get a personalized walkthrough of how {APP_CONFIG.NAME} can transform your organization
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <Input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Work Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <Input
        id="title"
        name="title"
        placeholder="Title (Optional)"
        value={formData.title}
        onChange={handleInputChange}
      />
      <Input
        id="organization"
        name="organization"
        placeholder="Organization"
        value={formData.organization}
        onChange={handleInputChange}
        required
      />

      {/* Honeypot fields - hidden from users */}
      <div className="hidden">
        <Input
          id="website"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex="-1"
          autoComplete="off"
        />
        <Input
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      {/* CAPTCHA */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Security Check: {captcha.question}
          </label>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="text-xs text-primary hover:text-primary/80 underline"
          >
            New question
          </button>
        </div>
        <input
          id="captchaAnswer"
          name="captchaAnswer"
          type="text"
          placeholder="Enter your answer"
          value={formData.captchaAnswer}
          onChange={handleInputChange}
          required
          className="max-w-xs h-9 px-3 py-1 text-base rounded-md border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        <p className="text-xs text-gray-500 mt-1">
          This helps us prevent automated submissions
        </p>
      </div>

      <Button 
        type="submit" 
        disabled={status === 'loading'} 
        className="w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Scheduling Demo...
          </>
        ) : (
          <>
            Schedule Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {status === 'success' && (
        <div className="flex items-center text-green-600 mt-4">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>{message}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center text-red-600 mt-4">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{message}</span>
        </div>
      )}
    </form>
  )
}

export default EmailCapturePhp

