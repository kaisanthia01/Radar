<?php
$content = file_get_contents('https://weather.rtaf.mi.th/awssstore/desktopjson/lastest_taf.json');
$fp = fopen('lastest_taf.json', 'w');
fwrite($fp, $content);
fclose($fp);
echo $content;
