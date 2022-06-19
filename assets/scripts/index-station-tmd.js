/*
 * สัญญาลักษณ์ของพลเรือน
 */
var url = 'https://weather.rtaf.mi.th/awssstore/desktopjson/';
var MetarStr = 'Metar Wait Update...!';
var TafStr = 'Taf Wait Update...!';
var MetarCurrent = null, TafCurrent = null, MetarUpdate = null, TafUpdate = null;

var iconTMD = L.icon({
    iconUrl: 'assets/images/metar/IFR.png',
    iconSize: [10, 10]
});
var mVTCH = L.marker([14.098889, 99.923629], {
    icon: iconTMD
}).bindTooltip(
    '<b>STATION : MAE HONG SON</b><br />' +
    '<b>ICAO : VTCH</b><br />' +
    '<b>SYNOP : 48300</b>'
);
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */