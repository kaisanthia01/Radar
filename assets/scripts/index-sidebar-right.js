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
            }, 1000); //60 * 1000
        } else if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {
            ResetMetarTextRTAF();
            getMetarSymbolRTAF(txtMetar);

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdate = setInterval(function () {
                //callMetarUpdate();
                console.log('Update Metar&&Taf : ' + currentTime());
            }, 1000); //60 * 1000
        } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
            ResetMetarTextRTAF();
        } else {

        }

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Metar&&Taf RTAF',
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
            title: 'Remove Metar&&Taf RTAF',
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
    } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
        ResetMetarTextRTAF();
    } else {

    }
});

/* Wx News TMD */
$('input[type="checkbox"][id="Wx-News-Metar-Checkwx"]').click(function () {
    if ($('#Wx-News-Metar-Checkwx').is(":checked")) {
        $("#collapseMetarCheckwx").slideToggle();
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
        txtMetarCheckWX = ajaxMetarCheckWX();
        //txtTafCheckWX = ajaxTafCheckWX();
        $.unblockUI();

        //รูปแบบข้อมูลข่าวอากาศ
        if ($('#Wx-News-Metar-Checkwx-Text').is(":checked")) {
            ResetMetarTextCheckWX();
            getMetarSymbolCheckWX(txtMetarCheckWX);

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateCheckWX = setInterval(function () {
                //txtMetarCheckWX = ajaxMetarCheckWX();
                //txtTafCheckWX = ajaxTafCheckWX();
                console.log('Update Metar&&Taf : ' + currentTime());
            }, 1000); //60 * 1000
        } else if ($('#Wx-News-Metar-Checkwx-Symbol').is(":checked")) {
            ResetMetarTextCheckWX();
            getMetarSymbolCheckWX(txtMetarCheckWX);

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateCheckWX = setInterval(function () {
                //txtMetarCheckWX = ajaxMetarCheckWX();
                //txtTafCheckWX = ajaxTafCheckWX();
                console.log('Update Metar&&Taf : ' + currentTime());
            }, 1000); //60 * 1000
        } else if ($('#Wx-News-Metar-Checkwx-Icon').is(":checked")) {
            ResetMetarTextCheckWX();
        } else {

        }

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Metar&&Taf CheckWX',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else {
        clearInterval(MetarUpdateCheckWX);
        $("#collapseMetarCheckwx").slideToggle();
        $('input[type="radio"][name="Wx-News-Metar-Checkwx-Radio"]').prop('checked', false);
        ResetMetarTextCheckWX();
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Metar&&Taf CheckWX',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

$('input[type="radio"][name="Wx-News-Metar-Checkwx-Radio"]').change(function () {
    if ($('#Wx-News-Metar-Checkwx-Text').is(":checked")) {
        ResetMetarTextCheckWX();
        getMetarSymbolCheckWX(txtMetarCheckWX);
    } else if ($('#Wx-News-Metar-Checkwx-Symbol').is(":checked")) {
        ResetMetarTextCheckWX();
        getMetarSymbolRTAF(txtMetarCheckWX);
    } else if ($('#Wx-News-Metar-Checkwx-Icon').is(":checked")) {
        ResetMetarTextCheckWX();
    } else {

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