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
            clearInterval(MetarUpdateSymbol);
            ResetMetarTextRTAF();
            getMetarTafTextRTAF(txtMetar, txtTaf);
            console.log('RTAF-Update Metar&&Taf : ' + currentTime());

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateText = setInterval(function () {
                txtMetar = ajaxMetarRTAF();
                txtTaf = ajaxTafRTAF();

                //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
                ResetMetarTextRTAF();
                getMetarTafTextRTAF(txtMetar, txtTaf);
                console.log('RTAF-Update Metar&&Taf : ' + currentTime());
            }, 5 * 1000);
        } else if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {
            clearInterval(MetarUpdateText);
            ResetMetarTextRTAF();
            getMetarSymbolRTAF(txtMetar);
            console.log('RTAF-Update Metar : ' + currentTime());

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateSymbol = setInterval(function () {
                txtMetar = ajaxMetarRTAF();

                //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
                ResetMetarTextRTAF();
                getMetarSymbolRTAF(txtMetar);
                console.log('RTAF-Update Metar : ' + currentTime());
            }, 5 * 1000);
        } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
            ResetMetarTextRTAF();
        } else {
            clearInterval(MetarUpdateText);
            clearInterval(MetarUpdateSymbol);
            ResetMetarTextRTAF();
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
        clearInterval(MetarUpdateText);
        clearInterval(MetarUpdateSymbol);
        ResetMetarTextRTAF();
        $("#collapseMetarRTAF").slideToggle();
        $('input[type="radio"][name="Wx-News-Metar-Rtaf-Radio"]').prop('checked', false);
        $('input[type="checkbox"][id="Wx-Station-Rtaf"]').prop('checked', false);
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
        clearInterval(MetarUpdateSymbol);
        ResetMetarTextRTAF();
        getMetarTafTextRTAF(txtMetar, txtTaf);
        console.log('RTAF-Update Metar&&Taf : ' + currentTime());

        //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
        MetarUpdateText = setInterval(function () {
            txtMetar = ajaxMetarRTAF();
            txtTaf = ajaxTafRTAF();

            //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
            ResetMetarTextRTAF();
            getMetarTafTextRTAF(txtMetar, txtTaf);
            console.log('RTAF-Update Metar&&Taf : ' + currentTime());
        }, 5 * 1000);
    } else if ($('#Wx-News-Metar-Rtaf-Symbol').is(":checked")) {
        clearInterval(MetarUpdateText);
        ResetMetarTextRTAF();
        getMetarSymbolRTAF(txtMetar);
        console.log('RTAF-Update Metar : ' + currentTime());

        //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
        MetarUpdateSymbol = setInterval(function () {
            txtMetar = ajaxMetarRTAF();

            //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
            ResetMetarTextRTAF();
            getMetarSymbolRTAF(txtMetar);
            console.log('RTAF-Update Metar : ' + currentTime());
        }, 5 * 1000);
    } else if ($('#Wx-News-Metar-Rtaf-Icon').is(":checked")) {
        ResetMetarTextRTAF();
    } else {
        clearInterval(MetarUpdateText);
        clearInterval(MetarUpdateSymbol);
        ResetMetarTextRTAF();
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
        txtTafCheckWX = ajaxTafCheckWX();
        $.unblockUI();

        //รูปแบบข้อมูลข่าวอากาศ
        if ($('#Wx-News-Metar-Checkwx-Text').is(":checked")) {
            clearInterval(MetarUpdateCheckWXSymbol);
            ResetMetarTextCheckWX();
            getMetarTafTexCheckWX(txtMetarCheckWX, txtTafCheckWX);
            console.log('CheckWX-Update Metar&&Taf : ' + currentTime());

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateCheckWXText = setInterval(function () {
                txtMetarCheckWX = ajaxMetarCheckWX();
                txtTafCheckWX = ajaxTafCheckWX();

                //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
                ResetMetarTextCheckWX();
                getMetarTafTexCheckWX(txtMetarCheckWX, txtTafCheckWX);
                console.log('CheckWX-Update Metar&&Taf : ' + currentTime());
            }, 5 * 1000);
        } else if ($('#Wx-News-Metar-Checkwx-Symbol').is(":checked")) {
            clearInterval(MetarUpdateCheckWXText);
            ResetMetarTextCheckWX();
            getMetarSymbolCheckWX(txtMetarCheckWX);
            console.log('CheckWX-Update Metar : ' + currentTime());

            //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
            MetarUpdateCheckWXSymbol = setInterval(function () {
                txtMetarCheckWX = ajaxMetarCheckWX();

                //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
                ResetMetarTextCheckWX();
                getMetarSymbolCheckWX(txtMetarCheckWX);
                console.log('CheckWX-Update Metar : ' + currentTime());
            }, 5 * 1000);
        } else if ($('#Wx-News-Metar-Checkwx-Icon').is(":checked")) {
            ResetMetarTextCheckWX();
        } else {
            clearInterval(MetarUpdateCheckWXText);
            clearInterval(MetarUpdateCheckWXSymbol);
            ResetMetarTextCheckWX();
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
        clearInterval(MetarUpdateCheckWXText);
        clearInterval(MetarUpdateCheckWXSymbol);
        ResetMetarTextCheckWX();
        $("#collapseMetarCheckwx").slideToggle();
        $('input[type="radio"][name="Wx-News-Metar-Checkwx-Radio"]').prop('checked', false);
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
        clearInterval(MetarUpdateCheckWXSymbol);
        ResetMetarTextCheckWX();
        getMetarTafTexCheckWX(txtMetarCheckWX, txtTafCheckWX);
        console.log('CheckWX-Update Metar&&Taf : ' + currentTime());

        //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
        MetarUpdateCheckWXText = setInterval(function () {
            txtMetarCheckWX = ajaxMetarCheckWX();
            txtTafCheckWX = ajaxTafCheckWX();

            //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
            ResetMetarTextCheckWX();
            getMetarTafTexCheckWX(txtMetarCheckWX, txtTafCheckWX);
            console.log('CheckWX-Update Metar&&Taf : ' + currentTime());
        }, 5 * 1000);
    } else if ($('#Wx-News-Metar-Checkwx-Symbol').is(":checked")) {
        clearInterval(MetarUpdateCheckWXText);
        ResetMetarTextCheckWX();
        getMetarSymbolCheckWX(txtMetarCheckWX);
        console.log('CheckWX-Update Metar : ' + currentTime());

        //ฟังก์ชั่นอัพเดทข่าว Metar && Taf ประจำชั่วโมงใหม่
        MetarUpdateCheckWXSymbol = setInterval(function () {
            txtMetarCheckWX = ajaxMetarCheckWX();

            //อัพเดทข้อมูลข่าวใหม่อีกครั้งทุก 30 นาที
            ResetMetarTextCheckWX();
            getMetarSymbolCheckWX(txtMetarCheckWX);
            console.log('CheckWX-Update Metar : ' + currentTime());
        }, 5 * 1000);
    } else if ($('#Wx-News-Metar-Checkwx-Icon').is(":checked")) {
        ResetMetarTextCheckWX();
    } else {
        clearInterval(MetarUpdateCheckWXText);
        clearInterval(MetarUpdateCheckWXSymbol);
        ResetMetarTextCheckWX();
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