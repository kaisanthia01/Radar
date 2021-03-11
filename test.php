<?php 
$img = imagecreatefromjpeg('svp120_latest.jpg');

/*$remove = imagecolorallocate($img, 255, 255, 255); // Define color rgb to remove
$ime = imagecolortransparent($img, $remove);*/

$remove = imagecolorallocate($img, 62, 100, 145); // Define color rgb to remove
$ime = imagecolortransparent($img, $remove);

ob_start();
imagepng($img);
$imgData = ob_get_clean();
imagedestroy($img);

$data_img = 'data:image/png;base64,'.base64_encode($imgData);
echo '<body style="background: #f00;"><img src="'.$data_img.'"></body>'
?> 