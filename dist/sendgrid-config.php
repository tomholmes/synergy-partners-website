<?php
// SendGrid Configuration
// Load configuration from environment file

// Function to load environment variables from config.env
function loadEnv($filePath) {
    if (!file_exists($filePath)) {
        return false;
    }
    
    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue; // Skip comments
        
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            
            // Remove quotes if present
            if ((substr($value, 0, 1) === '"' && substr($value, -1) === '"') ||
                (substr($value, 0, 1) === "'" && substr($value, -1) === "'")) {
                $value = substr($value, 1, -1);
            }
            
            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
    return true;
}

// Load environment variables
$configFile = __DIR__ . '/config.env';
if (!loadEnv($configFile)) {
    error_log('ERROR: config.env file not found. SendGrid configuration required.');
    die('SendGrid configuration error: config.env file not found');
}

// Get configuration from environment variables with fallbacks
$SENDGRID_API_KEY = $_ENV['SENDGRID_API_KEY'] ?? getenv('SENDGRID_API_KEY') ?? 'YOUR_SENDGRID_API_KEY_HERE';
$SENDER_EMAIL = $_ENV['SENDER_EMAIL'] ?? getenv('SENDER_EMAIL') ?? 'noreply@synergypartners.ai';
$SENDER_NAME = $_ENV['SENDER_NAME'] ?? getenv('SENDER_NAME') ?? 'SynergyPartners.AI Lead Capture';
$RECIPIENT_EMAIL = $_ENV['RECIPIENT_EMAIL'] ?? getenv('RECIPIENT_EMAIL') ?? 'tholmes@synergypartners.ai';
$RECIPIENT_NAME = $_ENV['RECIPIENT_NAME'] ?? getenv('RECIPIENT_NAME') ?? 'Tom Holmes';

// Security check - warn if using default API key
if ($SENDGRID_API_KEY === 'YOUR_SENDGRID_API_KEY_HERE') {
    error_log('ERROR: SendGrid API key not configured. Please set SENDGRID_API_KEY in config.env');
}

// Instructions:
// 1. Copy config.env.example to config.env
// 2. Get your SendGrid API key from: https://app.sendgrid.com/settings/api_keys
// 3. Replace the placeholder values with your actual configuration
// 4. Verify your sender email in SendGrid: https://app.sendgrid.com/settings/sender_auth
// 5. Make sure your SendGrid account has sending permissions enabled
// 6. NEVER commit config.env to version control
?>
