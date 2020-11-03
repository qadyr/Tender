<?php
require_once "connect.php";

session_start();
$_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
$ip = $_SESSION['ip'];
	
setcookie("ip", $ip);
setcookie("ip", $ip, time()+60);  /* срок действия 1 минута */
//setcookie("ip", $ip, time()+60, "/~rasmus/", "example.com", 1);
	
//echo $_SESSION['ip'] . "<br />";
//echo $ip;
//echo $_COOKIE["ip"];
$ip = $_COOKIE["ip"];


$id_counter = $_GET['id'];


$query = "SELECT * FROM counters WHERE id = $id_counter";	
$result = mysqli_query($link, $query);

if($ip) {
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = $row['count'];
	}
	
	$arr = array('id' => $id, 'count' => $count, 'ip' => $ip);
	echo json_encode($arr);
} else {
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = $row['count'] + 1;
	}
	
	$query = "UPDATE counters SET count=$count WHERE id=$id_counter";
	$result = mysqli_query($link, $query);
	
	$arr = array('id' => $id, 'count' => $count, 'ip' => $ip);
	echo json_encode($arr);
}

mysqli_close($link);
?>