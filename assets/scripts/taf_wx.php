<?php
//สนามบินภายในประเทศไทย
$IcaoCode = array("VTBD", "VTBS", "VTCC", "VTCT", "VTSP", "VTSS", "VTSG", "VTUK", "VTSE", "VTPT", "VTPM", "VTST", "VTBO", "VTUW", "VTUQ", "VTSF", "VTPI", "VTSC", "VTCN", "VTUO", "VTPH", "VISK", "VTPP", "VTPL", "VTCP", "VTCI", "VTCH", "VTUV", "VTSR", "VTSR", "VTUL", "VTCL", "VTUI", "VTSH", "VTUJ", "VTSM", "VTSB", "VTPO", "VTUD", "VTUU", "VTBC", "VTBT", "VTCM", "VTCY", "VTCR", "VTUN", "VTBP", "VTCY", "VTPR", "VTUR", "VTBL", "VTCO", "VTBW", "VTPU");
//$IcaoCode = array("VTBD", "VTBS");
$resp = array();
foreach ($IcaoCode as $IcaoValue) {
    //---------------------- Get METAR ------------------------------
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.checkwx.com/taf/$IcaoValue/decoded");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-API-Key: b3502b27075ff79e7978abae73']);
    $result = curl_exec($ch);
    $raw = json_decode($result, true);

    curl_close($ch);
    if ($raw["results"] == 0) {
    } else {
        $resp[$IcaoValue] = $raw["data"];
    }
}

header('Content-Type: application/json');
echo $txt = json_encode($resp);
$fp = fopen('lastest_taf_wx.json', 'w');
fwrite($fp, $txt);
fclose($fp);
