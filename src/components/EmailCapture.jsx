import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

function EmailCapture({ source = "homepage" }) {
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
      [name]: value
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
    
    if (!formData.email || !formData.email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }
    
    if (!formData.organization.trim()) {
      setStatus('error')
      setMessage('Please enter your organization')
      return
    }

    setStatus('loading')
    
    try {
      // Send lead to backend API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: source,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct'
        })
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! We\'ll be in touch soon.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          title: '',
          organization: ''
        })
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again or contact us directly.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={handleInputChange}
          disabled={status === 'loading'}
          className="bg-white text-foreground"
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={handleInputChange}
          disabled={status === 'loading'}
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
        disabled={status === 'loading'}
        className="bg-white text-foreground"
        required
      />
      
      <Input
        type="text"
        name="title"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleInputChange}
        disabled={status === 'loading'}
        className="bg-white text-foreground"
      />
      
      <Input
        type="text"
        name="organization"
        placeholder="Organization *"
        value={formData.organization}
        onChange={handleInputChange}
        disabled={status === 'loading'}
        className="bg-white text-foreground"
        required
      />
      
      <Button 
        type="submit" 
        size="lg" 
        disabled={status === 'loading'}
        className="w-full text-lg"
        variant="secondary"
      >
        {status === 'loading' ? (
          'Submitting...'
        ) : (
          <>
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      
      {status === 'success' && (
        <div className="flex items-center justify-center text-green-600 mt-4">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{message}</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center justify-center text-red-600 mt-4">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{message}</span>
        </div>
      )}
      
      <p className="text-xs text-primary-foreground/70 text-center mt-2">
        * Required fields. We respect your privacy and will never share your information.
      </p>
    </form>
  )
}

export default EmailCapture

