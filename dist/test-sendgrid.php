<?php
// Simple SendGrid Test Script
header('Content-Type: text/html; charset=utf-8');

echo "<h1>SendGrid API Test</h1>";

// Include configuration
$configFile = __DIR__ . '/sendgrid-config.php';
if (file_exists($configFile)) {
    include_once $configFile;
    echo "<p>✅ Configuration loaded</p>";
} else {
    echo "<p>❌ Configuration file not found</p>";
    exit;
}

// Test data
$testData = [
    'personalizations' => [
        [
            'to' => [
                ['email' => $RECIPIENT_EMAIL, 'name' => $RECIPIENT_NAME]
            ],
            'subject' => 'Test Email from SendGrid API'
        ]
    ],
    'from' => [
        'email' => $SENDER_EMAIL,
        'name' => $SENDER_NAME
    ],
    'content' => [
        [
            'type' => 'text/plain',
            'value' => "This is a test email from SendGrid API\n\nTimestamp: " . date('Y-m-d H:i:s') . "\n\nIf you receive this, SendGrid is working!"
        ]
    ]
];

echo "<h2>Test Configuration:</h2>";
echo "<ul>";
echo "<li><strong>API Key:</strong> " . substr($SENDGRID_API_KEY, 0, 10) . "...</li>";
echo "<li><strong>From:</strong> $SENDER_EMAIL</li>";
echo "<li><strong>To:</strong> $RECIPIENT_EMAIL</li>";
echo "<li><strong>Subject:</strong> Test Email from SendGrid API</li>";
echo "</ul>";

echo "<h2>Testing SendGrid API...</h2>";

// Test SendGrid API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.sendgrid.com/v3/mail/send');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($testData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $SENDGRID_API_KEY,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_VERBOSE, true);

// Capture verbose output
$verbose = fopen('php://temp', 'w+');
curl_setopt($ch, CURLOPT_STDERR, $verbose);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
$curlInfo = curl_getinfo($ch);

curl_close($ch);

// Show verbose output
rewind($verbose);
$verboseLog = stream_get_contents($verbose);
fclose($verbose);

echo "<h3>API Response:</h3>";
echo "<p><strong>HTTP Status Code:</strong> $httpCode</p>";
echo "<p><strong>Response Body:</strong> <pre>" . htmlspecialchars($response) . "</pre></p>";

if ($curlError) {
    echo "<p><strong>cURL Error:</strong> <span style='color: red;'>$curlError</span></p>";
}

echo "<h3>Detailed cURL Info:</h3>";
echo "<pre>" . print_r($curlInfo, true) . "</pre>";

echo "<h3>Verbose cURL Output:</h3>";
echo "<pre>" . htmlspecialchars($verboseLog) . "</pre>";

if ($httpCode === 202) {
    echo "<h2 style='color: green;'>✅ SUCCESS! Email sent via SendGrid</h2>";
    echo "<p>Check your email at: <strong>$RECIPIENT_EMAIL</strong></p>";
    echo "<p>Note: It may take a few minutes to arrive.</p>";
} else {
    echo "<h2 style='color: red;'>❌ FAILED! HTTP Status: $httpCode</h2>";
    
    if ($httpCode === 401) {
        echo "<p><strong>Authentication Error:</strong> Check your API key</p>";
    } elseif ($httpCode === 403) {
        echo "<p><strong>Permission Error:</strong> Check your API key permissions</p>";
    } elseif ($httpCode === 400) {
        echo "<p><strong>Bad Request:</strong> Check your email data format</p>";
    }
    
    echo "<p><strong>Response:</strong> $response</p>";
}

echo "<hr>";
echo "<p><a href='test-lead.html'>← Back to Test Lead Form</a></p>";
echo "<p><a href='submit-lead.php'>← View Submit Lead Script</a></p>";
?>
