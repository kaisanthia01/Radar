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
var radarUrlWing4 = 'http://radar.climate4.esy.es/assets/images/radar/wing4/latest/wing4_ppi_latest.png?' + realtime;
var latLngBoundsWing4 = L.latLngBounds([
    [17.425, 98.057],
    [13.11, 102.538]
]);
var imageOverlayWing4 = L.imageOverlay(radarUrlWing4, latLngBoundsWing4, {
    opacity: 1,
    interactive: false
});

//var radarUrlWing7RemoveBG = $.post("http://radar.climate4.esy.es/assets/images/radar/wing7/latest/wing7removeBG.php");
setTimeout(3000);
var radarUrlWing7 = 'http://radar.climate4.esy.es/assets/images/radar/wing7/latest/wing7_ppi_latest.png?' + realtime;
var latLngBoundsWing7 = L.latLngBounds([
    [11.315, 96.92],
    [6.9, 101.36]
]);
var imageOverlayWing7 = L.imageOverlay(radarUrlWing7, latLngBoundsWing7, {
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
var iconWing1 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing1 = L.marker([14.9343853, 102.0810221], {
    icon: iconWing1
}).bindTooltip('Wing1');

var iconWing2 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing2 = L.marker([14.8714901, 100.6479151], {
    icon: iconWing2
}).bindTooltip('Wing2');

var iconWing3 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing3 = L.marker([13.7680476, 102.3151012], {
    icon: iconWing3
}).bindTooltip('Wing3');

var iconWing4 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing4 = L.marker([15.277034, 100.291933], {
    icon: iconWing4
}).bindTooltip('Wing4');

var iconWing5 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing5 = L.marker([11.7866226, 99.8077392], {
    icon: iconWing5
}).bindTooltip('Wing5');

var iconWing6 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing6 = L.marker([13.910211, 100.610533], {
    icon: iconWing6
}).bindTooltip('Wing6');

var iconWing7 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing7 = L.marker([9.1358421, 99.1366254], {
    icon: iconWing7
}).bindTooltip('Wing7');

var iconWing21 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing21 = L.marker([15.2480524, 104.8604472], {
    icon: iconWing21
}).bindTooltip('Wing21');

var iconWing23 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing23 = L.marker([17.3802148, 102.7947298], {
    icon: iconWing23
}).bindTooltip('Wing23');

var iconWing41 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing41 = L.marker([18.7734933, 98.9653736], {
    icon: iconWing41
}).bindTooltip('Wing41');

var iconWing46 = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWing46 = L.marker([16.7838369, 100.2790302], {
    icon: iconWing46
}).bindTooltip('Wing46');

var iconWingSS = L.icon({
    iconUrl: 'assets/images/metar/VFR.png',
    iconSize: [15, 15]
});
var markerWingSS = L.marker([14.098889, 99.923629], {
    icon: iconWingSS
}).bindTooltip('WingSS');
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * สัญญาลักษณ์ของพลเรือน
 */
var url = 'http://radar.climate4.esy.es/assets/scripts/';
var MetarStr = 'Metar Wait Update...!';
var TafStr = 'Taf Wait Update...!';
var MetarRTAF = null,
    TafRTAF = null,
    MetarRTAFUpdate = null,
    TafRTAFUpdate = null;
var MetarTMD = null,
    TafTMD = null,
    MetarTMDUpdate = null,
    TafTMDUpdate = null;

var iconTMD = L.icon({
    iconUrl: 'assets/images/metar/IFR.png',
    iconSize: [15, 15]
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

/*L.geoJSON(SYNOP_SITES, {
    pointToLayer: function (feature, latlng) {
        if (feature.properties.country_code == 'TH') {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#ff4d4d",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        } else if (feature.properties.country_code == 'VN') {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#ffff4d",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        } else if (feature.properties.country_code == 'MY') {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#4d4dff",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        } else if (feature.properties.country_code == 'SG') {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#a64dff",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        } else if (feature.properties.country_code == 'MM') {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#4dff4d",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        } else {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#ff7800",
                color: "#000",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        }

    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
            '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
            '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
            '<b>COUNTRY CODE : ' + feature.properties.country_code + '</b><br />' +
            '<b>DETAIL : </b><b><a href="synoptic.climate4.esy.es/station/"></a></b>'
            );

layer.bindPopup(
    '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
    '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
    '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
    '<b>COUNTRY CODE : ' + feature.properties.country_code + '</b><br />' +
    '<b>DETAIL : <a href="station/' + feature.properties.country_code + '/' +
    feature.properties.synop +
    '" target="_blank">synoptic.climate4.esy.es/station/' + feature.properties
        .country_code + '/' + feature.properties.synop + '</a></b>'
);
    }
}).addTo(map);* /
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */

/*
 * Plot ไฟล์ KML หรือ KMZ
 */
// Load kml file
/*
fetch('assets/Note/VTMD.kml')
    .then(res => res.text())
    .then(kmltext => {
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        map.addLayer(track);

        // Adjust map to show the kml
        const bounds = track.getBounds();
        map.fitBounds(bounds);
    });
*/

// Instantiate KMZ layer (async)
/*var kmz = L.kmzLayer().addTo(map);
kmz.load('assets/Note/wx.kmz');
kmz.on('load', function (e) {
    control.addOverlay(e.layer, e.name);
    // e.layer.addTo(map);
});

var control = L.control.layers(null, null, {
    collapsed: false
}).addTo(map);*/
/*
 * -------------------------------------------------------------------------------------------------------------------------
 */