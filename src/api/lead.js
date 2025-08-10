// Simple API endpoint for lead submissions
// In a production environment, this would connect to a backend service

export async function submitLead(leadData) {
  try {
    // Simulate API call - replace with actual endpoint
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    })

    if (!response.ok) {
      throw new Error('Failed to submit lead')
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting lead:', error)
    throw error
  }
}

// Fallback function for development/testing
export async function submitLeadFallback() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate success response
  return {
    success: true,
    message: 'Lead submitted successfully (demo mode)'
  }
}
