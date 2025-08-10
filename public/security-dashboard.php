<?php
// Security Dashboard - Monitor bot activity and blocked IPs
header('Content-Type: text/html; charset=utf-8');

// Simple authentication (you should make this more secure)
$adminPassword = 'synergy2024'; // Change this to a secure password
$isAuthenticated = false;

if (isset($_POST['password']) && $_POST['password'] === $adminPassword) {
    $isAuthenticated = true;
}

if (!$isAuthenticated) {
    echo '<!DOCTYPE html>
    <html>
    <head>
        <title>Security Dashboard - Login</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 400px; margin: 100px auto; padding: 20px; }
            .login-form { background: #f5f5f5; padding: 30px; border-radius: 8px; }
            input[type="password"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; }
            button { background: #007cba; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; width: 100%; }
            button:hover { background: #005a87; }
        </style>
    </head>
    <body>
        <div class="login-form">
            <h2>Security Dashboard Login</h2>
            <form method="POST">
                <input type="password" name="password" placeholder="Enter password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>';
    exit;
}

// Dashboard content
echo '<!DOCTYPE html>
<html>
<head>
    <title>Security Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #333; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stat-number { font-size: 2em; font-weight: bold; color: #007cba; }
        .log-section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .log-content { background: #f8f9fa; padding: 15px; border-radius: 4px; max-height: 400px; overflow-y: auto; font-family: monospace; font-size: 12px; }
        .danger { color: #dc3545; }
        .warning { color: #ffc107; }
        .success { color: #28a745; }
        .refresh-btn { background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin: 10px 0; }
        .refresh-btn:hover { background: #218838; }
        .clear-btn { background: #dc3545; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin: 10px 10px 10px 0; }
        .clear-btn:hover { background: #c82333; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ Security Dashboard</h1>
            <p>Monitor bot activity and security threats</p>
        </div>';

// Get statistics
$securityLog = file_exists('security.log') ? file_get_contents('security.log') : '';
$leadsLog = file_exists('leads.log') ? file_get_contents('leads.log') : '';
$rateLimitData = file_exists('rate-limit.json') ? json_decode(file_get_contents('rate-limit.json'), true) : [];
$blockedIPs = file_exists('blocked-ips.json') ? json_decode(file_get_contents('blocked-ips.json'), true) : [];

// Count suspicious activities
$suspiciousCount = substr_count($securityLog, 'SUSPICIOUS ACTIVITY');
$totalLeads = substr_count($leadsLog, 'Lead captured');
$blockedCount = count($blockedIPs);

// Current rate limiting
$currentHour = date('Y-m-d-H');
$currentRateLimit = isset($rateLimitData[$currentHour]) ? array_sum($rateLimitData[$currentHour]) : 0;

echo '<div class="stats-grid">
    <div class="stat-card">
        <h3>🚨 Suspicious Activities</h3>
        <div class="stat-number danger">' . $suspiciousCount . '</div>
        <p>Total bot attempts</p>
    </div>
    <div class="stat-card">
        <h3>✅ Successful Leads</h3>
        <div class="stat-number success">' . $totalLeads . '</div>
        <p>Legitimate submissions</p>
    </div>
    <div class="stat-card">
        <h3>🚫 Blocked IPs</h3>
        <div class="stat-number warning">' . $blockedCount . '</div>
        <p>Currently blocked</p>
    </div>
    <div class="stat-card">
        <h3>⚡ Current Hour Activity</h3>
        <div class="stat-number">' . $currentRateLimit . '</div>
        <p>Submissions this hour</p>
    </div>
</div>';

// Security Log
echo '<div class="log-section">
    <h2>🚨 Security Log (Last 100 entries)</h2>
    <button class="refresh-btn" onclick="location.reload()">🔄 Refresh</button>
    <button class="clear-btn" onclick="if(confirm(\'Clear security log?\')) window.location.href=\'?clear=security\'">🗑️ Clear Security Log</button>
    <div class="log-content">';

if ($securityLog) {
    $lines = array_slice(array_reverse(explode("\n", $securityLog)), 0, 100);
    foreach ($lines as $line) {
        if (trim($line)) {
            $class = '';
            if (strpos($line, 'SUSPICIOUS ACTIVITY') !== false) $class = 'danger';
            elseif (strpos($line, 'Rate limit exceeded') !== false) $class = 'warning';
            echo '<div class="' . $class . '">' . htmlspecialchars($line) . '</div>';
        }
    }
} else {
    echo '<div class="success">No security issues detected</div>';
}

echo '</div></div>';

// Rate Limiting Data
echo '<div class="log-section">
    <h2>⚡ Rate Limiting Status</h2>
    <div class="log-content">';

if ($rateLimitData) {
    foreach ($rateLimitData as $hour => $ips) {
        echo '<div><strong>' . $hour . ':</strong> ' . count($ips) . ' unique IPs, ' . array_sum($ips) . ' total submissions</div>';
    }
} else {
    echo '<div class="success">No rate limiting data</div>';
}

echo '</div></div>';

// Blocked IPs
echo '<div class="log-section">
    <h2>🚫 Blocked IP Addresses</h2>
    <button class="clear-btn" onclick="if(confirm(\'Unblock all IPs?\')) window.location.href=\'?clear=blocked\'">🔓 Unblock All</button>
    <div class="log-content">';

if ($blockedIPs) {
    foreach ($blockedIPs as $ip) {
        echo '<div class="danger">' . htmlspecialchars($ip) . '</div>';
    }
} else {
    echo '<div class="success">No IPs currently blocked</div>';
}

echo '</div></div>';

// Handle clear actions
if (isset($_GET['clear'])) {
    if ($_GET['clear'] === 'security' && file_exists('security.log')) {
        unlink('security.log');
        echo '<script>alert("Security log cleared"); location.reload();</script>';
    } elseif ($_GET['clear'] === 'blocked' && file_exists('blocked-ips.json')) {
        unlink('blocked-ips.json');
        echo '<script>alert("All IPs unblocked"); location.reload();</script>';
    }
}

echo '</div></body></html>';
?>
