$(document).ready(function () {
    let txtMetar = new GetMetarRTAF();
    $('#Map-Control-Center-Right-Sidebar-Logo-Map-Control').on('click', function () {
        $('#Map-Control-Center-Right-Sidebar').toggleClass('open');
    });

    /*
     * Wx News 
     */
    /* Wx News RTAF */
    $('input[type="checkbox"][id="Wx-News-Metar-Rtaf"]').click(function () {
        if ($('#Wx-News-Metar-Rtaf').is(":checked")) {
            $("#collapseMetarRTAF").slideToggle();

            if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {} else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {} else {

            }

            //Get Metar Json
            $.ajax({
                Type: "GET",
                contentType: "application/text; charset=utf-8",
                //url: url + 'metarAll.php',
                url: 'assets/scripts/metar.json',
                dataType: "text",
                error: function () {
                    console.log("call_current error");
                },
                success: function (data) {
                    var jsonData = data.trim();
                    let jsonMetarStr = JSON.parse(jsonData);
                    txtMetar.getMetarTextRTAF(jsonMetarStr);
                    alert('Success');
                }
            });

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Metar RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
        } else {
            /* clearInterval(MetarUpdate);*/
            $("#collapseMetarRTAF").slideToggle();
            new GetMetarRTAF().ResetMetarTextRTAF();

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
    });

    $('input[type="checkbox"][id="Wx-News-Metar-Taf"]').click(function () {
        if ($('#Wx-News-Metar-Taf').is(":checked")) {
            $("#collapseTafRTAF").slideToggle();
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Add Layer Taf RTAF',
                showConfirmButton: false,
                padding: '7px',
                timer: 1500
            });
            $.ajax({
                Type: "GET",
                contentType: "application/text; charset=utf-8",
                url: url + 'taf.php',
                dataType: "text",
                error: function () {
                    console.log("call_current error");
                },
                success: function (data) {
                    var jsonData = data.trim();
                    TafStr = JSON.parse(jsonData);
                    $.each(TafStr.CURRENT_TAF, function (index, value) {
                        if (value.STATION_CODE != '-') {
                            //console.log(value.STATION_NAME + ' ' + value.NEWS_TIME + '\n' + value.TAF_TEXT);
                            if (value.STATION_CODE == "VTMD") {
                                TafRTAF = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>' + '<p class="card-text">' + value.TAF_TEXT + '</p>';
                                markerWing6.setTooltipContent('<div class="card m-0" style="width: 100%;"><div class="card-body p-2 m-0">' + MetarStr + '<hr>' + TafRTAF + '</div></div>');
                                markerWing6.addTo(map);

                            } else if (value.STATION_CODE == "VTNI") {
                                //markerWingNI.addTo(map);
                                $("#StationNameTafWingNI").empty();
                                $("#StationNameTafWingNI").append(value.STATION_NAME);
                                $("#DateTimeTafWingNI").empty();
                                $("#DateTimeTafWingNI").append(value.NEWS_TIME);
                                $("#TafWingNI").empty();
                                $("#TafWingNI").append(value.TAF_TEXT);
                                $("#HeaderTafWingNI").removeClass("d-none").addClass("d-block");
                            } else if (value.STATION_CODE == "VTNC") {
                                markerWing41.addTo(map);
                                $("#StationNameTafWing41").empty();
                                $("#StationNameTafWing41").append(value.STATION_NAME);
                                $("#DateTimeTafWing41").empty();
                                $("#DateTimeTafWing41").append(value.NEWS_TIME);
                                $("#TafWing41").empty();
                                $("#TafWing41").append(value.TAF_TEXT);
                                $("#HeaderTafWing41").removeClass("d-none").addClass("d-block");
                            } else if (value.STATION_CODE == "VTNP") {
                                $("#StationNameTafWing46").empty();
                                $("#StationNameTafWing46").append(value.STATION_NAME);
                                $("#DateTimeTafWing46").empty();
                                $("#DateTimeTafWing46").append(value.NEWS_TIME);
                                $("#TafWing46").empty();
                                $("#TafWing46").append(value.TAF_TEXT);
                                $("#HeaderTafWing46").removeClass("d-none").addClass("d-block");
                                markerWing46.addTo(map);
                            } else if (value.STATION_CODE == "VTED") {
                                $("#StationNameTafWing23").empty();
                                $("#StationNameTafWing23").append(value.STATION_NAME);
                                $("#DateTimeTafWing23").empty();
                                $("#DateTimeTafWing23").append(value.NEWS_TIME);
                                $("#TafWing23").empty();
                                $("#TafWing23").append(value.TAF_TEXT);
                                $("#HeaderTafWing23").removeClass("d-none").addClass("d-block");
                                markerWing23.addTo(map);
                            } else if (value.STATION_CODE == "VTEN") {
                                $("#StationNameTafWing1").empty();
                                $("#StationNameTafWing1").append(value.STATION_NAME);
                                $("#DateTimeTafWing1").empty();
                                $("#DateTimeTafWing1").append(value.NEWS_TIME);
                                $("#TafWing1").empty();
                                $("#TafWing1").append(value.TAF_TEXT);
                                $("#HeaderTafWing1").removeClass("d-none").addClass("d-block");
                                markerWing1.addTo(map);
                            } else if (value.STATION_CODE == "VTEU") {
                                $("#StationNameTafWing21").empty();
                                $("#StationNameTafWing21").append(value.STATION_NAME);
                                $("#DateTimeTafWing21").empty();
                                $("#DateTimeTafWing21").append(value.NEWS_TIME);
                                $("#TafWing21").empty();
                                $("#TafWing21").append(value.TAF_TEXT);
                                $("#HeaderTafWing21").removeClass("d-none").addClass("d-block");
                                markerWing21.addTo(map);
                            } else if (value.STATION_CODE == "VTEZ") {
                                $("#StationNameTafWingEZ").empty();
                                $("#StationNameTafWingEZ").append(value.STATION_NAME);
                                $("#DateTimeTafWingEZ").empty();
                                $("#DateTimeTafWingEZ").append(value.NEWS_TIME);
                                $("#TafWingEZ").empty();
                                $("#TafWingEZ").append(value.TAF_TEXT);
                                $("#HeaderTafWingEZ").removeClass("d-none").addClass("d-block");
                                markerWingEZ.addTo(map);
                            } else if (value.STATION_CODE == "VTMG") {
                                $("#StationNameTafWingMG").empty();
                                $("#StationNameTafWingMG").append(value.STATION_NAME);
                                $("#DateTimeTafWingMG").empty();
                                $("#DateTimeTafWingMG").append(value.NEWS_TIME);
                                $("#TafWingMG").empty();
                                $("#TafWingMG").append(value.TAF_TEXT);
                                $("#HeaderTafWingMG").removeClass("d-none").addClass("d-block");
                                markerWingMG.addTo(map);
                            } else if (value.STATION_CODE == "VTML") {
                                $("#StationNameTafWing2").empty();
                                $("#StationNameTafWing2").append(value.STATION_NAME);
                                $("#DateTimeTafWing2").empty();
                                $("#DateTimeTafWing2").append(value.NEWS_TIME);
                                $("#TafWing2").empty();
                                $("#TafWing2").append(value.TAF_TEXT);
                                $("#HeaderTafWing2").removeClass("d-none").addClass("d-block");
                                markerWing2.addTo(map);
                            } else if (value.STATION_CODE == "VTMI") {
                                $("#StationNameTafWing4").empty();
                                $("#StationNameTafWing4").append(value.STATION_NAME);
                                $("#DateTimeTafWing4").empty();
                                $("#DateTimeTafWing4").append(value.NEWS_TIME);
                                $("#TafWing4").empty();
                                $("#TafWing4").append(value.TAF_TEXT);
                                $("#HeaderTafWing4").removeClass("d-none").addClass("d-block");
                                markerWing4.addTo(map);
                            } else if (value.STATION_CODE == "VTMM") {
                                $("#StationNameTafWing6").empty();
                                $("#StationNameTafWing6").append(value.STATION_NAME);
                                $("#DateTimeTafWing6").empty();
                                $("#DateTimeTafWing6").append(value.NEWS_TIME);
                                $("#TafWing6").empty();
                                $("#TafWing6").append(value.TAF_TEXT);
                                $("#HeaderTafWing6").removeClass("d-none").addClass("d-block");
                                markerWing6.addTo(map);
                            } else if (value.STATION_CODE == "VTMK") {
                                $("#StationNameTafWingSS").empty();
                                $("#StationNameTafWingSS").append(value.STATION_NAME);
                                $("#DateTimeTafWingSS").empty();
                                $("#DateTimeTafWingSS").append(value.NEWS_TIME);
                                $("#TafWingSS").empty();
                                $("#TafWingSS").append(value.TAF_TEXT);
                                $("#HeaderTafWingSS").removeClass("d-none").addClass("d-block");
                                markerWingSS.addTo(map);
                            } else if (value.STATION_CODE == "VTMU") {
                                $("#StationNameTafWingMU").empty();
                                $("#StationNameTafWingMU").append(value.STATION_NAME);
                                $("#DateTimeTafWingMU").empty();
                                $("#DateTimeTafWingMU").append(value.NEWS_TIME);
                                $("#TafWingMU").empty();
                                $("#TafWingMU").append(value.TAF_TEXT);
                                $("#HeaderTafWingMU").removeClass("d-none").addClass("d-block");
                                //markerWingMU.addTo(map);
                            } else if (value.STATION_CODE == "VTMW") {
                                $("#StationNameTafWingMW").empty();
                                $("#StationNameTafWingMW").append(value.STATION_NAME);
                                $("#DateTimeTafWingMW").empty();
                                $("#DateTimeTafWingMW").append(value.NEWS_TIME);
                                $("#TafWingMW").empty();
                                $("#TafWingMW").append(value.TAF_TEXT);
                                $("#HeaderTafWingMW").removeClass("d-none").addClass("d-block");
                                //markerWingMW.addTo(map);
                            } else if (value.STATION_CODE == "VTMH") {
                                $("#StationNameTafWingMH").empty();
                                $("#StationNameTafWingMH").append(value.STATION_NAME);
                                $("#DateTimeTafWingMH").empty();
                                $("#DateTimeTafWingMH").append(value.NEWS_TIME);
                                $("#TafWingMH").empty();
                                $("#TafWingMH").append(value.TAF_TEXT);
                                $("#HeaderTafWingMH").removeClass("d-none").addClass("d-block");
                                //markerWingMH.addTo(map);
                            } else if (value.STATION_CODE == "VTMP") {
                                $("#StationNameTafWing5").empty();
                                $("#StationNameTafWing5").append(value.STATION_NAME);
                                $("#DateTimeTafWing5").empty();
                                $("#DateTimeTafWing5").append(value.NEWS_TIME);
                                $("#TafWing5").empty();
                                $("#TafWing5").append(value.TAF_TEXT);
                                $("#HeaderTafWing5").removeClass("d-none").addClass("d-block");
                                markerWing5.addTo(map);
                            } else if (value.STATION_CODE == "VTDB") {
                                $("#StationNameTafWing7").empty();
                                $("#StationNameTafWing7").append(value.STATION_NAME);
                                $("#DateTimeTafWing7").empty();
                                $("#DateTimeTafWing7").append(value.NEWS_TIME);
                                $("#TafWing7").empty();
                                $("#TafWing7").append(value.TAF_TEXT);
                                $("#HeaderTafWing7").removeClass("d-none").addClass("d-block");
                                markerWing7.addTo(map);
                            } else if (value.STATION_CODE == "VTDS") {
                                $("#StationNameTafWing56").empty();
                                $("#StationNameTafWing56").append(value.STATION_NAME);
                                $("#DateTimeTafWing56").empty();
                                $("#DateTimeTafWing56").append(value.NEWS_TIME);
                                $("#TafWing56").empty();
                                $("#TafWing56").append(value.TAF_TEXT);
                                $("#HeaderTafWing56").removeClass("d-none").addClass("d-block");
                                //markerWing56.addTo(map);
                            } else if (value.STATION_CODE == "VTDT") {
                                $("#StationNameTafWingDT").empty();
                                $("#StationNameTafWingDT").append(value.STATION_NAME);
                                $("#DateTimeTafWingDT").empty();
                                $("#DateTimeTafWingDT").append(value.NEWS_TIME);
                                $("#TafWingDT").empty();
                                $("#TafWingDT").append(value.TAF_TEXT);
                                $("#HeaderTafWingDT").removeClass("d-none").addClass("d-block");
                                //markerWingDT.addTo(map);
                            } else {}
                        }
                    });
                }
            });
        } else {
            /* clearInterval(MetarUpdate);*/
            $("#collapseTafRTAF").slideToggle();
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
                        return L.marker(latlng, {
                            icon: iconTMD
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/metar/' + feature.properties.icao + '',
                            headers: {
                                'X-API-Key': 'b3502b27075ff79e7978abae73'
                            },
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
                                    headers: {
                                        'X-API-Key': 'b3502b27075ff79e7978abae73'
                                    },
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
                        return L.marker(latlng, {
                            icon: iconTMD
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/metar/' + feature.properties.icao + '',
                            headers: {
                                'X-API-Key': 'b3502b27075ff79e7978abae73'
                            },
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
        } else if ($('#Wx-News-Metar-Checkwx').is(":not(:checked)")) {
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
                        return L.marker(latlng, {
                            icon: iconTMD
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/taf/' + feature.properties.icao + '',
                            headers: {
                                'X-API-Key': 'b3502b27075ff79e7978abae73'
                            },
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
                                    headers: {
                                        'X-API-Key': 'b3502b27075ff79e7978abae73'
                                    },
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
                        return L.marker(latlng, {
                            icon: iconTMD
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        $.ajax({
                            type: 'GET',
                            url: 'https://api.checkwx.com/taf/' + feature.properties.icao + '',
                            headers: {
                                'X-API-Key': 'b3502b27075ff79e7978abae73'
                            },
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
        } else if ($('#Wx-News-Taf-Checkwx').is(":not(:checked)")) {
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
        } else if ($('#Wx-Station-Rtaf').is(":not(:checked)")) {
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
        } else if ($('#Wx-Station-Checkwx').is(":not(:checked)")) {
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