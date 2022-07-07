<?php
$content = file_get_contents('https://weather.rtaf.mi.th/awssstore/desktopjson/metar.html');
$fp = fopen('lastest_metar.json', 'w');
fwrite($fp, $content);
fclose($fp);
echo $content;
