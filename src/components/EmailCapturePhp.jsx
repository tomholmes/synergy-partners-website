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
    console.log('CAPTCHA validation:', {
      userAnswer: formData.captchaAnswer,
      correctAnswer: captcha.answer,
      question: captcha.question
    })
    
    if (!formData.captchaAnswer || formData.captchaAnswer !== captcha.answer) {
      setStatus('error')
      setMessage('Please answer the security question correctly')
      return
    }

    try {
      const requestBody = {
        ...formData,
        captcha: captcha.question,
        captchaAnswer: formData.captchaAnswer,
        source,
        timestamp: new Date().toISOString()
      }
      
      console.log('Submitting form data:', requestBody)
      
      const response = await fetch('/submit-lead.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      })

      const result = await response.json()

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
        throw new Error(result.error || 'Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
      setStatus('error')
      setMessage('Unable to submit your demo request. Please try again or contact us directly at tholmes@synergypartners.ai to schedule your demo.')
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

