<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>แผนที่แสดงข้อมูลดิน</title>
    <link rel="stylesheet" href="css/leaflet.css" />
    <!-- Shortcut icon -->
    <link rel="shortcut icon" href="../../Image/logo/Logo-2.png">

    <!-- Font Thai Sarabun -->
    <link href="https://fonts.googleapis.com/css?family=Sarabun&display=swap" rel="stylesheet">
</head>
<style>
html,
body {
    margin: 0;
    padding: 0;
    font-family: 'Sarabun', sans-serif;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.info {
    padding: 10px 10px;
    font-family: 'Sarabun', sans-serif;
    font-size: 24px;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}

.legend {
    color: #000;
    background-color: #ffffff;
    font-family: 'Sarabun', sans-serif;
    font-size: 4px;

}

.legend i {
    width: 8px;
    height: 8px;
    float: left;
    margin-top: 4px;
    margin-right: 4px;
    opacity: 0.7;
}

.legend span {
    font-family: 'Sarabun', sans-serif;
    font-size: xx-small;
}
</style>

<body>
    <div id='map'></div>
    <script src="js/leaflet.js"></script>
    <script type="text/javascript" src="data/tambol.js"></script>
    <script type="text/javascript" src="data/amphoe.js"></script>
    <script type="text/javascript" src="data/province.js"></script>
    <script type="text/javascript" src="data/farmer.js"></script>
</body>
<script>
//Set Map
var satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
})
var map = L.map('map', {
    center: [14.911813, 103.200000],
    zoom: 8,
    zoomControl: false,
    layers: [satellite]
});


// Create necessary panes in correct order (i.e. "bottom-most" first).
map.createPane("polygonsPane");
map.createPane("polylinesPane");
map.createPane("pointsPane");

// get color PH
function getColorPH(d) {
    return d > 9.0 ? '#632168' :
        d > 8.5 ? '#2B308B' :
        d > 7.9 ? '#306A9C' :
        d > 7.4 ? '#2B9C64' :
        d > 6.6 ? '#98C93C' :
        d > 6.1 ? '#F3EC18' :
        d > 5.6 ? '#F89A1C' :
        d > 5.1 ? '#EE3924' :
        d > 4.6 ? '#CF1F2A' :
        d > 3.6 ? '#A51E25' :
        '#82050B';
}

// get color EC
function getColorEC(d) {
    return d === 'เค็มจัดมาก' ? "#642168" :
        d === 'เค็มจัด' ? "#2B308B" :
        d === 'เค็มปานกลาง' ? "#98C93C" :
        d === 'เค็มเล็กน้อย' ? "#EE3924" :
        "#82050B";
}

// get color OM
function getColorOM(d) {
    return d > 4.5 ? '#559094' :
        d > 3.5 ? '#336600' :
        d > 2.5 ? '#669900' :
        d > 1.5 ? '#52642A' :
        d > 1.0 ? '#b3b300' :
        d > 0.5 ? '#A3891A' :
        '#B27F00';
}

// get color P
function getColorP(d) {
    return d > 45 ? '#08306B' :
        d > 25 ? '#08519C' :
        d > 15 ? '#2171B5' :
        d > 10 ? '#4292C6' :
        d > 6 ? '#6BAED6' :
        d > 3 ? '#9ECAE1' :
        '#DEEBF7';
}

// get color K
function getColorK(d) {
    return d > 120 ? '#F57F17' :
        d > 90 ? '#F9A825' :
        d > 60 ? '#FFEB3B' :
        d > 30 ? '#FFF59D' :
        '#FFFDE7';
}

// get color CA
function getColorCA(d) {
    return d > 4000 ? '#C03800' :
        d > 2000 ? '#E74C0C' :
        d > 1000 ? '#FF8B62' :
        d > 400 ? '#FFCDBB' :
        '#FBE9E7';
}

// get color MG
function getColorMG(d) {
    return d > 960 ? '#330033' :
        d > 360 ? '#800080' :
        d > 120 ? '#76508D' :
        d > 36 ? '#BBA6C5' :
        '#ffe6ff';
}

// get color TYPE
function getColorTYPE(d) {
    return d === 'ทราย' ? "#D12C0E" :
        d === 'ทรายร่วน' ? "#DC7902" :
        d === 'ร่วน' ? "#FEF246" :
        d === 'ร่วนปนทราย' ? "#E9B12A" :
        d === 'ร่วนปนซิลท์' ? "#CA115D" :
        d === 'ซิลท์' ? "#A3036F" :
        d === 'ร่วนเหนียว' ? "#4F9812" :
        d === 'ร่วนเหนียวปนทราย' ? "#53ADE2" :
        d === 'ร่วนเหนียวปนซิลท์' ? "#F0C4D5" :
        d === 'เหนียว' ? "#3C4195" :
        d === 'เหนียวปนทราย' ? "#D24288" :
        "#7E84C2";
}

// get color F
function getColorF(d) {
    return d > 7 ? '#004d00' :
        d > 5 ? '#00cc00' :
        d > 3 ? '#ffff00' :
        d > 1 ? '#ff6600' :
        '#ff0000';
}

// set color subdistrict
function Tambol(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '4',
        fillOpacity: 0,
        fillColor: 'white',
        pane: "polygonsPane"
    };
}
// set color amphoe
function Amphoe(feature) {
    return {
        weight: 3,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
        fillOpacity: 0,
        fillColor: 'white',
        pane: "polygonsPane"
    };
}
// set color province
function Province(feature) {
    return {
        weight: 8,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
        fillOpacity: 0,
        fillColor: 'white',
        pane: "polygonsPane"
    };
}
// ขอบเขตตำบล
L.geoJson(TambolData, {
    style: Tambol
}).addTo(map);

// ขอบเขตอำเภอ
L.geoJson(AmphoeData, {
    style: Amphoe
}).addTo(map);

// ขอบเขตจังหวัด
L.geoJson(ProvinceData, {
    style: Province
}).addTo(map);

//จุดข้อมูล PH
var PH = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorPH(feature.properties.soil_ph),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่า pH : ' +
            feature.properties.soil_ph + '</b><br /><b>แปลค่า : ' + feature.properties.soil_ph_v +
            '</b>');
    }
}).addTo(map);

//PHLegend
var PHlegend = L.control({
    position: 'bottomright'
});

PHlegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าความเป็นกรดด่าง (pH)</h3>";
    div.innerHTML += '<i style="background: #632168"></i><span>>9.0 : ด่างจัดมาก</span><br>';
    div.innerHTML += '<i style="background: #2B308B"></i><span>8.5 - 9.0 : ด่างจัด</span><br>';
    div.innerHTML += '<i style="background: #306A9C"></i><span>7.9 - 8.4 : ด่างปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #2B9C64"></i><span>7.4 - 7.8 : ด่างเล็กน้อย</span><br>';
    div.innerHTML += '<i style="background: #98C93C"></i><span>6.6 - 7.3 : กลาง</span><br>';
    div.innerHTML += '<i style="background: #F3EC18"></i><span>6.1 - 6.5 : กรดเล็กน้อย</span><br>';
    div.innerHTML += '<i style="background: #F89A1C"></i><span>5.6 - 6.0 : กรดปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #EE3924"></i><span>5.1 - 5.5 : กรดจัดมาก</span><br>';
    div.innerHTML += '<i style="background: #CF1F2A"></i><span>4.6 - 5.0 : กรดจัดมาก</span><br>';
    div.innerHTML += '<i style="background: #A51E25"></i><span>3.5 - 4.5 : กรดรุนแรงมากที่สุด</span><br>';
    div.innerHTML += '<i style="background: #82050B"></i><span><3.5 : กรดรุนแรงมากที่สุด</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล EC
var EC = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorEC(feature.properties.soil_ec_v),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าการนำไฟฟ้า : ' + feature.properties.soil_ec +
            ' dS/m</b><br /><b>การแปลผล : ' + feature.properties.soil_ec_v +
            '</b><br /><b>ชนิดดิน : ' + feature.properties.soil_type + '</b>');
    }
}).addTo(map);



var EClegend = L.control({
    position: 'bottomright'
});

EClegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าการนำไฟฟ้า (EC)</h3>";
    div.innerHTML += '<i style="background: #642168"></i><span>เค็มจัดมาก</span><br>';
    div.innerHTML += '<i style="background: #2B308B"></i><span>เค็มจัด</span><br>';
    div.innerHTML += '<i style="background: #98C93C"></i><span>เค็มปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #EE3924"></i><span>เค็มเล็กน้อย</span><br>';
    div.innerHTML += '<i style="background: #82050B"></i><span>ไม่เค็ม</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล OM
var OM = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorOM(feature.properties.soil_om),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าอินทรีย์วัตถุ : ' + feature.properties.soil_om +
            ' %</b><br /><b>แปลค่า : ' + feature.properties.soil_om_v + '</b>');
    }
}).addTo(map);



var OMlegend = L.control({
    position: 'bottomright'
});

OMlegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าอินทรียวัตถุ (OM)</h3>";
    div.innerHTML += '<i style="background: #559094"></i><span>>4.5 : สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #336600"></i><span>3.5 - 4.5 : สูง</span><br>';
    div.innerHTML += '<i style="background: #669900"></i><span>2.5 - 3.5 : ค่อนข้างสูง</span><br>';
    div.innerHTML += '<i style="background: #52642A"></i><span>1.5 - 2.5 : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #b3b300"></i><span>1.0 - 1.5 : ค่อนข้างต่ำ</span><br>';
    div.innerHTML += '<i style="background: #A3891A"></i><span>0.5 - 1.0 : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #B27F00"></i><span><0.5 : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล P
var P = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorP(feature.properties.soil_p),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าฟอสฟอรัส : ' + feature.properties.soil_p +
            ' ppm</b><br /><b>แปลค่า : ' +
            feature.properties.soil_p_v + '</b>');
    }
}).addTo(map);



var Plegend = L.control({
    position: 'bottomright'
});

Plegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าฟอสฟอรัส (P)</h3>";
    div.innerHTML += '<i style="background: #08306B"></i><span>>45 ppm : สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #08519C"></i><span>25 - 45 ppm : สูง</span><br>';
    div.innerHTML += '<i style="background: #2171B5"></i><span>15 - 25 ppm : ค่อนข้างสูง</span><br>';
    div.innerHTML += '<i style="background: #4292C6"></i><span>10 - 15 ppm : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #6BAED6"></i><span>6 - 10 ppm : ค่อนข้างต่ำ</span><br>';
    div.innerHTML += '<i style="background: #9ECAE1"></i><span>3 - 6 ppm : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #DEEBF7"></i><span><3 ppm : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล K
var K = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorK(feature.properties.soil_k),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าโพแทสเซียม : ' + feature.properties.soil_k + '</b><br /><b>แปลค่า : ' +
            feature.properties.soil_k_v + '</b>');
    }
}).addTo(map);



var Klegend = L.control({
    position: 'bottomright'
});

Klegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าโพแทสเซียม (K)</h3>";
    div.innerHTML += '<i style="background: #F57F17"></i><span>>120 ppm : สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #F9A825"></i><span>90 - 120 ppm : สูง</span><br>';
    div.innerHTML += '<i style="background: #FFEB3B"></i><span>60 - 90 ppm : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #FFF59D"></i><span>30 - 60 ppm : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #FFFDE7"></i><span><30 ppm : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

// จุดข้อมูล CA
var CA = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorCA(feature.properties.soil_ca),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าแคลเซียม : ' + feature.properties.soil_ca +
            ' ppm</b><br /><b>การแปลผล : ' + feature.properties.soil_ca_v + '</b>');
    }
}).addTo(map);

//CALegend
var CAlegend = L.control({
    position: 'bottomright'
});

CAlegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าแคลเซียม (Ca)</h3>";
    div.innerHTML += '<i style="background: #C03800"></i><span>>4,000 ppm : สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #E74C0C"></i><span>2,000 - 4,000 ppm : สูง</span><br>';
    div.innerHTML += '<i style="background: #FF8B62"></i><span>1,000 - 2,000 ppm : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #FFCDBB"></i><span>400 - 1,000 ppm : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #FBE9E7"></i><span><400 ppm : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล MG
var MG = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorMG(feature.properties.soil_mg),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าแมกนีเซียม : ' + feature.properties.soil_mg +
            '</b><br /><b>แปลค่า : ' +
            feature.properties.soil_mg_v + '</b>');
    }
}).addTo(map);



var MGlegend = L.control({
    position: 'bottomright'
});

MGlegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>แมกนีเซียม (Mg)</h3>";
    div.innerHTML += '<i style="background: #330033"></i><span>>960 ppm : สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #800080"></i><span>360 - 960 ppm : สูง</span><br>';
    div.innerHTML += '<i style="background: #76508D"></i><span>120 - 360 ppm : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #BBA6C5"></i><span>36 - 120 ppm : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #ffe6ff"></i><span><36 ppm : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล TYPE
var TYPE = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorTYPE(feature.properties.soil_type),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ชนิดดิน : ' +
            feature.properties.soil_type + '</b>');
    }
}).addTo(map);



var TYPElegend = L.control({
    position: 'bottomright'
});

TYPElegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ชนิดดิน</h3>";
    div.innerHTML += '<i style="background: #D12C0E"></i><span>ทราย</span><br>';
    div.innerHTML += '<i style="background: #DC7902"></i><span>ทรายร่วน</span><br>';
    div.innerHTML += '<i style="background: #FEF246"></i><span>ร่วน</span><br>';
    div.innerHTML += '<i style="background: #E9B12A"></i><span>ร่วนปนทราย</span><br>';
    div.innerHTML += '<i style="background: #CA115D"></i><span>ร่วนปนซิลท์</span><br>';
    div.innerHTML += '<i style="background: #A3036F"></i><span>ซิลท์</span><br>';
    div.innerHTML += '<i style="background: #4F9812"></i><span>ร่วนเหนียว</span><br>';
    div.innerHTML += '<i style="background: #53ADE2"></i><span>ร่วนเหนียวปนทราย</span><br>';
    div.innerHTML += '<i style="background: #F0C4D5"></i><span>ร่วนเหนียวปนซิลท์</span><br>';
    div.innerHTML += '<i style="background: #3C4195"></i><span>เหนียว</span><br>';
    div.innerHTML += '<i style="background: #D24288"></i><span>เหนียวปนทราย</span><br>';
    div.innerHTML += '<i style="background: #7E84C2"></i><span>เหนียวปนซิลท์</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};

//จุดข้อมูล F
var F = L.geoJson(FarmerData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColorF(feature.properties.soil_s_s),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            pane: "pointsPane"
        }).addTo(map);
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h3>' + feature.properties.name + '</h3><b>ตำบล : ' + feature.properties
            .land_subdistict + '</b><br /><b>อำเภอ : ' + feature.properties.land_distict +
            '</b><br /><b>จังหวัด : ' + feature.properties.land_province +
            '</b><br /><b>ค่าอินทรีย์วัตถุ : ' + feature.properties.soil_om +
            ' %</b><br /><b>ค่าฟอสฟอรัส : ' + feature.properties.soil_p +
            ' ppm</b><br /><b>ค่าโพแทสเซียม : ' + feature.properties.soil_k +
            ' ppm</b><br /><b>ค่าคะแนนความสมบูรณ์ : ' + feature.properties.soil_s_s +
            '</b><br /><b>การแปลผล : ' + feature.properties.soil_s_v + '</b>');
    }
}).addTo(map);



var Flegend = L.control({
    position: 'bottomright'
});

Flegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += "<h3>ค่าความสมบูรณ์</h3>";
    div.innerHTML += '<i style="background: #004d00"></i><span>8 - 9 สูงมาก</span><br>';
    div.innerHTML += '<i style="background: #00cc00"></i><span>6 - 7 : สูง</span><br>';
    div.innerHTML += '<i style="background: #ffff00"></i><span>4 - 5 : ปานกลาง</span><br>';
    div.innerHTML += '<i style="background: #ff6600"></i><span>2 - 3 : ต่ำ</span><br>';
    div.innerHTML += '<i style="background: #ff0000"></i><span>0 - 1 : ต่ำมาก</span><br>';

    // Return the Legend div containing the HTML content
    return div;
};


// Add Legend to Map
Flegend.addTo(map);

var baseMaps = {
    "แผนที่ค่าความเป็นกรด-ด่าง(pH)": PH,
    "แผนที่ค่าการนำไฟฟ้า(EC)": EC,
    "แผนที่ค่าอินทรียวัตถุ(OM)": OM,
    "แผนที่ค่าฟอสฟอรัส(P)": P,
    "แผนที่ค่าโพแทสเซียม(K)": K,
    "แผนที่ค่าแคลเซียม(Ca)": CA,
    "แผนที่ค่าแมกนีเซียม(Mg)": MG,
    "แผนที่ชนิดดิน": TYPE,
    "แผนที่ค่าความสมบูรณ์ดิน": F
};

/*var overlayMaps = {};

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false,
    position: 'topright'
}).addTo(map);*/

L.control.layers(baseMaps, null, {
    position: 'topright'
}).addTo(map);


map.on('baselayerchange', function(eventLayer) {
    if (eventLayer.name == 'แผนที่ค่าความเป็นกรด-ด่าง(pH)') {
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        PHlegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าการนำไฟฟ้า(EC)') {
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        EClegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าอินทรียวัตถุ(OM)') {
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        OMlegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าฟอสฟอรัส(P)') {
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        Plegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าโพแทสเซียม(K)') {
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        Klegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าแคลเซียม(Ca)') {
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        CAlegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ค่าแมกนีเซียม(Mg)') {
        map.removeControl(TYPElegend);
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        MGlegend.addTo(map);
    } else if (eventLayer.name == 'แผนที่ชนิดดิน') {
        map.removeControl(Flegend);
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        TYPElegend.addTo(map);
    } else {
        map.removeControl(PHlegend);
        map.removeControl(EClegend);
        map.removeControl(OMlegend);
        map.removeControl(Plegend);
        map.removeControl(Klegend);
        map.removeControl(CAlegend);
        map.removeControl(MGlegend);
        map.removeControl(TYPElegend);
        Flegend.addTo(map);
    }
})
</script>

</html>