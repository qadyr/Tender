<?php
/*
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


require_once '../vendor/autoload.php';
require_once 'connect.php';

$ip = $_SERVER['REMOTE_ADDR'];

if(isset($_POST['submit'])){

$pieces = explode('.', $_FILES['image_file']['name']);
$name = substr(md5(time()), 0, 8) . '.' . $pieces[1];

$size = $_FILES['image_file']['size'];
	
$uploaddir = '/var/www/html/uploads/';
$uploadfile = $uploaddir . $name;

move_uploaded_file($_FILES['image_file']['tmp_name'], $uploadfile);

if(isset($_POST['bg'])){
	$bg = $_POST['bg'];
}
		

$path_to_file = "/var/www/html/uploads/" . $name;
$bg_image_file = "/var/www/html/php/" . $bg . ".jpg";

if($size > 2097152) { //2 mb
//imagick
$im = new Imagick($path_to_file);
$im->setImageCompression(Imagick::COMPRESSION_UNDEFINED);
$im->setImageCompressionQuality(90); //set image compression
$im->writeImage($path_to_file);
}


// Requires "guzzle" to be installed (see guzzlephp.org)

$client = new GuzzleHttp\Client();

try {
	$res = $client->post('https://api.remove.bg/v1.0/removebg', [
    	'multipart' => [
        	[
            	'name'     => 'image_file',
            	'contents' => fopen($path_to_file, 'r')
        	],
        	[
            	'name'     => 'size',
            	'contents' => 'auto'
			],
			[
           		'name'     => 'bg_image_file',
            	'contents' => fopen($bg_image_file, 'r')
			],
		
    	],
    		'headers' => [
        	'X-Api-Key' => 'HjadmAez1csnVkFMtWq8o71G', //HjadmAez1csnVkFMtWq8o71G | iujQnTLwFYYvo4YAZwcwzmM
    	]
	]);

	$query = "INSERT INTO upload(ip, result) VALUES('$ip', 1)";	
	$result = mysqli_query($link, $query);
	
	mysqli_close($link);
	
} catch(Exception $e) {
	echo "<div id='email_div' style='position: absolute; top: 45%; left: 45%;  padding: 30px; background-color: #FFFFFF; border: 1px solid ;'>
		<form action='report.php?img=" . $name . "&bg=" . $bg . "' method='POST'>
		<input type='email' name='email' placeholder='Email' required><br /><br />
		<input type='submit' name='email_button' value='Report'>
		</form>
		</div>";
    //echo $e->getMessage();
}
	
$fp = fopen($name, "wb");
	
fwrite($fp, $res->getBody());
fclose($fp);

//header('Location: https://demo.lorealcongress.ru?name=' . $name . '&bg=' . $bg . '');
//exit;
}
*/

$up = "1";
$ip = $_SERVER['REMOTE_ADDR'];

$arr = array('up' => $up, 'ip' => $ip);
echo json_encode($arr);

?>
