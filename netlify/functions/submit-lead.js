// Netlify function for handling lead submissions
const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { 
      firstName, 
      lastName, 
      email, 
      title, 
      organization, 
      source, 
      timestamp, 
      userAgent, 
      referrer 
    } = JSON.parse(event.body)

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid email is required' })
      }
    }

    if (!firstName || !lastName || !organization) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'First name, last name, and organization are required' })
      }
    }

    // Create email content
    const emailContent = `
New Lead Submission from SynergyPartners.AI Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Title: ${title || 'Not provided'}
- Organization: ${organization}

Lead Details:
- Source: ${source}
- Timestamp: ${timestamp}
- User Agent: ${userAgent}
- Referrer: ${referrer}

This lead was captured from the SynergyPartners.AI website.
Please follow up promptly.

---
SynergyPartners.AI Lead Capture System
    `.trim()

    // For production, you would set up nodemailer with your email service
    // For now, we'll use a simple webhook approach
    
    // Option 1: Use a webhook service like Zapier
    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'tholmes@synergypartners.ai',
            subject: `New Lead: ${firstName} ${lastName} from ${organization}`,
            firstName: firstName,
            lastName: lastName,
            email: email,
            title: title,
            organization: organization,
            source: source,
            timestamp: timestamp,
            userAgent: userAgent,
            referrer: referrer,
            message: emailContent
          })
        })
        console.log('Webhook sent successfully')
      } catch (webhookError) {
        console.log('Webhook failed, but continuing...', webhookError)
      }
    } else {
      console.warn('ZAPIER_WEBHOOK_URL not configured - skipping webhook')
    }

    // Log the lead for tracking
    console.log('New lead captured:', {
      firstName,
      lastName,
      email,
      title,
      organization,
      source,
      timestamp,
      userAgent: userAgent?.substring(0, 100),
      referrer
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Lead submitted successfully' 
      })
    }

  } catch (error) {
    console.error('Error processing lead submission:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process lead submission'
      })
    }
  }
}

