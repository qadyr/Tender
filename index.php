<?php
$filename = __DIR__ . DIRECTORY_SEPARATOR . 'index.html';
if (file_exists($filename) && is_file($filename) && is_readable($filename)) {
    $str = file_get_contents($filename);
    $referrer = isset($_SERVER) && is_array($_SERVER) && array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null;
    if (isset($_GET) && isset($_GET['dump_referrer'])) {
        die($referrer);
    }
    $str = str_ireplace("a4a6a23298624174b55a0b8cd7e14b44", $referrer, $str);
    echo $str;
    die();
}
if (!headers_sent()) {
    header("HTTP/1.0 404 Not Found");
}
die();
