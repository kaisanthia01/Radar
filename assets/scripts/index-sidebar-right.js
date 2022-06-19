$(document).ready(function () {
    $('#Map-Control-Center-Right-Sidebar-Logo-Map-Control').on('click', function () {
        $('#Map-Control-Center-Right-Sidebar').toggleClass('open');
    });

    /*
    * Wx News 
    */
    /* Wx News RTAF */
    $('input[type="checkbox"][id="Wx-News-Metar-Rtaf"]').click(function () {
        if ($('#Wx-News-Metar-Rtaf').is(":checked")) {
            if ($('#Wx-News-Metar-Taf').is(":checked")) {
                $.ajax({
                    Type: "GET",
                    contentType: "application/text; charset=utf-8",
                    url: url + 'metarAll.php',
                    dataType: "text",
                    error: function () {
                        console.log("call_current error");
                    },
                    success: function (data) {
                        var jsonData = data.trim();
                        MetarRTAF = JSON.parse(jsonData);
                        console.log(MetarRTAF);
                        $.each(MetarRTAF.CURRENT_WEATHER, function (index, value) {
                            if (value.STATION_CODE != '-') {
                                console.log(value.METAR);
                                MetarStr = value.METAR;
                                if (value.STATION_CODE == "VTMD") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNI") {
                                    markerWingNI.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNC") {
                                    markerWing41.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNP") {
                                    markerWing46.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTED") {
                                    markerWing23.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEN") {
                                    markerWing1.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEU") {
                                    markerWing21.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEZ") {
                                    markerWingEZ.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMG") {
                                    markerWingMG.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTML") {
                                    markerWing2.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMI") {
                                    markerWing4.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMM") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMK") {
                                    markerWingSS.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMU") {
                                    markerWingMU.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMW") {
                                    markerWingMW.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMH") {
                                    markerWingMH.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMP") {
                                    markerWing5.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDB") {
                                    markerWing7.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDS") {
                                    markerWing56.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDT") {
                                    markerWingDT.setTooltipContent(MetarStr);

                                } else {

                                }

                            }
                        });
                    }
                });
            } else {
                $.ajax({
                    Type: "GET",
                    contentType: "application/text; charset=utf-8",
                    url: url + 'metarAll.php',
                    dataType: "text",
                    error: function () {
                        console.log("call_current error");
                    },
                    success: function (data) {
                        var jsonData = data.trim();
                        MetarRTAF = JSON.parse(jsonData);
                        console.log(MetarRTAF);
                        $.each(MetarRTAF.CURRENT_WEATHER, function (index, value) {
                            if (value.STATION_CODE != '-') {
                                console.log(value.METAR);
                                MetarStr = value.METAR;
                                if (value.STATION_CODE == "VTMD") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNI") {
                                    markerWingNI.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNC") {
                                    markerWing41.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNP") {
                                    markerWing46.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTED") {
                                    markerWing23.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEN") {
                                    markerWing1.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEU") {
                                    markerWing21.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEZ") {
                                    markerWingEZ.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMG") {
                                    markerWingMG.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTML") {
                                    markerWing2.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMI") {
                                    markerWing4.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMM") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMK") {
                                    markerWingSS.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMU") {
                                    markerWingMU.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMW") {
                                    markerWingMW.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMH") {
                                    markerWingMH.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMP") {
                                    markerWing5.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDB") {
                                    markerWing7.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDS") {
                                    markerWing56.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDT") {
                                    markerWingDT.setTooltipContent(MetarStr);

                                } else {

                                }

                            }
                        });
                    }
                });
            }

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Metar RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-News-Metar-Rtaf').is(":not(:checked)")) {
            /* clearInterval(MetarUpdate);*/
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Metar RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }

        if ($('#Wx-News-Metar-Taf').is(":checked")) {
            if ($('#Wx-News-Metar-Rtaf').is(":checked")) { } else {
                $.ajax({
                    Type: "GET",
                    contentType: "application/text; charset=utf-8",
                    url: url + 'taf.php',
                    dataType: "text",
                    error: function () {
                        console.log("call_current error");
                    },
                    success: function (data) {
                        alert('test');
                        var jsonData = data.trim();
                        TafRTAF = JSON.parse(jsonData);
                        console.log(TafRTAF);
                        $.each(TafRTAF.CURRENT_TAF, function (index, value) {
                            if (value.STATION_CODE != '-') {
                                console.log(value.TAF_TEXT);
                                MetarStr = value.TAF_TEXT;
                                if (value.STATION_CODE == "VTMD") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNI") {
                                    markerWingNI.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNC") {
                                    markerWing41.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTNP") {
                                    markerWing46.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTED") {
                                    markerWing23.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEN") {
                                    markerWing1.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEU") {
                                    markerWing21.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTEZ") {
                                    markerWingEZ.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMG") {
                                    markerWingMG.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTML") {
                                    markerWing2.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMI") {
                                    markerWing4.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMM") {
                                    markerWing6.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMK") {
                                    markerWingSS.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMU") {
                                    markerWingMU.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMW") {
                                    markerWingMW.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMH") {
                                    markerWingMH.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTMP") {
                                    markerWing5.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDB") {
                                    markerWing7.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDS") {
                                    markerWing56.setTooltipContent(MetarStr);

                                } else if (value.STATION_CODE == "VTDT") {
                                    markerWingDT.setTooltipContent(MetarStr);

                                } else {

                                }

                            }
                        });
                    }
                });
            }

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Taf RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-News-Metar-Taf').is(":not(:checked)")) {
            /* clearInterval(MetarUpdate);*/
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Taf RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
    });

    /* Wx News TMD */
    $('input[type="checkbox"][id="Wx-News-Metar-Checkwx"]').click(function () {
        if ($('#Wx-News-Metar-Checkwx').is(":checked")) {
            if ($('#Wx-News-Metar-Checkwx').is(":checked")) {
                stationTMD = L.geoJSON(SYNOP_SITES, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: iconTMD });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/metar/' + feature.properties.icao + '',
                            headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                            dataType: 'json',
                            success: function (result) {
                                if (result.data.length == 0) {
                                    MetarTMD = 'Wait Update...!';
                                } else {
                                    MetarTMD = result.data[0];
                                }

                                $.ajax({
                                    type: 'GET',
                                    url: 'https://api.checkwx.com/taf/' + feature.properties.icao + '',
                                    headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                                    dataType: 'json',
                                    success: function (result) {
                                        if (result.data.length == 0) {
                                            TafTMD = 'Wait Update...!';
                                        } else {
                                            TafTMD = result.data[0];
                                        }
                                        layer.bindTooltip(
                                            '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
                                            '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
                                            '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
                                            '<b>METAR : ' + MetarTMD + '</b><br />' +
                                            '<b>TAF : ' + TafTMD + '</b>'
                                        );
                                    }
                                });
                            }
                        });
                    }
                });
            } else {
                stationTMD = L.geoJSON(SYNOP_SITES, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: iconTMD });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/metar/' + feature.properties.icao + '',
                            headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                            dataType: 'json',
                            success: function (result) {
                                if (result.data.length == 0) {
                                    MetarTMD = 'Wait Update...!';
                                } else {
                                    MetarTMD = result.data[0];
                                }
                                layer.bindTooltip(
                                    '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
                                    '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
                                    '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
                                    '<b>METAR : ' + MetarTMD + '</b><br />' +
                                    '<b>TAF : Wait Update...!</b>'
                                );
                            }
                        });
                    }
                });
            }

            stationTMD.addTo(map);

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Metar TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-News-Metar-Checkwx').is(":not(:checked)")) {
            /* clearInterval(MetarUpdate);*/
            map.removeLayer(stationTMD);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Metar TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
    });

    $('input[type="checkbox"][id="Wx-News-Taf-Checkwx"]').click(function () {
        if ($('#Wx-News-Taf-Checkwx').is(":checked")) {
            if ($('#Wx-News-Metar-Checkwx').is(":checked")) {
                stationTMD = L.geoJSON(SYNOP_SITES, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: iconTMD });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/taf/' + feature.properties.icao + '',
                            headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                            dataType: 'json',
                            success: function (result) {
                                if (result.data.length == 0) {
                                    TafTMD = 'Wait Update...!';
                                } else {
                                    TafTMD = result.data[0];
                                }

                                $.ajax({
                                    type: 'GET',
                                    url: 'https://api.checkwx.com/metar/' + feature.properties.icao + '',
                                    headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                                    dataType: 'json',
                                    success: function (result) {
                                        if (result.data.length == 0) {
                                            MetarTMD = 'Wait Update...!';
                                        } else {
                                            MetarTMD = result.data[0];
                                        }
                                        layer.bindTooltip(
                                            '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
                                            '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
                                            '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
                                            '<b>METAR : ' + MetarTMD + '</b><br />' +
                                            '<b>TAF : ' + TafTMD + '</b>'
                                        );
                                    }
                                });
                            }
                        });
                    }
                });
            } else {
                stationTMD = L.geoJSON(SYNOP_SITES, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: iconTMD });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/taf/' + feature.properties.icao + '',
                            headers: { 'X-API-Key': 'b3502b27075ff79e7978abae73' },
                            dataType: 'json',
                            success: function (result) {
                                if (result.data.length == 0) {
                                    TafTMD = 'Wait Update...!';
                                } else {
                                    TafTMD = result.data[0];
                                }
                                layer.bindTooltip(
                                    '<b>STATION : ' + feature.properties.station_name + '</b><br />' +
                                    '<b>ICAO : ' + feature.properties.icao + '</b><br />' +
                                    '<b>SYNOP : ' + feature.properties.synop + '</b><br />' +
                                    '<b>METAR : Wait Update...!</b><br />' +
                                    '<b>TAF : ' + TafTMD + '</b>'
                                );
                            }
                        });
                    }
                });
            }
            stationTMD.addTo(map);

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Taf TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-News-Taf-Checkwx').is(":not(:checked)")) {
            /* clearInterval(MetarUpdate);*/
            map.removeLayer(stationTMD);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Taf TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
    });
    /*
    * ------------------------------------------------------------------------------- *
    */

    /*
    * Station 
    */
    /* Station RTAF */
    $('input[type="checkbox"][id="Wx-Station-Rtaf"]').click(function () {
        if ($('#Wx-Station-Rtaf').is(":checked")) {
            markerWing1.addTo(map);
            markerWing2.addTo(map);
            markerWing3.addTo(map);
            markerWing4.addTo(map);
            markerWing5.addTo(map);
            markerWing6.addTo(map);
            markerWing7.addTo(map);
            markerWing21.addTo(map);
            markerWing23.addTo(map);
            markerWing41.addTo(map);
            markerWing46.addTo(map);
            markerWingSS.addTo(map);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Station RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-Station-Rtaf').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
            map.removeLayer(markerWing2);
            map.removeLayer(markerWing3);
            map.removeLayer(markerWing4);
            map.removeLayer(markerWing5);
            map.removeLayer(markerWing6);
            map.removeLayer(markerWing7);
            map.removeLayer(markerWing21);
            map.removeLayer(markerWing23);
            map.removeLayer(markerWing41);
            map.removeLayer(markerWing46);
            map.removeLayer(markerWingSS);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Station RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
    });

    /* Station TMD */
    $('input[type="checkbox"][id="Wx-Station-Checkwx"]').click(function () {
        if ($('#Wx-Station-Checkwx').is(":checked")) {
            stationTMD.addTo(map);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Station TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
        else if ($('#Wx-Station-Checkwx').is(":not(:checked)")) {
            map.removeLayer(stationTMD);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Remove Layer Station TMD',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        }
    });
    /*
    * ------------------------------------------------------------------------------- *
    */

    /*
    * Mapbox styles 
    */
    /* Change Mapbox styles */
    $('input[type="radio"][name="MapStyleRadio"]').on('change', function () {
        var MapStyleRadio = $('input[type="radio"][name="MapStyleRadio"]:checked').val();
        map.removeLayer(tiles);
        tiles = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpc2FudGhpYTAxIiwiYSI6ImNsM2g3b3RwajBwODYzanFpMGN4YmV2MjAifQ.UTA02GOqHSlLk9d0PisY-g', {
            maxZoom: 18,
            id: MapStyleRadio,
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Map Style :' + MapStyleRadio,
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    });
    /*
    * ------------------------------------------------------------------------------- *
    */
});


/*
MetarUpdate = setInterval(function () {
                callMetarUpdate();
            }, 60 * 1000);
            function callMetarUpdate() {
                try {
                    $.ajax({
                        Type: "GET",
                        contentType: "application/text; charset=utf-8",
                        url: url + 'metarAll.html',
                        dataType: "text",
                        error: function () {
                            console.log("call_current error");
                        },
                        success: function (data) {
                            var jsonData = data.trim();
                            MetarCurrent = JSON.parse(jsonData);
                            console.log(MetarCurrent);
                            $.each(MetarCurrent.CURRENT_WEATHER, function (index, value) {
                                if (value.STATION_CODE != '-') {
                                    console.log(value.METAR);
                                    MetarStr = value.METAR;
                                    markerWing6.setTooltipContent(MetarStr);
                                }
                            });
                        },
                        Timeout: 6000
                    });

                } catch (err) {
                    console.log(err);
                }
            }
*/