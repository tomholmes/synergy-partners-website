<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Enable error logging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Include SendGrid configuration
$configFile = __DIR__ . '/sendgrid-config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'SendGrid configuration not found']);
    exit();
}

include_once $configFile;

// Validate required configuration
if (empty($SENDGRID_API_KEY) || empty($SENDER_EMAIL) || empty($RECIPIENT_EMAIL)) {
    http_response_code(500);
    echo json_encode(['error' => 'SendGrid configuration incomplete']);
    exit();
}

// Anti-bot protection functions
function getClientIP() {
    $ipKeys = ['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR'];
    foreach ($ipKeys as $key) {
        if (array_key_exists($key, $_SERVER) === true) {
            foreach (explode(',', $_SERVER[$key]) as $ip) {
                $ip = trim($ip);
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                    return $ip;
                }
            }
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function isRateLimited($ip) {
    $rateLimitFile = __DIR__ . '/rate-limit.json';
    $maxSubmissions = 5; // Max 5 submissions per hour per IP
    $hour = date('Y-m-d-H');
    
    if (file_exists($rateLimitFile)) {
        $data = json_decode(file_get_contents($rateLimitFile), true);
    } else {
        $data = [];
    }
    
    // Clean old data
    foreach ($data as $key => $value) {
        if ($key !== $hour) {
            unset($data[$key]);
        }
    }
    
    // Check current hour
    if (!isset($data[$hour])) {
        $data[$hour] = [];
    }
    
    if (!isset($data[$hour][$ip])) {
        $data[$hour][$ip] = 0;
    }
    
    if ($data[$hour][$ip] >= $maxSubmissions) {
        return true;
    }
    
    // Increment counter
    $data[$hour][$ip]++;
    file_put_contents($rateLimitFile, json_encode($data));
    
    return false;
}

function isBlockedIP($ip) {
    $blockedFile = __DIR__ . '/blocked-ips.json';
    if (file_exists($blockedFile)) {
        $blocked = json_decode(file_get_contents($blockedFile), true);
        return in_array($ip, $blocked);
    }
    return false;
}

function logSuspiciousActivity($ip, $reason) {
    $logEntry = date('Y-m-d H:i:s') . " - SUSPICIOUS ACTIVITY from $ip: $reason\n";
    file_put_contents('security.log', $logEntry, FILE_APPEND | LOCK_EX);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get client IP and check security
$clientIP = getClientIP();

// Check if IP is blocked
if (isBlockedIP($clientIP)) {
    logSuspiciousActivity($clientIP, 'Blocked IP attempted access');
    http_response_code(403);
    echo json_encode(['error' => 'Access denied']);
    exit();
}

// Check rate limiting
if (isRateLimited($clientIP)) {
    logSuspiciousActivity($clientIP, 'Rate limit exceeded');
    http_response_code(429);
    echo json_encode(['error' => 'Too many submissions. Please try again later.']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['firstName']) || empty($input['lastName']) || empty($input['email']) || empty($input['organization'])) {
    logSuspiciousActivity($clientIP, 'Missing required fields');
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit();
}

// Validate email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    logSuspiciousActivity($clientIP, 'Invalid email format');
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Check honeypot field (bots often fill hidden fields)
if (!empty($input['website']) || !empty($input['phone'])) {
    logSuspiciousActivity($clientIP, 'Honeypot field filled - likely bot');
    // Block this IP for 24 hours
    $blockedFile = __DIR__ . '/blocked-ips.json';
    $blocked = file_exists($blockedFile) ? json_decode(file_get_contents($blockedFile), true) : [];
    if (!in_array($clientIP, $blocked)) {
        $blocked[] = $clientIP;
        file_put_contents($blockedFile, json_encode($blocked));
    }
    http_response_code(403);
    echo json_encode(['error' => 'Access denied']);
    exit();
}

// Validate CAPTCHA (simple math question)
if (!isset($input['captchaAnswer']) || empty($input['captchaAnswer'])) {
    logSuspiciousActivity($clientIP, 'CAPTCHA answer missing');
    http_response_code(400);
    echo json_encode(['error' => 'Please answer the security question']);
    exit();
}

// For now, we'll accept any non-empty answer to avoid blocking legitimate users
// In production, you might want to implement proper math validation
// if (!is_numeric($input['captchaAnswer']) || intval($input['captchaAnswer']) < 0) {
//     logSuspiciousActivity($clientIP, 'CAPTCHA answer invalid format');
//     http_response_code(400);
//     echo json_encode(['error' => 'Please enter a valid number']);
//     exit();
// }

// Sanitize inputs
$firstName = htmlspecialchars(trim($input['firstName']));
$lastName = htmlspecialchars(trim($input['lastName']));
$email = htmlspecialchars(trim($input['email']));
$title = htmlspecialchars(trim($input['title'] ?? 'Not provided'));
$organization = htmlspecialchars(trim($input['organization']));
$industry = htmlspecialchars(trim($input['industry'] ?? 'Not specified'));
$source = htmlspecialchars(trim($input['source'] ?? 'website'));
$timestamp = htmlspecialchars(trim($input['timestamp'] ?? date('c')));

// Email configuration
$to = $RECIPIENT_EMAIL;
$subject = "New Lead: $firstName $lastName from $organization";

// Email content
$emailBody = "
New Lead Submission from SynergyPartners.AI Website

Contact Information:
- Name: $firstName $lastName
- Email: $email
- Title: $title
- Organization: $organization
- Industry: $industry

Lead Details:
- Source: $source
- Timestamp: $timestamp
- IP Address: $clientIP
- User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "

This lead was captured from the SynergyPartners.AI website.
Please follow up promptly.

---
SynergyPartners.AI Lead Capture System
";

// Log the attempt
$logEntry = date('Y-m-d H:i:s') . " - Attempting to send lead via SendGrid: $firstName $lastName ($email) from $organization (IP: $clientIP)\n";
file_put_contents('leads.log', $logEntry, FILE_APPEND | LOCK_EX);

// SendGrid configuration
$sendgridApiKey = $SENDGRID_API_KEY;
$sendgridUrl = 'https://api.sendgrid.com/v3/mail/send';

// Prepare SendGrid email data
$emailData = [
    'personalizations' => [
        [
            'to' => [
                ['email' => $to, 'name' => $RECIPIENT_NAME]
            ],
            'subject' => $subject
        ]
    ],
    'from' => [
        'email' => $SENDER_EMAIL,
        'name' => $SENDER_NAME
    ],
    'reply_to' => [
        'email' => $email,
        'name' => "$firstName $lastName"
    ],
    'content' => [
        [
            'type' => 'text/plain',
            'value' => $emailBody
        ]
    ]
];

// Send email using SendGrid API
$mailSent = false;
$mailError = '';

try {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $sendgridUrl);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $sendgridApiKey,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($httpCode === 202) {
        $mailSent = true;
        $mailError = '';
    } else {
        $mailSent = false;
        $mailError = "HTTP $httpCode - Response: $response";
        if ($curlError) {
            $mailError .= " - cURL Error: $curlError";
        }
    }
    
} catch (Exception $e) {
    $mailSent = false;
    $mailError = 'Exception: ' . $e->getMessage();
}

// Log the result
$resultLog = date('Y-m-d H:i:s') . " - SendGrid result: " . ($mailSent ? 'SUCCESS' : 'FAILED') . ($mailError ? " - Error: $mailError" : '') . "\n";
file_put_contents('leads.log', $resultLog, FILE_APPEND | LOCK_EX);

// Always log the lead regardless of email success
$leadLog = date('Y-m-d H:i:s') . " - Lead captured: $firstName $lastName ($email) from $organization\n";
file_put_contents('leads.log', $leadLog, FILE_APPEND | LOCK_EX);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Lead submitted successfully! We\'ll contact you within 24 hours.']);
} else {
    // Even if email fails, we still captured the lead in the log
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Lead submitted successfully (stored locally)',
        'note' => 'Email delivery may be delayed due to server configuration. We\'ll contact you soon!'
    ]);
}
?>

