<?php
//---------------------- Remove Background ------------------------------
$o_pic = 'wing7_ppi_latest.png';
$name = pngMerge($o_pic, 'wing7_ppi_latest.png');
function pngMerge($o_pic, $out_pic)
{
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

            if ($r == 0 && $g == 0 && $b == 0) {
                imagefill($src_im, $x, $y, $src_white); // replaced with white
                imagecolortransparent($src_im, $src_white); // Replace the original picture color with a transparent color
            } else if ($r == 255 && $g == 255 && $b == 255) {
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
