<?php
// create_logo.php
header('Content-Type: image/png');

$width = 300;
$height = 100;

// Create image
$image = imagecreatetruecolor($width, $height);

// Allocate colors
$green = imagecolorallocate($image, 26, 93, 26);  // #1A5D1A
$gold = imagecolorallocate($image, 212, 175, 55); // #D4AF37
$white = imagecolorallocate($image, 255, 255, 255);
$light_green = imagecolorallocate($image, 46, 139, 87); // #2E8B57

// Fill background
imagefilledrectangle($image, 0, 0, $width, $height, $white);

// Draw decorative elements
imagefilledellipse($image, 50, 50, 80, 80, $green);
imagefilledellipse($image, 250, 50, 60, 60, $gold);

// Add text
$font = 5; // Built-in font
imagestring($image, $font, 100, 30, "DAMSADI", $green);
imagestring($image, 3, 110, 60, "PRODUCTS", $gold);

// Output image
imagepng($image);
imagedestroy($image);
?>

