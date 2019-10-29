<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Jill Augustus</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Montserrat" rel="stylesheet">





  <link rel="stylesheet" type="text/css" media="screen" href="CSS/style.css">

</head>

<h1>Thanks for your message! I will get back to you soon!</h1>

<?php
	require 'PHPMailer-master/src/PHPMailer.php';

	$userName 		= $_POST['myName'];
	$userEmail	 	= $_POST['myEmail'];
	$userMessage 		= $_POST['myMessage'];
	$to 			= "info@jilliemac.com";
	$subject 		= "Email from my website";
	$body 			= "Information Submitted:";
	$body .= "\r\n Name: " . $userName;
	$body .= "\r\n Email: " . $userEmail;
	$body .= "\r\n Message: " . $userMessage;
	mail($to, $subject, $body);

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Thanks for your message! I will get back to you soon!';
}
?>