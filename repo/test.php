<?php
foreach (glob("Files/*/*.deb") as $filename) {
$arch = "iphoneos-arm";

$dir = dirname($filename);

//$file = file_get_contents($dir . '/control', FILE_USE_INCLUDE_PATH);
//echo "$filename size " . filesize($filename) . "<br>";
echo "Architecture: " . $arch . "<br>";
echo "Filename: " . $filename . "<br>";
echo "Package: " . basename($filename).PHP_EOL . "<br>";
echo "Size: " . filesize($filename) . "<br>";
echo "MD5sum: " . md5_file($filename) . "<br>";
//echo "Depiction: " . $dir . "/index.html" . "<br>";
//echo "Depiction: " . "http://BannerBomb.github.io/repo" . $dir . "/index.html" . "<br>";
echo "Depiction: " . "http://" . $_SERVER['HTTP_HOST'] . "/repo/" . $dir . "/index.html" . "<br>";
//echo "File Text " . $file . "<br>";
echo "<br>";
}
?>
