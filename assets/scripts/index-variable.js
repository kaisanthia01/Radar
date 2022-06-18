/*
 * ตั้งค่าวันที่เวลา
 */
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours() - 7;
var minute = date.getMinutes();
/* ตั้งค่ารูปแบบตัวเลขวันที่และเวลา */
var txtmonth = month < 10 ? month = '0' + month : month;
var txtday = day < 10 ? day = '0' + day : day;
var txthour = hour < 10 ? hour = '0' + hour : hour;
var txtminute = minute < 10 ? minute = '0' + minute : minute;
var txtdate = year + '-' + txtmonth + '-' + txtday;
var realdate = year + '' + txtmonth + '' + txtday;
var realtime = year + '' + txtmonth + '' + txtday + '-' + txthour + '' + txtminute;
var curentMM;
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * แผนที่เริ่มต้น OpenStreetMap
 */
var map;
var tiles;
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * ภาพเรดาร์ Overlay บนแผนที่
 */
var radarUrlWing4;
var latLngBoundsWing4;
var imageOverlayWing4;

var radarUrlWing7RemoveBG;
var radarUrlWing7;
var latLngBoundsWing7;
var imageOverlayWing7;

var radarUrlNongkam;
var latLngBoundsNongkam;
var imageOverlayNongkam;

var radarUrlNongchok;
var latLngBoundsNongchok;
var imageOverlayNongchok;
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * พิกัดตำแหน่งของกองบินต่างๆ
 */
var latlongWing1;
var latlongWing2;
var latlongWing3;
var latlongWing4;
var latlongWing5;
var latlongWing6;
var latlongWing7;
var latlongWing21;
var latlongWing23;
var latlongWing41;
var latlongWing46;
var latlongWingSS;
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * สัญญาลักษณ์ของกองบินต่างๆ
 */
var iconWing1;
var markerWing1;

var iconWing2;
var markerWing2;

var iconWing3;
var markerWing3;

var iconWing4;
var markerWing4;

var iconWing5;
var markerWing5;

var iconWing6;
var markerWing6;

var iconWing7;
var markerWing7;

var iconWing21;
var markerWing21;

var iconWing23;
var markerWing23;

var iconWing41;
var markerWing41;

var iconWing46;
var markerWing46;

var iconWingSS;
var markerWingSS;
/*
* -------------------------------------------------------------------------------------------------------------------------
*/
