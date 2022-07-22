<?php
$xml = file_get_contents('https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=~th&hoursBeforeNow=1');

// Load xml data into xml data object
$xmldata = simplexml_load_string($xml);
  
// Encode this xml data into json 
// using json_encoe function
$jsondata = json_encode($xmldata);
   
// Display json data
print_r($jsondata);
