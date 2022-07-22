<?php
$xml = file_get_contents('https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&stationString=VT*&hoursBeforeNow=6&timeType=issue');

// Load xml data into xml data object
$xmldata = simplexml_load_string($xml);
  
// Encode this xml data into json 
// using json_encoe function
$jsondata = json_encode($xmldata);
   
// Display json data
print_r($jsondata);
