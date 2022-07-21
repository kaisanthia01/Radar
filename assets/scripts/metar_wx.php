<?php
//สนามบินภายในประเทศไทย
$IcaoCode = array("VTBD", "VTBS", "VTCC", "VTCT", "VTSP", "VTSS", "VTSG", "VTUK", "VTSE", "VTPM", "VTST", "VTBO", "VTUW", "VTUQ", "VTSF",  "VTSC", "VTCN", "VTUO", "VTPH",  "VTPP", "VTCP", "VTCH", "VTUV", "VTSR", "VTUL", "VTCL", "VTUI",  "VTSM", "VTSB", "VTPO", "VTUD", "VTUU");
//$IcaoCode = array("VTBD", "VTBS");
$resp;
foreach ($IcaoCode as $IcaoValue) {
    //---------------------- Get METAR ------------------------------
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.checkwx.com/metar/$IcaoValue/decoded");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-API-Key: b3502b27075ff79e7978abae73']);
    $result = curl_exec($ch);
    $raw = json_decode($result, true);

    curl_close($ch);
    if ($raw["results"] == 0) {
    } else {
        $resp[$IcaoValue] = $raw["data"];
        //$resp[] = $raw["data"];
        //array_push($resp[], $raw["data"]);
    }
}
//$txt = array("CURRENT_WEATHER" => $resp);
header('Content-Type: application/json');
echo $txt = json_encode($resp);
//echo $jtxt = json_encode($txt);
$fp = fopen('public_html/radar/assets/scripts/latest_metar_wx.json', 'w');
fwrite($fp, $txt);
fclose($fp);
