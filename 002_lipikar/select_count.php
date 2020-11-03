<?php
require_once "connect.php";

$query = "SELECT * FROM counters WHERE id = $id_counter";
$result = mysqli_query($link, $query);
	
while($row = mysqli_fetch_array($result)){
	$id = $row['id'];
	$count = $row['count'];
}
mysqli_close($link);
?>