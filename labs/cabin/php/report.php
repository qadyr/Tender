<?php
require_once 'connect.php';

if(isset($_POST['email_button'])) {
$uploaddir = '/uploads/';
$new_bg = '/php/';
$name = $_GET['img'];
$bg = $_GET['bg'];
$mime = $_GET['mime'];
$original = $uploaddir . $name;
$original_new_bg = $new_bg . $name;
$bg_image_file = "/php/" . $bg . ".jpg";

$ip = $_SERVER['REMOTE_ADDR'];
$email = $_POST['email'];
$date = date("Y-m-d H:i:s");

$link_bg = "https://demo.lorealcongress.ru/php/download.php?img=" . $bg . ".jpg";
$link_original = "https://demo.lorealcongress.ru/uploads/download.php?img=" . $name;
$link_result_img = "https://demo.lorealcongress.ru/php/download.php?img=" . $name;
	
$query = "INSERT INTO upload(email, ip, result, bg, original, result_img) VALUES('$email', '$ip', 0, '$link_bg', '$link_original', '$link_result_img')";	
$result = mysqli_query($link, $query);
	
mysqli_close($link);

$to      = 'kononov@lights-on.pro';
$subject = 'Report from ' . $email;
$message = 'IP: ' . $ip . '
Дата\время: ' . $date . ' 
Email отправителя: ' . $email . ' 

Скачать фон: ' . $link_bg . ' 
Скачать оригинал: ' . $link_original . '
Скачать результат: ' . $link_result_img;

$headers  = "MIME-Version: 1.0 ";
$headers .= "Content-type: text/plain; charset=utf-8 "; 

mail($to, $subject, $message, $headers);	
	
header('Location: https://demo.lorealcongress.ru?report=1');
exit;
}
?>