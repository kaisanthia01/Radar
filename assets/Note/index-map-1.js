"#f8d0f8",
"#f898f8",
"#f860f8",
"#f830f8",
"#e00000",
"#ee0000",
"#e82800",
"#e84000",
"#d85800",
"#d87000",
"#d88800",
"#e8a800",
"#e8c800",
"#00f500",
"#02e600",
"#01df04",
"#00d708",
"#00c820",
"#00ba27",
"#04a32b",
"#03a550",
"#086a60",
"#00666a",
"#004a85",
"#004887",
"#003c92",
"#0022a6",
"#0007b8"



legend.onAdd = function () {
    div.innerHTML += "<h3>ค่าความเข้มของฝน (dBZ)</h3>";
    div.innerHTML += '<div class="row">';
    div.innerHTML += '<div style="background: #f8d0f8"></div>66.5<br>';
    div.innerHTML += '<i style="background: #f898f8"></i>64.0<br>';
    div.innerHTML += '<i style="background: #f860f8"></i>61.5<br>';
    div.innerHTML += '<i style="background: #f830f8"></i>59.0<br>';
    div.innerHTML += '<i style="background: #f800f8"></i>56.5<br>';
  
    div.innerHTML += '<i style="background: #e00000"></i>54.0<br>';
    div.innerHTML += '<i style="background: #ee0000"></i>51.5<br>';
    div.innerHTML += '<i style="background: #ef0000"></i>49.0<br>';
  
    div.innerHTML += '<i style="background: #e82800"></i>46.5<br>';
    div.innerHTML += '<i style="background: #e84000"></i>44.0<br>';
    div.innerHTML += '<i style="background: #d85800"></i>41.5<br>';
    div.innerHTML += '<i style="background: #d87000"></i>39.0<br>';
    div.innerHTML += '<i style="background: #d88800"></i>36.5<br>';
    div.innerHTML += '<i style="background: #e8a800"></i>34.5<br>';
    div.innerHTML += '<i style="background: #e8c800"></i>31.5<br>';
    div.innerHTML += '<i style="background: #fffe00"></i>29.0<br>';
  
    div.innerHTML += '<i style="background: #00f500"></i>26.5<br>';
    div.innerHTML += '<i style="background: #02e600"></i>24.0<br>';
    div.innerHTML += '<i style="background: #01df04"></i>21.5<br>';
    div.innerHTML += '<i style="background: #00d708"></i>19.0<br>';
    div.innerHTML += '<i style="background: #00c820"></i>16.5<br>';
    div.innerHTML += '<i style="background: #00ba27"></i>14.0<br>';
    div.innerHTML += '<i style="background: #04a32b"></i>11.5<br>';
    div.innerHTML += '<i style="background: #03a550"></i>9.0<br>';
    div.innerHTML += '<i style="background: #008356"></i>6.5<br>';
  
    div.innerHTML += '<i style="background: #086a60"></i>4.0<br>';
    div.innerHTML += '<i style="background: #00666a"></i>1.5<br>';
    div.innerHTML += '<i style="background: #004a85"></i>-1.0<br>';
    div.innerHTML += '<i style="background: #004887"></i>-3.5<br>';
    div.innerHTML += '<i style="background: #003c92"></i>-6.0<br>';
    div.innerHTML += '<i style="background: #0022a6"></i>-8.5<br>';
    div.innerHTML += '<i style="background: #0007b8"></i>-10.5<br>';
  
    div.innerHTML += '</div>';
  
    // Return the Legend div containing the HTML content
    return div;
  };
  // we are adding a legend to the map
  legend.addTo(map);


  const div = L.DomUtil.create("div", "legend");
const color = ["#f8d0f8", "#f898f8", "#f860f8", "#f830f8", "#e00000", "#ee0000", "#e82800", "#e84000", "#d85800", "#d87000", "#d88800", "#e8a800", "#e8c800", "#00f500", "#02e600", "#01df04", "#00d708", "#00c820", "#00ba27", "#04a32b", "#03a550", "#086a60", "#00666a", "#004a85", "#004887", "#003c92", "#0022a6", "#0007b8"];
const label = ["-10.5", "-8.5", "-6.5", "-3.5", "-1.0", "1.5", "4.0", "6.5", "9.0", "11.5", "14.0", "16.5", "19", "21.5", "24", "26.5", "29.0", "31.5", "34.0", "36.5", "39.0", "41.5", "44.0", "46.5", "49.0", "51.5", "54.0", "56.5", "59.5", "61.5", "64.0", "66.5"];
const rows = [];
legend.onAdd = function () {
  color.map((item, index) => {
    rows.push(`
        <div class="row">
          <i style="background: ${item}"></i>${label[index]}
        </div>  
    `);
  });
  div.innerHTML = rows.join("");
  return div;
};
legend.addTo(map);


<tr><td style="width:50px; background: #f8d0f8;"></td><td>66.5</td></tr>
<tr><td style="width:50px; background: #f898f8;"></td><td>64.0</td></tr>
<tr><td style="width:50px; background: #f860f8;"></td><td>61.5</td></tr>
<tr><td style="width:50px; background: #f830f8;"></td><td>59.0</td></tr>
<tr><td style="width:50px; background: #f800f8;"></td><td>56.5</td></tr>
<tr><td style="width:50px; background: #e00000;"></td><td>54.0</td></tr>
<tr><td style="width:50px; background: #ee0000;"></td><td>51.5</td></tr>
<tr><td style="width:50px; background: #ef0000;"></td><td>49.0</td></tr>
<tr><td style="width:50px; background: #e82800;"></td><td>46.5</td></tr>
<tr><td style="width:50px; background: #e84000;"></td><td>44.0</td></tr>
<tr><td style="width:50px; background: #d85800;"></td><td>41.5</td></tr>
<tr><td style="width:50px; background: #d87000;"></td><td>39.0</td></tr>
<tr><td style="width:50px; background: #d88800;"></td><td>36.5</td></tr>
<tr><td style="width:50px; background: #e8a800;"></td><td>34.5</td></tr>
<tr><td style="width:50px; background: #e8c800;"></td><td>31.5</td></tr>
<tr><td style="width:50px; background: #fffe00;"></td><td>29.0</td></tr>
<tr><td style="width:50px; background: #00f500;"></td><td>26.5</td></tr>
<tr><td style="width:50px; background: #02e600;"></td><td>24.0</td></tr>
<tr><td style="width:50px; background: #01df04;"></td><td>21.5</td></tr>
<tr><td style="width:50px; background: #00d708;"></td><td>19.0</td></tr>
<tr><td style="width:50px; background: #00c820;"></td><td>16.5</td></tr>
<tr><td style="width:50px; background: #00ba27;"></td><td>14.0</td></tr>
<tr><td style="width:50px; background: #04a32b;"></td><td>11.5</td></tr>
<tr><td style="width:50px; background: #03a550;"></td><td>9.0</td></tr>
<tr><td style="width:50px; background: #008356;"></td><td>6.5</td></tr>
<tr><td style="width:50px; background: #086a60;"></td><td>4.0</td></tr>
<tr><td style="width:50px; background: #00666a;"></td><td>1.5</td></tr>
<tr><td style="width:50px; background: #004a85;"></td><td>-1.0</td></tr>
<tr><td style="width:50px; background: #004887;"></td><td>-3.5</td></tr>
<tr><td style="width:50px; background: #003c92;"></td><td>-6.0</td></tr>
<tr><td style="width:50px; background: #0022a6;"></td><td>-8.5</td></tr>
<tr><td style="width:50px; background: #0007b8;"></td><td>-10.5</td></tr>



var legendRain = L.control({ position: "topright" });
var div = L.DomUtil.create("div", "map-tools");
legendRain.onAdd = function () {
  div.innerHTML = `<h3 style="margin-bottom: 5px;">ค่าความเข้มของฝน (dBZ)</h3>
  <form class="form">
    <label for="format">Page size </label>
    <select id="format">
      <option value="a0">A0 (slow)</option>
      <option value="a1">A1</option>
      <option value="a2">A2</option>
      <option value="a3">A3</option>
      <option value="a4" selected="">A4</option>
      <option value="a5">A5 (fast)</option>
    </select>
    <label for="resolution">Resolution </label>
    <select id="resolution">
      <option value="72">72 dpi (fast)</option>
      <option value="150">150 dpi</option>
      <option value="300">300 dpi (slow)</option>
    </select>
  </form>
  <button id="export-pdf">Export PDF</button>`

  // Return the Legend div containing the HTML content
  return div;
};
legendRain.addTo(map);


const exportButton = document.getElementById('export-pdf');

exportButton.addEventListener(
  'click',
  function () {
    alert("e.lat");
  },
  false
);



/*
* หน้าจอควบคุมขวาบน top-left
*/
/*var layerControl = L.control.layers(null, null).addTo(map);
layerControl.addOverlay(markerWing1, '<img src="assets/images/logo/StationRTAF/VTMD-1.png" style="width:15px; hight:15px;"> กองบิน 1');
layerControl.addOverlay(markerWing4, '<img src="assets/images/logo/StationRTAF/VTMI-1.png" style="width:15px; hight:15px;"> กองบิน 4');
layerControl.addOverlay(markerWing5, '<img src="assets/images/logo/StationRTAF/VTMP.png" style="width:15px; hight:15px;"> กองบิน 5');
layerControl.addOverlay(markerWing7, '<img src="assets/images/logo/StationRTAF/VTDB.png" style="width:15px; hight:15px;"> กองบิน 7');
layerControl.addOverlay(markerWing21, '<img src="assets/images/logo/StationRTAF/VTEU.png" style="width:15px; hight:15px;"> กองบิน 21');
layerControl.addOverlay(markerWing23, '<img src="assets/images/logo/StationRTAF/VTED.png" style="width:15px; hight:15px;"> กองบิน 23');
layerControl.addOverlay(markerWingSS, '<img src="assets/images/logo/StationRTAF/VTMK.png" style="width:15px; hight:15px;"> โรงเรียนการบิน');*/
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* หน้าจอควบคุมขวาบน top-right
*/
/*var layerControl = L.control.layers(null, null).addTo(map);
layerControl.addOverlay(markerWing1, '<img src="assets/images/logo/StationRTAF/VTMD-1.png" style="width:15px; hight:15px;"> กองบิน 1');
layerControl.addOverlay(markerWing4, '<img src="assets/images/logo/StationRTAF/VTMI-1.png" style="width:15px; hight:15px;"> กองบิน 4');
layerControl.addOverlay(markerWing5, '<img src="assets/images/logo/StationRTAF/VTMP.png" style="width:15px; hight:15px;"> กองบิน 5');
layerControl.addOverlay(markerWing7, '<img src="assets/images/logo/StationRTAF/VTDB.png" style="width:15px; hight:15px;"> กองบิน 7');
layerControl.addOverlay(markerWing21, '<img src="assets/images/logo/StationRTAF/VTEU.png" style="width:15px; hight:15px;"> กองบิน 21');
layerControl.addOverlay(markerWing23, '<img src="assets/images/logo/StationRTAF/VTED.png" style="width:15px; hight:15px;"> กองบิน 23');
layerControl.addOverlay(markerWingSS, '<img src="assets/images/logo/StationRTAF/VTMK.png" style="width:15px; hight:15px;"> โรงเรียนการบิน');*/
/*
* -------------------------------------------------------------------------------------------------------------------------
*/

/*
* หน้าจอควบคุมล่างซ้าย bottom-left
*/
var legendRain = L.control({ position: "bottomleft" });
var div = L.DomUtil.create("div", "legend");
legendRain.onAdd = function () {
  div.innerHTML = `<h3 style="margin-bottom: 5px;">ค่าความเข้มของฝน (dBZ)</h3>
  <table style="width:100px">
  <tr><td style="width:50px; background: #f8d0f8;"></td><td style="padding-left: 10px">66.5</td></tr>
  <tr><td style="width:50px; background: #f898f8;"></td><td style="padding-left: 10px">64.0</td></tr>
  <tr><td style="width:50px; background: #f860f8;"></td><td style="padding-left: 10px">61.5</td></tr>
  <tr><td style="width:50px; background: #f830f8;"></td><td style="padding-left: 10px">59.0</td></tr>
  <tr><td style="width:50px; background: #f800f8;"></td><td style="padding-left: 10px">56.5</td></tr>
  <tr><td style="width:50px; background: #e00000;"></td><td style="padding-left: 10px">54.0</td></tr>
  <tr><td style="width:50px; background: #ee0000;"></td><td style="padding-left: 10px">51.5</td></tr>
  <tr><td style="width:50px; background: #ef0000;"></td><td style="padding-left: 10px">49.0</td></tr>
  <tr><td style="width:50px; background: #e82800;"></td><td style="padding-left: 10px">46.5</td></tr>
  <tr><td style="width:50px; background: #e84000;"></td><td style="padding-left: 10px">44.0</td></tr>
  <tr><td style="width:50px; background: #d85800;"></td><td style="padding-left: 10px">41.5</td></tr>
  <tr><td style="width:50px; background: #d87000;"></td><td style="padding-left: 10px">39.0</td></tr>
  <tr><td style="width:50px; background: #d88800;"></td><td style="padding-left: 10px">36.5</td></tr>
  <tr><td style="width:50px; background: #e8a800;"></td><td style="padding-left: 10px">34.5</td></tr>
  <tr><td style="width:50px; background: #e8c800;"></td><td style="padding-left: 10px">31.5</td></tr>
  <tr><td style="width:50px; background: #fffe00;"></td><td style="padding-left: 10px">29.0</td></tr>
  <tr><td style="width:50px; background: #00f500;"></td><td style="padding-left: 10px">26.5</td></tr>
  <tr><td style="width:50px; background: #02e600;"></td><td style="padding-left: 10px">24.0</td></tr>
  <tr><td style="width:50px; background: #01df04;"></td><td style="padding-left: 10px">21.5</td></tr>
  <tr><td style="width:50px; background: #00d708;"></td><td style="padding-left: 10px">19.0</td></tr>
  <tr><td style="width:50px; background: #00c820;"></td><td style="padding-left: 10px">16.5</td></tr>
  <tr><td style="width:50px; background: #00ba27;"></td><td style="padding-left: 10px">14.0</td></tr>
  <tr><td style="width:50px; background: #04a32b;"></td><td style="padding-left: 10px">11.5</td></tr>
  <tr><td style="width:50px; background: #03a550;"></td><td style="padding-left: 10px">9.0</td></tr>
  <tr><td style="width:50px; background: #008356;"></td><td style="padding-left: 10px">6.5</td></tr>
  <tr><td style="width:50px; background: #086a60;"></td><td style="padding-left: 10px">4.0</td></tr>
  <tr><td style="width:50px; background: #00666a;"></td><td style="padding-left: 10px">1.5</td></tr>
  <tr><td style="width:50px; background: #004a85;"></td><td style="padding-left: 10px">-1.0</td></tr>
  <tr><td style="width:50px; background: #004887;"></td><td style="padding-left: 10px">-3.5</td></tr>
  <tr><td style="width:50px; background: #003c92;"></td><td style="padding-left: 10px">-6.0</td></tr>
  <tr><td style="width:50px; background: #0022a6;"></td><td style="padding-left: 10px">-8.5</td></tr>
  <tr><td style="width:50px; background: #0007b8;"></td><td style="padding-left: 10px">-10.5</td></tr>
  </table>`

  // Return the Legend div containing the HTML content
  return div;
};
legendRain.addTo(map);
/*
* -------------------------------------------------------------------------------------------------------------------------
*/