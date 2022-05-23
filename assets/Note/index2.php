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
	for ($x = 0; $x < $src_w; $x++) {
		for ($y = 0; $y < $src_h; $y++) {
			$rgb = imagecolorat($src_im, $x, $y);
			$r = ($rgb >> 16) & 0xFF;
			$g = ($rgb >> 8) & 0xFF;
			$b = $rgb & 0xFF;
			
			//Color Black
			if ($r == 22 && $g == 27 && $b == 5) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -1
			if ($r == 22 && $g == 33 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -2
			if ($r == 36 && $g == 47 && $b == 13) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -3
			if ($r >= 0 && $r <= 30 && $g <= 30 && $g >= 0 && $b >= 0 && $b <= 30) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -4
			if ($r == 29 && $g == 32 && $b == 1) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -5
			if ($r == 31 && $g == 32 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -6
			if ($r == 31 && $g == 31 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -7
			if ($r == 30 && $g == 31 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -8
			if ($r == 31 && $g == 36 && $b == 13) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Black -9
			if ($r >= 20 && $r <= 35  && $g >= 30 && $g <= 45 && $b >= 0 && $b <= 15) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Blue
			if ($r >= 0 && $r <= 254 && $g <= 150 && $g >= 10 && $b >= 15 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Blue -1
			if ($r >= 0 && $r <= 220 && $g >= 150 && $g <= 255 && $b >= 150 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color

			}

			//Color Green -1
			if ($r >= 170 && $r <= 200 && $g <= 200 && $g >= 10 && $b >= 0 && $b <= 200) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -2
			if ($r == 160 && $g == 160 && $b >= 0 && $b <= 150) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -3
			if ($r >= 135 && $r <= 150 && $g <= 200 && $g >= 10 && $b >= 15 && $b <= 150) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -4
			if ($r >= 155 && $r <= 160 && $g <= 160 && $g >= 155 && $b >= 100 && $b <= 110) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -5
			if ($r >= 150 && $r <= 155 && $g <= 170 && $g >= 160 && $b >= 100 && $b <= 110) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -6
			if ($r >= 157 && $r <= 164 && $g <= 160 && $g >= 150 && $b >= 99 && $b <= 115) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			
			//Color Green -7
			if ($r >= 130 && $r <= 135 && $g >= 150 && $g <= 155 && $b >= 95 && $b <= 105) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -8
			if ($r >= 5 && $r <= 15 && $g >= 30 && $g <= 35 && $b >= 0 && $b <= 15) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -9
			if ($r >= 0 && $r <= 15 && $g >= 0 && $g <= 60 && $b == 0) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -10
			if ($r >= 45 && $r <= 51 && $g >= 48 && $g <= 52 && $b >= 7 && $b <= 15) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Green -11
			if ($r >= 0 && $r <= 25 && $g >= 35 && $g <= 60 && $b >= 0 && $b <= 15) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Gray
			if ($r == 239 && $g == 239 && $b == 239) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Gray -1
			if ($r >= 150 && $r <= 214 && $g >= 150 && $g <= 214 && $b >= 150 && $b <= 214) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}
			
			//Color White
			if ($r == 255 && $g == 255 && $b == 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color White -1
			if ($r == 235 && $g == 236 && $b == 230) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color White -2
			if ($r == 255 && $g == 255 && $b == 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color White -3
			if ($r >= 200 && $r <= 255 && $g >= 200 && $g <= 255 && $b >= 200 && $b <= 255) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}

			//Color Brow
			if ($r >= 150 && $r <= 170 && $g >= 150 && $g <= 165 && $b >= 86 && $b <= 115) {
				imagefill($src_im, $x, $y, $src_white); // Fill the color of a point
				imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
			}
		}
	}


	$target_im = imagecreatetruecolor($src_w, $src_h); //new map

	imagealphablending($target_im, false); //This is very important, meaning that the color is not merged and replaced directly with the $target_im image color, including the transparent color;
	imagesavealpha($target_im, true); //This is very important, meaning not to lose the transparent color of the $target_im image;
	$tag_white = imagecolorallocatealpha($target_im, 255, 255, 255, 127); // Change the white of the new map to a transparent color Save as tag_white
	imagefill($target_im, 0, 0, $tag_white); // Fill the empty new white in the target new map
	imagecolortransparent($target_im, $tag_white); // Replace with a transparent color
	imagecopymerge($target_im, $src_im, 0, 0, 0, 0, $src_w, $src_h, 100); // Merge the original image and the newly generated transparent map
	imagepng($target_im, $out_pic);
	return $out_pic;
}

$o_pic = 'svp120_latest.png';
$name = pngMerge($o_pic, 'test4.png');
print_r($name);
