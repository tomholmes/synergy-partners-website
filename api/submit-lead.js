// Vercel serverless function for handling lead submissions
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, source, timestamp, userAgent, referrer } = req.body

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' })
    }

    // Prepare email content
    const emailContent = `
New Lead Submission from SynergyPartners.AI Website

Email: ${email}
Source: ${source}
Timestamp: ${timestamp}
User Agent: ${userAgent}
Referrer: ${referrer}

This lead was captured from the SynergyPartners.AI website.
Please follow up promptly.

---
SynergyPartners.AI Lead Capture System
    `.trim()

    // Send email using a service like SendGrid, Resend, or similar
    // For now, we'll use a simple fetch to a webhook service
    
    // Option 1: Using EmailJS (client-side service)
    // Option 2: Using Resend API
    // Option 3: Using SendGrid API
    // Option 4: Using a webhook service like Zapier

    // Example using a webhook (you can replace with actual email service)
    const webhookResponse = await fetch('https://hooks.zapier.com/hooks/catch/your-webhook-id/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'tholmes@synergypartners.ai',
        subject: 'New Lead from SynergyPartners.AI Website',
        email: email,
        source: source,
        timestamp: timestamp,
        userAgent: userAgent,
        referrer: referrer,
        message: emailContent
      })
    })

    // For demonstration, we'll also log the lead (in production, save to database)
    console.log('New lead captured:', {
      email,
      source,
      timestamp,
      userAgent: userAgent?.substring(0, 100), // Truncate for logging
      referrer
    })

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Lead submitted successfully' 
    })

  } catch (error) {
    console.error('Error processing lead submission:', error)
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process lead submission'
    })
  }
}

