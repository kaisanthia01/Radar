require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/Home",
  "esri/widgets/Fullscreen",
  "esri/layers/FeatureLayer",
  "esri/core/promiseUtils",
  "esri/widgets/smartMapping/ColorSlider"

], function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery, Legend, Expand, Home, Fullscreen, FeatureLayer, ColorSlider) {

  esriConfig.apiKey = "AAPK928eb33f5ec242c2874997c3cfaa92e1-wzfJJLw_Gx4g17BQEjGiQB--d4JNhEN6hrPWFhXZpj3AnZkRvTvVXlz-JeHGa70";

  /*
  * แผนที่เริ่มต้น OpenStreetMap
  */
  const map = new Map({
    basemap: {
      portalItem: {
        id: "b834a68d7a484c5fb473d4ba90d35e71"
      }
    }
  });
  /*
  * -------------------------------------------------------------------------------------------------------------------------
  */

  /*
  * ตั้งค่าแผนที่เริ่มต้น และล้างปุ่มบนหน้าจอแผนที่
  */
  const view = new MapView({
    container: "contentMap",
    map: map,
    center: [100.575347, 13.9214005],
    zoom: 9
  });

  view.ui.empty("top-left");
  view.ui.empty("top-right");
  view.ui.empty("bottom-left");
  view.ui.empty("bottom-right");
  /*
  * -------------------------------------------------------------------------------------------------------------------------
  */

  /*
  * Gallery แผนที่อื่นๆ
  */
  const basemapExpand = new Expand({
    view,
    content: new BasemapGallery({ view: view }),
    expandIconClass: "esri-icon-basemap",
    expandTooltip: "แผนที่",
    autoCollapse: true
  });
  /*
  * -------------------------------------------------------------------------------------------------------------------------
  */

  /*
  * รายละเอียดสัญญาลักษณ์บนแผนที่
  */
  const LegendExpand = new Expand({
    view: view,
    content: new Legend({
      view: view
    })
  });
  /*
  * -------------------------------------------------------------------------------------------------------------------------
  */

  // Typical usage
  const slider = new ColorSlider({
    container: "sliderDiv",
    min: rendererResponse.statistics.min,
    max: rendererResponse.statistics.max,
    stops: rendererResponse.visualVariable.stops
  });

  slider.visualVariable = {
    type: "color",
    field: "dbz",
    stops: [
      { value: 0, color: "#eee8d6" },
      { value: 20, color: "#bcadda" },
      { value: 40, color: "#9a85dd" },
      { value: 60, color: "#7062b9" },
      { value: 80, color: "#453e94" }
    ]
  };

  const bodyMap = document.getElementById("bodyMap");

  view.ui.add(new Home({ view: view }), "top-left");
  view.ui.add(LegendExpand, "top-left");
  view.ui.add(basemapExpand, "top-right");
  view.ui.add(new Fullscreen({ view: view, element: bodyMap }), "bottom-right");

  colorSliderExpand = new Expand({
    view: view,
    content: document.getElementById("color-container"),
    expandIconClass: "esri-icon-environment-settings"
  });
  view.ui.add(colorSliderExpand, "top-left");


});


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