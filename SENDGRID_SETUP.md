# SendGrid Setup Guide

This guide will help you set up SendGrid for email functionality in your application.

## Prerequisites

1. A SendGrid account (free tier available)
2. A verified sender email address
3. API key with appropriate permissions

## Setup Steps

### 1. Create SendGrid Account

1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for a free account
3. Verify your email address

### 2. Verify Sender Email

1. In your SendGrid dashboard, go to **Settings > Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in your sender information:
   - From Name: Your Company Name
   - From Email: your-email@yourdomain.com
   - Company: Your Company
   - Address: Your Address
   - City: Your City
   - State: Your State
   - Zip: Your Zip Code
   - Country: Your Country
4. Click **Create**
5. Check your email and click the verification link

### 3. Generate API Key

1. In your SendGrid dashboard, go to **Settings > API Keys**
2. Click **Create API Key**
3. Name your key (e.g., "Website API Key")
4. Select **Full Access** or **Restricted Access** with **Mail Send** permissions
5. Copy the API key (starts with `SG.`)

### 4. Configure Your Application

#### For PHP:
```php
<?php
// Your SendGrid API Key (get this from your SendGrid dashboard)
$SENDGRID_API_KEY = 'YOUR_SENDGRID_API_KEY_HERE';

// Your verified sender email (must be verified in SendGrid)
$FROM_EMAIL = 'your-verified-email@yourdomain.com';
$FROM_NAME = 'Your Company Name';
?>
```

#### For JavaScript/Node.js:
```javascript
// Your SendGrid API Key
const SENDGRID_API_KEY = 'YOUR_SENDGRID_API_KEY_HERE';

// Your verified sender email
const FROM_EMAIL = 'your-verified-email@yourdomain.com';
const FROM_NAME = 'Your Company Name';
```

### 5. Test Your Setup

1. Send a test email using your API key
2. Check your SendGrid dashboard for delivery status
3. Verify emails are being received

## Security Notes

- **Never commit API keys to version control**
- Use environment variables for sensitive data
- Rotate API keys regularly
- Monitor your SendGrid dashboard for unusual activity

## Troubleshooting

### Common Issues:

1. **Authentication Failed**: Check your API key is correct
2. **Sender Not Verified**: Ensure your sender email is verified in SendGrid
3. **Rate Limiting**: Free tier has limits; upgrade if needed
4. **Spam Filters**: Ensure your content follows best practices

### Getting Help:

- SendGrid Documentation: [docs.sendgrid.com](https://docs.sendgrid.com)
- SendGrid Support: Available in your dashboard
- Community Forums: [community.sendgrid.com](https://community.sendgrid.com)
