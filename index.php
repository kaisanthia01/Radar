<?php
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

			} else if ($r >= 11 && $r <= 255 && $g >= 79 && $g <= 255 && $b >= 9 && $b <= 235) {
			} else {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Blue
			/*if ($r == 62 && $g == 100 && $b = 145) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}*/

			/*if (!($r <= $begin_r && $g <= $begin_g && $b <= $begin_b)) {
				imagefill($src_im, $x, $y, $src_white); // replaced with white
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}*/
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

//$o_pic = 'svp120_latest.png';
$o_pic = 'test3.png';
$name = pngMerge($o_pic, 'test2.png');
print_r($name);
