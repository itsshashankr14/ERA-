<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = "shashankgowdar2406@gmail.com"; // Update with the developer's email address
  $headers = "From: $email \r\n";
  $headers .= "Reply-To: $email \r\n";

  $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message. Please try again.";
  }
}
?>