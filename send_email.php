<?php
// send_email.php - Contact Form Email Handler
session_start();

// Set the recipient email address
$to_email = "chathura123yes@gmail.com"; 
$subject_prefix = "DAMSADI Contact Form: ";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input to prevent injection
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    
    // Validation
    if (empty($name) || empty($phone) || empty($message)) {
        echo json_encode(['success' => false, 'message' => ($_SESSION['language'] == 'en' ? 'Please fill all fields.' : 'කරුණාකර සියලු තොරතුරු ඇතුළත් කරන්න.')]);
        exit;
    }

    $subject = $subject_prefix . $name;
    
    // Email Content (HTML Format)
    $email_body = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
        <div style='background: #1A5D1A; color: white; padding: 15px;'><h2>New Message from DAMSADI Website</h2></div>
        <div style='padding: 20px; border: 1px solid #E8E8E8;'>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
        </div>
    </body>
    </html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Website Contact <no-reply@damsadi.lk>" . "\r\n";

    if (mail($to_email, $subject, $email_body, $headers)) {
        echo json_encode(['success' => true, 'message' => ($_SESSION['language'] == 'en' ? 'Sent successfully!' : 'සාර්ථකව යවන ලදී!')]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Email failed to send.']);
    }
    exit;
}
?>