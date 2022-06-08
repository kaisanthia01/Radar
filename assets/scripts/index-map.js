/*
* ตั้งค่าวันที่เวลา
*/
var realtime = new Date();
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* แผนที่เริ่มต้น OpenStreetMap
*/
var map = L.map('Map', {
  //center: [13.83493614196777, 100.8463897705078],
  center: [15.277034, 100.291933],
  zoom: 8,
  doubleClickZoom: false,
  fullscreenControl: true
});

// add the OpenStreetMap tiles
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpc2FudGhpYTAxIiwiYSI6ImNsM2g3b3RwajBwODYzanFpMGN4YmV2MjAifQ.UTA02GOqHSlLk9d0PisY-g', {
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* ภาพเรดาร์ Overlay บนแผนที่
*/
var radarUrlWing1 = 'http://radar.climate4.esy.es/assets/images/radar/wing4/latest/wing4_PPI_latest.png';
var latLngBoundsWing1 = L.latLngBounds([[14.9343853, 102.0810221], [14.9343853, 102.0810221]]);
var imageOverlayWing1 = L.imageOverlay(radarUrlWing1, latLngBoundsWing1, { opacity: 1, interactive: false });

var radarUrlWing4 = 'http://radar.climate4.esy.es/assets/images/radar/wing4/latest/wing4_PPI_latest.png?' + realtime.getTime();
var latLngBoundsWing4 = L.latLngBounds([[17.425, 98.057], [13.11, 102.538]]);
var imageOverlayWing4 = L.imageOverlay(radarUrlWing4, latLngBoundsWing4, { opacity: 1, interactive: false });
imageOverlayWing4.addTo(map);

var radarUrlWing7 = 'https://weather.bangkok.go.th/Images/Radar/NjKML/njRadarOnGoogle.png';
var latLngBoundsWing7 = L.latLngBounds([[12.75026910981639, 99.7364238735863], [14.91950740666351, 101.9563556674292]]);
var imageOverlayWing7 = L.imageOverlay(radarUrlWing7, latLngBoundsWing7, { opacity: 1, interactive: false });

var radarUrlWing21 = 'https://weather.bangkok.go.th/Images/Radar/NjKML/njRadarOnGoogle.png';
var latLngBoundsWing21 = L.latLngBounds([[12.75026910981639, 99.7364238735863], [14.91950740666351, 101.9563556674292]]);
var imageOverlayWing21 = L.imageOverlay(radarUrlWing21, latLngBoundsWing21, { opacity: 1, interactive: false });

var radarUrlWing23 = 'https://weather.bangkok.go.th/Images/Radar/NjKML/njRadarOnGoogle.png';
var latLngBoundsWing23 = L.latLngBounds([[12.75026910981639, 99.7364238735863], [14.91950740666351, 101.9563556674292]]);
var imageOverlayWing23 = L.imageOverlay(radarUrlWing23, latLngBoundsWing23, { opacity: 1, interactive: false });

var radarUrlWingSS = 'https://weather.bangkok.go.th/Images/Radar/NjKML/njRadarOnGoogle.png';
var latLngBoundsWingSS = L.latLngBounds([[12.75026910981639, 99.7364238735863], [14.91950740666351, 101.9563556674292]]);
var imageOverlayWingSS = L.imageOverlay(radarUrlWingSS, latLngBoundsWingSS, { opacity: 1, interactive: false });
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* พิกัดตำแหน่งของกองบินต่างๆ
*/
var latlongWing1 = [14.9343853, 102.0810221];
var latlongWing41 = [18.7734933, 98.9653736];
var latlngs, polyline;
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* สัญญาลักษณ์ของกองบินต่างๆ
*/
var iconWing1 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTEN.png', iconSize: [25, 25] });
var markerWing1 = L.marker([14.9343853, 102.0810221], { icon: iconWing1 }).bindPopup('I am a green leaf.');

var iconWing2 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTML.png', iconSize: [25, 25] });
var markerWing2 = L.marker([14.8714901, 100.6479151], { icon: iconWing2 }).bindPopup('I am a green leaf.');

var iconWing3 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/RTAF.png', iconSize: [25, 25] });
var markerWing3 = L.marker([13.7680476, 102.3151012], { icon: iconWing3 }).bindPopup('I am a green leaf.');

var iconWing4 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTMI-1.png', iconSize: [25, 25] });
var markerWing4 = L.marker([15.277034, 100.291933], { icon: iconWing4 }).bindPopup('I am a green leaf.');
markerWing4.addTo(map);

var iconWing5 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTMP.png', iconSize: [25, 25] });
var markerWing5 = L.marker([11.7866226, 99.8077392], { icon: iconWing5 }).bindPopup('I am a green leaf.');

var iconWing6 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTMD-1.png', iconSize: [25, 25] });
var markerWing6 = L.marker([13.910211, 100.610533], { icon: iconWing6 }).bindPopup('I am a green leaf.');

var iconWing7 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTDB.png', iconSize: [25, 25] });
var markerWing7 = L.marker([9.1358421, 99.1366254], { icon: iconWing7 }).bindPopup('I am a green leaf.');

var iconWing21 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTEU.png', iconSize: [25, 25] });
var markerWing21 = L.marker([15.2480524, 104.8604472], { icon: iconWing21 }).bindPopup('I am a green leaf.');

var iconWing23 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTED.png', iconSize: [25, 25] });
var markerWing23 = L.marker([17.3802148, 102.7947298], { icon: iconWing23 }).bindPopup('I am a green leaf.');

var iconWing41 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTNC-1.png', iconSize: [25, 25] });
var markerWing41 = L.marker([18.7734933, 98.9653736], { icon: iconWing41 }).bindPopup('I am a green leaf.');

var iconWing46 = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTNP.png', iconSize: [25, 25] });
var markerWing46 = L.marker([16.7838369, 100.2790302], { icon: iconWing46 }).bindPopup('I am a green leaf.');

var iconWingSS = L.icon({ iconUrl: 'assets/images/logo/StationRTAF/VTMK.png', iconSize: [25, 25] });
var markerWingSS = L.marker([14.098889, 99.923629], { icon: iconWingSS }).bindPopup('I am a green leaf.');
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* อัพเดทภาพเรดาร์ Overlay บนแผนที่
*/
window.setInterval(function () {
  radarUrlWing4 = '/assets/images/radar/wing4/latest/wing4_PPI_latest.png?' + realtime.getTime();
  imageOverlayWing4 = L.imageOverlay(radarUrlWing4, latLngBoundsWing4, { opacity: 1, interactive: false });
  map.removeLayer(imageOverlayWing4);
  imageOverlayWing4.addTo(map);
}, 150000);

// add polyline to map
/*var latlngs = [[14.098889, 99.923629], [18.7734933, 98.9653736]];
var polyline = L.polyline(latlngs, {
  "delay": 800,
  "dashArray": [
    14,
    48
  ],
  "weight": 5,
  "color": "#0000FF",
  "pulseColor": "#FFFFFF",
  "paused": false,
  "reverse": false,
  "hardwareAccelerated": true
});

var planeRoute2 = [[14.098889, 99.923629], [18.7734933, 98.9653736]];

var seqGroup = L.motion.seq([
  L.motion.seq([
    L.motion.polyline(planeRoute2, {
      color: "indigo"
    }, null, {
      removeOnEnd: true,
      icon: L.divIcon({ html: "<i class='fa fa-plane fa-2x' aria-hidden='true' motion-base='0'></i>", iconSize: L.point(19, 24) })
    }).motionDuration(5000)
  ])
]);
*/





