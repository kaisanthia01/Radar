<?php
$im = imagecreatefrompng("test3.png");

$rOld = 0;
$gOld = 0;
$bOld = 0;

$MaxR = 0;
$MinR = 1000;

$MaxG = 0;
$MinG = 1000;

$MaxB = 0;
$MinB = 1000;

for ($x = 0; $x < 150; $x++) {
    for ($y = 0; $y < 150; $y++) {
        $rgb = imagecolorat($im, $x, $y);
        $r = ($rgb >> 16) & 0xFF;
        $g = ($rgb >> 8) & 0xFF;
        $b = $rgb & 0xFF;

        if($r >= 230 && $r <= 255 && $g >= 230 && $g <= 255 && $b >= 230 && $b <= 255){

        }else{
            if(!($r == $rOld && $g == $gld && $b == $bOld)){
                if($r > $MaxR){
                    $MaxR = $r;
                }

                if($r < $MinR){
                    $MinR = $r;
                }
                //--------------------------
                if($g > $MaxG){
                    $MaxG = $g;
                }

                if($g < $MinG){
                    $MinG = $g;
                }
                //--------------------------
                if($b > $MaxB){
                    $MaxB = $b;
                }

                if($b < $MinB){
                    $MinB = $b;
                }
                echo "else if(\$r == ".$r." && \$g == ".$g." && \$b == ".$b."){}<br>";
            }
        }
        //var_dump($r, $g, $b)."<br>";
    }
}

echo "if (\$r >= $MinR && \$r <= $MaxR && \$g >= $MinG && \$g <= $MaxG && \$b >= $MinB && \$b <= $MaxB) {}";
?>