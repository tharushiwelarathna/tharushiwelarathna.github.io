<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    exit();
  }

  $name = strip_tags(htmlspecialchars($_POST['name']));
  $email = strip_tags(htmlspecialchars($_POST['email']));
  $m_subject = strip_tags(htmlspecialchars($_POST['subject']));
  $message = strip_tags(htmlspecialchars($_POST['message']));

  $to = "nirmanitharushi1@gmail.com";
  $subject = "$m_subject: $name";
  $body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";
  $header = "From: $email";
  $header .= "Reply-To: $email";

  if (mail($to, $subject, $body, $header)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
} else {
  http_response_code(405);
}
