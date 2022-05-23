<?php
echo "Crop Image Circle And Remove Background";
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
$crop = new CircleCrop($image, 760, 785);
$crop->crop()->display();
//----------------------------------------------------------------------


//---------------------- Remove Background ------------------------------
//$o_pic = 'svp120_latest.png';
$o_pic = 'svp120_latest.png';
$name = pngMerge($o_pic, 'test2.png');

function pngMerge($o_pic, $out_pic)
{
	$begin_r = 255;
	$begin_g = 250;
	$begin_b = 250;
	list($src_w, $src_h) = getimagesize($o_pic); // Get the original image information
	$src_im = imagecreatefrompng($o_pic); // Read png picture
	print_r($src_im);
	imagesavealpha($src_im, true); //This is very important. It means don't lose the transparent color of the $src_im image.
	$src_white = imagecolorallocatealpha($src_im, 255, 255, 255, 127); // Create a white transparent canvas
	$green = imagecolorallocatealpha($src_im, 255, 255, 255, 127); // Create a white transparent canvas
	for ($x = 0; $x < $src_w; $x++) {
		for ($y = 0; $y < $src_h; $y++) {
			$rgb = imagecolorat($src_im, $x, $y);
			$r = ($rgb >> 16) & 0xFF;
			$g = ($rgb >> 8) & 0xFF;
			$b = $rgb & 0xFF;

			if ($r >= 230 && $r <= 255 && $g >= 230 && $g <= 255 && $b >= 230 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Blue
			else if ($r == 62 && $g == 100 && $b == 145) {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Blue -1
			else if ($r >= 0 && $r <= 220 && $g >= 150 && $g <= 255 && $b >= 150 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			} else if ($r == 54 && $g == 132 && $b == 207) {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			} else if ($r >= 0 && $r <= 30 && $g >= 0 && $g <= 30 && $b >= 0 && $b <= 30) {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			} else if ($r == 22 && $g == 27 && $b == 5) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			} else if ($r == 120 && $g == 123 && $b == 80) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}
			//Color Black
			else if ($r == 22 && $g == 27 && $b == 5) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -1
			else if ($r == 22 && $g == 33 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -2
			else if ($r == 36 && $g == 47 && $b == 13) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -3
			else if ($r >= 0 && $r <= 30 && $g <= 30 && $g >= 0 && $b >= 0 && $b <= 30) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -4
			else if ($r == 29 && $g == 32 && $b == 1) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -5
			else if ($r == 31 && $g == 32 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -6
			else if ($r == 31 && $g == 31 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -7
			else if ($r == 30 && $g == 31 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -8
			else if ($r == 31 && $g == 36 && $b == 13) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Black -9
			else if ($r >= 20 && $r <= 35  && $g >= 30 && $g <= 45 && $b >= 0 && $b <= 15) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}
			//Color Blue -1
			if ($r >= 0 && $r <= 220 && $g >= 150 && $g <= 255 && $b >= 150 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Green -3
			else if ($r >= 135 && $r <= 160 && $g >= 10 && $g <= 200 && $b >= 15 && $b <= 150) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Brow
			else if ($r >= 150 && $r <= 170 && $g >= 150 && $g <= 165 && $b >= 86 && $b <= 115) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			else if ($r >= 11 && $r <= 255 && $g >= 79 && $g <= 255 && $b >= 9 && $b <= 235) {
				//--------------------------------------					
				//--------------------------------------	
				//--------------------------------------	
				//--------------------------------------	
				//--------------------------------------	
			} else {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}
		}
	}

	$target_im = imagecreatetruecolor($src_w, $src_h); //new map
	imagealphablending($target_im, true); //This is very important, meaning that the color is not merged and replaced directly with the $target_im image color, including the transparent color;
	imagesavealpha($target_im, true); //This is very important, meaning not to lose the transparent color of the $target_im image;
	$tag_white = imagecolorallocatealpha($target_im, 255, 255, 255, 127); // Change the white of the new map to a transparent color Save as tag_white
	imagefill($target_im, 0, 0, $tag_white); // Fill the empty new white in the target new map
	imagecolortransparent($target_im, $tag_white); // Replace with a transparent color
	imagecopymerge($target_im, $src_im, 0, 0, 0, 0, $src_w, $src_h, 100); // Merge the original image and the newly generated transparent map
	imagepng($target_im, $out_pic);
	return $out_pic;
}
//----------------------------------------------------------------------
