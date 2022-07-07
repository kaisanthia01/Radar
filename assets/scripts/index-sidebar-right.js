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
        $('input[type="checkbox"][id="Wx-Station-Rtaf"]').prop('checked', false);
        $.blockUI({
            message: '<div class="p-1"> ' +
                '<div class="progress mb-2">' +
                '<div class="progress-bar bg-warning p-1 progress-bar-animated progress-bar-striped text-dark" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="MetarProgressBar">Downloading...!</div>' +
                '</div>' +
                '<span class="badge bg-danger" onclick="MetarProgressBarCancel();">Cancel</span>' +
                '</div> ',
            css: {
                width: '275px',
                border: 'none',
                borderRadius: '25px',
                cursor: 'default',
                background: 'none'
            }
        });
        txtMetar = ajaxMetarRTAF();
        txtTaf = ajaxTafRTAF();
        $.unblockUI();

        //รูปแบบข้อมูลข่าวอากาศ
        if ($('#Wx-News-Metar-Rtaf-Text').is(":checked")) {
            ResetMetarTextRTAF();
            getMetarTafTextRTAF(txtMetar, txtTaf);

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdate = setInterval(function () {
                //callMetarUpdate();
                console.log('Update Metar&&Taf : ' + currentTime());
            }, 1000);
        } else if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {
            ResetMetarTextRTAF();
            getMetarSymbolRTAF(txtMetar);
            map.removeLayer(tiles);
            tiles = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpc2FudGhpYTAxIiwiYSI6ImNsM2g3b3RwajBwODYzanFpMGN4YmV2MjAifQ.UTA02GOqHSlLk9d0PisY-g', {
                maxZoom: 18,
                id: 'mapbox/light-v10',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);
            $('input[type="radio"][id="Map-Style-Light"]').prop('checked', true);

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdate = setInterval(function () {
                //callMetarUpdate();
                console.log('Update Metar&&Taf : ' + currentTime());
            }, 1000);
        } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
            ResetMetarTextRTAF();
        } else {

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
    } else {
        clearInterval(MetarUpdate);
        $("#collapseMetarRTAF").slideToggle();
        $('input[type="radio"][name="Wx-News-Metar-Rtaf-Radio"]').prop('checked', false);
        $('input[type="checkbox"][id="Wx-Station-Rtaf"]').prop('checked', false);
        ResetMetarTextRTAF();
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

$('input[type="radio"][name="Wx-News-Metar-Rtaf-Radio"]').change(function () {
    if ($('#Wx-News-Metar-Rtaf-Text').is(":checked")) {
        ResetMetarTextRTAF();
        getMetarTafTextRTAF(txtMetar, txtTaf);
    } else if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {
        ResetMetarTextRTAF();
        getMetarSymbolRTAF(txtMetar);
        map.removeLayer(tiles);
        tiles = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpc2FudGhpYTAxIiwiYSI6ImNsM2g3b3RwajBwODYzanFpMGN4YmV2MjAifQ.UTA02GOqHSlLk9d0PisY-g', {
            maxZoom: 18,
            id: 'mapbox/light-v10',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);
        $('input[type="radio"][id="Map-Style-Light"]').prop('checked', true);
    } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
        ResetMetarTextRTAF();
    } else {

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
        AddsetMetarTextRTAF();
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
        ResetMetarTextRTAF();
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