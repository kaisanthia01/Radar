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
var MetarUpdateText, MetarUpdateSymbol, MetarUpdateCheckWXText, MetarUpdateCheckWXSymbol, txtMetar, txtTaf, txtMetarCheckWX, txtTafCheckWX;
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
var iconVTBD = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTBD = L.marker([13.9126, 100.607002], {
    icon: iconVTBD
}).bindTooltip('Don Mueang International Airport');

var iconVTBS = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTBS = L.marker([13.6811, 100.747002], {
    icon: iconVTBS
}).bindTooltip('Suvarnabhumi Airport');

var iconVTCC = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCC = L.marker([18.7668, 98.962601], {
    icon: iconVTCC
}).bindTooltip('Chiang Mai International Airport');

var iconVTCT = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCT = L.marker([19.952299, 99.882896], {
    icon: iconVTCT
}).bindTooltip('Mae Fah Luang - Chiang Rai International Airport');

var iconVTSP = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSP = L.marker([8.1132, 98.316902], {
    icon: iconVTSP
}).bindTooltip('Phuket International Airport');

var iconVTSS = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSS = L.marker([6.93321, 100.392998], {
    icon: iconVTSS
}).bindTooltip('Hat Yai International Airport');

var iconVTSG = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSG = L.marker([8.09912, 98.986198], {
    icon: iconVTSG
}).bindTooltip('Krabi Airport');

var iconVTUK = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUK = L.marker([16.4666, 102.783997], {
    icon: iconVTUK
}).bindTooltip('Khon Kaen Airport');

var iconVTSE = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSE = L.marker([10.7112, 99.361702], {
    icon: iconVTSE
}).bindTooltip('Chumphon Airport');

var iconVTPM = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTPM = L.marker([16.6999, 98.545097], {
    icon: iconVTPM
}).bindTooltip('Mae Sot Airport');

var iconVTST = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTST = L.marker([7.50874, 99.6166], {
    icon: iconVTST
}).bindTooltip('Trang Airport');

var iconVTBO = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTBO = L.marker([12.2746, 102.319], {
    icon: iconVTBO
}).bindTooltip('Trat Airport');

var iconVTUW = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUW = L.marker([17.383801, 104.642998], {
    icon: iconVTUW
}).bindTooltip('Nakhon Phanom Airport');

var iconVTUQ = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUQ = L.marker([14.9495, 102.313004], {
    icon: iconVTUQ
}).bindTooltip('Nakhon Ratchasima Airport');

var iconVTSF = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSF = L.marker([8.53962, 99.944702], {
    icon: iconVTSF
}).bindTooltip('Nakhon Si Thammarat Airport');

var iconVTSC = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSC = L.marker([6.51992, 101.742996], {
    icon: iconVTSC
}).bindTooltip('Narathiwat Airport');

var iconVTCN = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCN = L.marker([18.807899, 100.782997], {
    icon: iconVTCN
}).bindTooltip('Nan Airport');

var iconVTUO = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUO = L.marker([15.2295, 103.252998], {
    icon: iconVTUO
}).bindTooltip('Buri Ram Airport');

var iconVTPH = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTPH = L.marker([12.6362, 99.9515], {
    icon: iconVTPH
}).bindTooltip('Hua Hin Airport');

var iconVTPP = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTPP = L.marker([16.7829, 100.278999], {
    icon: iconVTPP
}).bindTooltip('Phitsanulok Airport');

var iconVTCP = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCP = L.marker([18.1322, 100.165001], {
    icon: iconVTCP
}).bindTooltip('Phrae Airport');

var iconVTCH = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCH = L.marker([19.3013, 97.9758], {
    icon: iconVTCH
}).bindTooltip('Mae Hong Son Airport');

var iconVTUV = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUV = L.marker([16.1168, 103.774002], {
    icon: iconVTUV
}).bindTooltip('Roi Et Airport');

var iconVTSR = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSR = L.marker([9.77762, 98.585503], {
    icon: iconVTSR
}).bindTooltip('Ranong Airport');

var iconVTUL = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUL = L.marker([17.4391, 101.722], {
    icon: iconVTUL
}).bindTooltip('Loei Airport');

var iconVTCL = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTCL = L.marker([18.270901, 99.504204], {
    icon: iconVTCL
}).bindTooltip('Lampang Airport');

var iconVTUI = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUI = L.marker([17.195101, 104.119003], {
    icon: iconVTUI
}).bindTooltip('Sakon Nakhon Airport');

var iconVTSM = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSM = L.marker([9.54779, 100.061996], {
    icon: iconVTSM
}).bindTooltip('Samui Airport');

var iconVTSB = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTSB = L.marker([9.1326, 99.135597], {
    icon: iconVTSB
}).bindTooltip('Surat Thani Airport');

var iconVTPO = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTPO = L.marker([17.238001, 99.818199], {
    icon: iconVTPO
}).bindTooltip('Sukhothai Airport');

var iconVTUD = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUD = L.marker([17.3864, 102.788002], {
    icon: iconVTUD
}).bindTooltip('Udon Thani Airport');

var iconVTUU = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});
var markerVTUU = L.marker([15.2513, 104.870003], {
    icon: iconVTUU
}).bindTooltip('Ubon Ratchathani Airport');
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

/*
 *  Draw Toolsbar
 */
var greenIcon = L.icon({
    iconUrl: 'assets/images/logo/AIRPORT-1.png',
    iconSize: [15, 15]
});;

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    position: 'topright',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'purple'
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: true
        },
        polyline: {
            shapeOptions: {
                color: 'red'
            },
        },
        rect: {
            shapeOptions: {
                color: 'green'
            },
        },
        circle: {
            shapeOptions: {
                color: 'steelblue'
            },
        },
        marker: {
            icon: greenIcon
        },
    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('New Marker Airport');
    }

    drawnItems.addLayer(layer);
});
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */