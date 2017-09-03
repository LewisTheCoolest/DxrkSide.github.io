<?php
foreach (glob("Files/*/*.deb") as $filename) {
$arch = "iphoneos-arm";
//echo "$filename size " . filesize($filename) . "<br>";
echo "Architecture: " . $arch . "<br>";
echo "Filename: " . $filename . "<br>";
echo "Size: " . filesize($filename) . "<br>";
echo "MD5sum: " . md5_file($filename) . "<br>";
echo "<br>";
}
?>
