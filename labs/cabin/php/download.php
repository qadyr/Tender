<?php
$file_name = $_GET['img'];
header("Pragma: public"); // required
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private",false); // required for certain browsers
header("Content-type: image");
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=\"$file_name\"");
header("Content-Transfer-Encoding: binary");
// Read the file from disk
readfile($file_name);
//echo $file_name;
?>