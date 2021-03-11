<?php
require('cropImage.php');
//---------------------- Crop Image ------------------------------------
// load your source image
$src = imagecreatefromjpeg('svp120_latest.jpg');
// create an image resource of your expected size 30x20
$dest = imagecreatetruecolor(760, 785);
// Copy the image
imagecopy(
	$dest,
	$src,
	0,    // 0x of your destination
	0,    // 0y of your destination
	37,   // middle x of your source 
	0,   // middle y of your source
	760,  // 30px of width
	785   // 20px of height
);

// The second parameter should be the path of your destination
imagepng($dest, 'svp120_latest.png');
imagedestroy($dest);
imagedestroy($src);

//---------------------- Crop Image Circle -----------------------------
$image = imagecreatefrompng('svp120_latest.png');
$width = 760;
$height = 785;
$crop = new CircleCrop($image, $width, $height);
$crop->crop()->display();
//----------------------------------------------------------------------
