<?php
$content = file_get_contents('https://weather.rtaf.mi.th/awssstore/desktopjson/metar.html');
// Display json data
print_r($content);

/*$fp = fopen('public_html/radar/assets/scripts/latest_metar.json', 'w');
fwrite($fp, $content);
fclose($fp);
echo $content;*/
