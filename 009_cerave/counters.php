<html>
<head>
<meta charset="utf-8">
<title></title>
</head>

<body>


<?php
require_once "connect.php";

	$query = "SELECT * FROM counters";
	$result = mysqli_query($link, $query);
	
	while($row = mysqli_fetch_array($result)){
		echo "Счетчик " . $row['id'] . ":";
		echo $row['count'] . " кликов <br>\n";
	}
mysqli_close($link);
?>
	
</body>
</html>