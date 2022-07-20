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
var map = L.map('Map', {
    center: [13.83493614196777, 100.8463897705078],
    zoom: 7,
    doubleClickZoom: false


});

var homeView = new L.Control.HomeView().addTo(map);
var fullScreen = new L.Control.Fullscreen().addTo(map);

// add the OpenStreetMap tiles
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpc2FudGhpYTAxIiwiYSI6ImNsM2g3b3RwajBwODYzanFpMGN4YmV2MjAifQ.UTA02GOqHSlLk9d0PisY-g', {
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * ภาพเรดาร์ Overlay บนแผนที่
 */
var radarUrlVTMI = 'http://radar.climate4.esy.es/assets/images/radar/wing4/latest/wing4_ppi_latest.png?' + realtime;
var latLngBoundsVTMI = L.latLngBounds([
    [17.425, 98.057],
    [13.11, 102.538]
]);
var imageOverlayVTMI = L.imageOverlay(radarUrlVTMI, latLngBoundsVTMI, {
    opacity: 1,
    interactive: false
});

var radarUrlVTDB = 'http://radar.climate4.esy.es/assets/images/radar/wing7/latest/wing7_ppi_latest.png?' + realtime;
var latLngBoundsVTDB = L.latLngBounds([
    [11.315, 96.92],
    [6.9, 101.36]
]);
var imageOverlayVTDB = L.imageOverlay(radarUrlVTDB, latLngBoundsVTDB, {
    opacity: 1,
    interactive: false
});

//var radarUrlNongkam = 'https://weather.bangkok.go.th/Images/Radar/nkradar.jpg?' + realtime;
var radarUrlNongkam = 'https://weather.bangkok.go.th/Images/Radar/NKKML/nkRadarOnGoogle.png?' + realtime;
var latLngBoundsNongkam = L.latLngBounds([
    [12.38196, 98.97206],
    [15.09352, 101.74581]
]);
var imageOverlayNongkam = L.imageOverlay(radarUrlNongkam, latLngBoundsNongkam, {
    opacity: 1,
    interactive: false
});
//center: { lat: 13.73781, lng: 100.35894 }

//var radarUrlNongkam = 'https://weather.bangkok.go.th/Images/Radar/radar.jpg?' + realtime;
var radarUrlNongchok = 'https://weather.bangkok.go.th/Images/Radar/NjKML/njRadarOnGoogle.png?' + realtime;
var latLngBoundsNongchok = L.latLngBounds([
    [12.75026910981639, 99.73642387358632],
    [14.91950740666351, 101.9563556674292]
]);
var imageOverlayNongchok = L.imageOverlay(radarUrlNongchok, latLngBoundsNongchok, {
    opacity: 1,
    interactive: false
});
//center: { lat: 13.83493614196777, lng: 100.8463897705078 }
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * ภาพดาวเทียม Overlay บนแผนที่
 */
var satelliteUrlIR = 'http://www.sattmet.tmd.go.th/satmet/thai/ir/ir_thai.jpg?' + realtime;
var latLngBoundsSatelliteIR = L.latLngBounds([
    [25.7, 126],
    [-0.2, 83]
]);
var imageOverlaySatelliteIR = L.imageOverlay(satelliteUrlIR, latLngBoundsSatelliteIR, {
    opacity: 1,
    interactive: false
});

var satelliteUrlVIS = 'http://www.sattmet.tmd.go.th/satmet/thai/vis/vis_thai.jpg?' + realtime;
var latLngBoundsSatelliteVIS = L.latLngBounds([
    [25.7, 126],
    [-0.2, 83]
]);
var imageOverlaySatelliteVIS = L.imageOverlay(satelliteUrlVIS, latLngBoundsSatelliteVIS, {
    opacity: 1,
    interactive: false
});

var satelliteUrlWV = 'http://www.sattmet.tmd.go.th/satmet/thai/wv/wv_thai.jpg?' + realtime;
var latLngBoundsSatelliteWV = L.latLngBounds([
    [25.7, 126],
    [-0.2, 83]
]);
var imageOverlaySatelliteWV = L.imageOverlay(satelliteUrlWV, latLngBoundsSatelliteWV, {
    opacity: 1,
    interactive: false
});

var satelliteUrlENH = 'http://www.sattmet.tmd.go.th/satmet/thai/ir_enh/ir_enh_thai.jpg?' + realtime;
var latLngBoundsSatelliteENH = L.latLngBounds([
    [25.7, 126],
    [-0.2, 83]
]);
var imageOverlaySatelliteENH = L.imageOverlay(satelliteUrlENH, latLngBoundsSatelliteENH, {
    opacity: 1,
    interactive: false
});
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * สัญญาลักษณ์ของกองบินต่างๆ
 */
var url = 'http://radar.climate4.esy.es/assets/scripts/';
var MetarUpdate, MetarUpdateCheckWX, txtMetar, txtTaf, txtMetarCheckWX, txtTafCheckWX;
var iconVTNC = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTNC-1.png',
    iconSize: [15, 15]
});
var markerVTNC = L.marker([18.7734933, 98.9653736], {
    icon: iconVTNC
}).bindTooltip('กองบิน 41 (จว.เชียงใหม่)');

var iconVTNP = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTNP.png',
    iconSize: [15, 15]
});
var markerVTNP = L.marker([16.7838369, 100.2790302], {
    icon: iconVTNP
}).bindTooltip('กองบิน 46 (จว.พิษณุโลก)');

var iconVTEU = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTEU.png',
    iconSize: [15, 15]
});
var markerVTEU = L.marker([15.2480524, 104.8604472], {
    icon: iconVTEU
}).bindTooltip('กองบิน 21 (จว.อุบลราชธานี)');

var iconVTED = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTED.png',
    iconSize: [15, 15]
});
var markerVTED = L.marker([17.3802148, 102.7947298], {
    icon: iconVTED
}).bindTooltip('กองบิน 23 (จว.อุดรธานี)');

var iconVTEN = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTEN.png',
    iconSize: [15, 15]
});
var markerVTEN = L.marker([14.9343853, 102.0810221], {
    icon: iconVTEN
}).bindTooltip('กองบิน 1 (จว.นครราชสีมา)');

var iconVTMI = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTMI-1.png',
    iconSize: [15, 15]
});
var markerVTMI = L.marker([15.277034, 100.291933], {
    icon: iconVTMI
}).bindTooltip('กองบิน 4 (จว.นครสวรรค์)');

var iconVTML = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTML.png',
    iconSize: [15, 15]
});
var markerVTML = L.marker([14.8714901, 100.6479151], {
    icon: iconVTML
}).bindTooltip('กองบิน 2 (จว.ลพบุรี)');

var iconVTMW = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTMW.png',
    iconSize: [15, 15]
});
var markerVTMW = L.marker([13.7680476, 102.3151012], {
    icon: iconVTMW
}).bindTooltip('กองบิน 3 (จว.สระแก้ว)');

var iconVTMU = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/RTAF.png',
    iconSize: [15, 15]
});
var markerVTMU = L.marker([12.683883, 100.999793], {
    icon: iconVTMU
}).bindTooltip('สนามบินอู่ตะเภา (จว.ระยอง)');

var iconVTMP = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTMP.png',
    iconSize: [15, 15]
});

var markerVTMP = L.marker([11.7866226, 99.8077392], {
    icon: iconVTMP
}).bindTooltip('กองบิน 5 (จว.ประจวบคีรีขันธ์)');

var iconVTMD = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTMD-1.png',
    iconSize: [15, 15]
});
var markerVTMD = L.marker([13.910211, 100.610533], {
    icon: iconVTMD
}).bindTooltip('กองบิน 6 (จว.กรุงเทพมหานคร)');

var iconVTMK = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTMK.png',
    iconSize: [15, 15]
});
var markerVTMK = L.marker([14.098889, 99.923629], {
    icon: iconVTMK
}).bindTooltip('โรงเรียนการบิน กำแพงแสน (จว.นครปฐม)');

var iconVTMH = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/RTAF.png',
    iconSize: [15, 15]
});
var markerVTMH = L.marker([12.630251, 99.953304], {
    icon: iconVTMH
}).bindTooltip('สนามบินหัวหิน (จว.ประจวบคีรีขันธ์)');

var iconVTDB = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTDB.png',
    iconSize: [15, 15]
});
var markerVTDB = L.marker([9.1358421, 99.1366254], {
    icon: iconVTDB
}).bindTooltip('กองบิน 7 (จว.สุราษฏร์ธานี)');

var iconVTDS = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTDS.png',
    iconSize: [15, 15]
});
var markerVTDS = L.marker([6.934363, 100.393994], {
    icon: iconVTDS
}).bindTooltip('กองบิน 56 (จว.สงขลา)');

var iconVTDT = L.icon({
    iconUrl: 'assets/images/logo/StationRTAF/VTDT.png',
    iconSize: [15, 15]
});
var markerVTDT = L.marker([6.784885, 101.150122], {
    icon: iconVTDT
}).bindTooltip('กองกำลังทางอากาศเฉพาะกิจที่ 9 (จว.ปัตตานี)');
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * สัญญาลักษณ์ของพลเรือน
 */
var markerSetTMD, iconSetTMD;
var iconTMD = L.icon({
    iconUrl: 'assets/images/logo/TMD.png',
    iconSize: [15, 14]
});
var stationTMD = L.geoJSON(SYNOP_SITES, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: iconTMD
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
            '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
            '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
            '<b>COUNTRY CODE : ' + feature.properties.country_code + '</b>'
        );
    }
});
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 *  Load Plot ไฟล์ KML หรือ KMZ
 */
var AjaxStopKML, KML_Upload_Slot = [],
    KML_Upload_Map = [];
var KML_VTBU, KML_VTDB, KML_VTDS, KML_VTED, KML_VTEN, KML_VTEU, KML_VTMI, KML_VTMK, KML_VTMP, KML_VTNC;
fetch('assets/kml/area/VTBU.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTBU = new L.KML(kml);
});

fetch('assets/kml/area/VTDB.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTDB = new L.KML(kml);
});

fetch('assets/kml/area/VTDS.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTDS = new L.KML(kml);
});

fetch('assets/kml/area/VTED.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTED = new L.KML(kml);
});

fetch('assets/kml/area/VTEN.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTEN = new L.KML(kml);
});

fetch('assets/kml/area/VTEU.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTEU = new L.KML(kml);
});

fetch('assets/kml/area/VTMI.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTMI = new L.KML(kml);
});

fetch('assets/kml/area/VTMK.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTMK = new L.KML(kml);
});

fetch('assets/kml/area/VTMP.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTMP = new L.KML(kml);
});

fetch('assets/kml/area/VTNC.kml').then(res => res.text()).then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    KML_VTNC = new L.KML(kml);
});
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */