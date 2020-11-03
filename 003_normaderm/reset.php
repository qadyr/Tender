<?php
require_once "connect.php";
$id_counter = $_GET['id'];
/*
$query = "SELECT * FROM counters WHERE id = $id_counter";	
$result = mysqli_query($link, $query);
	
while($row = mysqli_fetch_array($result)){
	$id = $row['id'];
	$count = $row['count'] + 1;
}
*/	
$query = "UPDATE counters SET count=0 WHERE id=$id_counter";
$result = mysqli_query($link, $query);

echo "Счетчик " . $id_counter . " обнулен.";

mysqli_close($link);
?>