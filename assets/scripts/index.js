/*
 * แผนที่เริ่มต้น OpenStreetMap
 */
var map = L.map('Map', {
    center: [13.83493614196777, 100.8463897705078],
    //center: [15.277034, 100.291933],
    //center: [9.1358421, 99.1366254],
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