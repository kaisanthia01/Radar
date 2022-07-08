$('#Map-Control-Center-Left-Sidebar-Logo-Wx-Layer').on('click', function () {
    $('#Map-Control-Center-Left-Sidebar').toggleClass('open');
});

/*
 * Radar RTAF
 */
/* Radar-Wing-VTEN */
$('input[type="checkbox"][id="Radar-Wing-VTEN"]').click(function () {
    if ($('#Radar-Wing-VTEN').is(":checked")) {
        markerVTEN.addTo(map);
    } else if ($('#Radar-Wing-VTEN').is(":not(:checked)")) {
        map.removeLayer(markerVTEN);
    }
});

/* Radar-Wing-VTEU */
$('input[type="checkbox"][id="Radar-Wing-VTEU"]').click(function () {
    if ($('#Radar-Wing-VTEU').is(":checked")) {
        markerVTEU.addTo(map);
    } else if ($('#Radar-Wing-VTEU').is(":not(:checked)")) {
        map.removeLayer(markerVTEU);
    }
});

/* Radar-Wing-VTED */
$('input[type="checkbox"][id="Radar-Wing-VTED"]').click(function () {
    if ($('#Radar-Wing-VTED').is(":checked")) {
        imageOverlayVTED.addTo(map);
    } else if ($('#Radar-Wing-VTED').is(":not(:checked)")) {
        map.removeLayer(imageOverlayVTED);
    }
});

/* Radar-Wing-VTMI */
$('input[type="checkbox"][id="Radar-Wing-VTMI"]').click(function () {
    if ($('#Radar-Wing-VTMI').is(":checked")) {
        imageOverlayVTMI.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Radar Wing4',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Radar-Wing-VTMI').is(":not(:checked)")) {
        map.removeLayer(imageOverlayVTMI);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Radar Wing4',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* Radar-Wing-VTMK */
$('input[type="checkbox"][id="Radar-Wing-VTMK"]').click(function () {
    if ($('#Radar-Wing-VTMK').is(":checked")) {
        markerVTMK.addTo(map);
    } else if ($('#Radar-Wing-VTMK').is(":not(:checked)")) {
        map.removeLayer(markerVTMK);
    }
});

/* Radar-Wing-VTDB */
$('input[type="checkbox"][id="Radar-Wing-VTDB"]').click(function () {
    if ($('#Radar-Wing-VTDB').is(":checked")) {
        //RemoveBG กองบิน 7
        $.ajax({
            Type: "GET",
            contentType: "application/text; charset=utf-8",
            url: 'http://radar.climate4.esy.es/assets/images/radar/wing7/latest/wing7removeBG.php',
            dataType: "text",
            async: false,
            success: function (data) {},
            error: function (err) {}
        });

        imageOverlayVTDB.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Radar Wing7',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Radar-Wing-VTDB').is(":not(:checked)")) {
        map.removeLayer(imageOverlayVTDB);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Radar Wing7',
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
 * Radar TMD
 */
/* Radar-Nongkhame */
$('input[type="checkbox"][id="Radar-Nongkhame"]').click(function () {
    if ($('#Radar-Nongkhame').is(":checked")) {
        imageOverlayNongkam.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Radar Nongkhame',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Radar-Nongkhame').is(":not(:checked)")) {
        map.removeLayer(imageOverlayNongkam);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Radar Nongkhame',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* Radar-Nongchok */
$('input[type="checkbox"][id="Radar-Nongchok"]').click(function () {
    if ($('#Radar-Nongchok').is(":checked")) {
        imageOverlayNongchok.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Radar Nongchok',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Radar-Nongchok').is(":not(:checked)")) {
        map.removeLayer(imageOverlayNongchok);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Radar Nongchok',
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
 * Satellite TMD
 */
/* Satellite-IR */
$('input[type="checkbox"][id="Sat-IR"]').click(function () {
    if ($('#Sat-IR').is(":checked")) {
        imageOverlaySatelliteIR.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Satellite IR',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-IR-OPA").removeAttr('disabled');
    } else if ($('#Sat-IR').is(":not(:checked)")) {
        map.removeLayer(imageOverlaySatelliteIR);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Satellite IR',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-IR-OPA").attr('disabled', 'disabled');
    }
});

$('input[type="range"][id="Sat-IR-OPA"]').change(function () {
    var opaVal = $('#Sat-IR-OPA').val();
    imageOverlaySatelliteIR.setOpacity(opaVal).addTo(map);
});

/* Satellite-VIS */
$('input[type="checkbox"][id="Sat-VIS"]').click(function () {
    if ($('#Sat-VIS').is(":checked")) {
        imageOverlaySatelliteVIS.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Satellite VIS',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-VIS-OPA").removeAttr('disabled');
    } else if ($('#Sat-VIS').is(":not(:checked)")) {
        map.removeLayer(imageOverlaySatelliteVIS);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Satellite VIS',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-VIS-OPA").attr('disabled', 'disabled');
    }
});

$('input[type="range"][id="Sat-VIS-OPA"]').change(function () {
    var opaVal = $('#Sat-VIS-OPA').val();
    imageOverlaySatelliteVIS.setOpacity(opaVal).addTo(map);
});

/* Satellite-WV */
$('input[type="checkbox"][id="Sat-WV"]').click(function () {
    if ($('#Sat-WV').is(":checked")) {
        imageOverlaySatelliteWV.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Satellite WV',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-WV-OPA").removeAttr('disabled');
    } else if ($('#Sat-WV').is(":not(:checked)")) {
        map.removeLayer(imageOverlaySatelliteWV);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Satellite WV',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-WV-OPA").attr('disabled', 'disabled');
    }
});

$('input[type="range"][id="Sat-WV-OPA"]').change(function () {
    var opaVal = $('#Sat-WV-OPA').val();
    imageOverlaySatelliteWV.setOpacity(opaVal).addTo(map);
});

/* Satellite-WV */
$('input[type="checkbox"][id="Sat-ENH"]').click(function () {
    if ($('#Sat-ENH').is(":checked")) {
        imageOverlaySatelliteENH.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Satellite ENH',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-ENH-OPA").removeAttr('disabled');
    } else if ($('#Sat-ENH').is(":not(:checked)")) {
        map.removeLayer(imageOverlaySatelliteENH);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Satellite ENH',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
        $("#Sat-ENH-OPA").attr('disabled', 'disabled');
    }
});

$('input[type="range"][id="Sat-ENH-OPA"]').change(function () {
    var opaVal = $('#Sat-ENH-OPA').val();

    imageOverlaySatelliteENH.setOpacity(opaVal).addTo(map);
});
/*
 * ------------------------------------------------------------------------------- *
 */

/*
 * Area-Fight
 */
/* VTBU */
$('input[type="checkbox"][id="Area-Fight-VTBU"]').click(function () {
    if ($('#Area-Fight-VTBU').is(":checked")) {
        KML_VTBU.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTBU',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTBU').is(":not(:checked)")) {
        map.removeLayer(KML_VTBU);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTBU',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTNC */
$('input[type="checkbox"][id="Area-Fight-VTNC"]').click(function () {
    if ($('#Area-Fight-VTNC').is(":checked")) {
        KML_VTNC.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTNC',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTNC').is(":not(:checked)")) {
        map.removeLayer(KML_VTNC);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTNC',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTNC */
$('input[type="checkbox"][id="Area-Fight-VTED"]').click(function () {
    if ($('#Area-Fight-VTED').is(":checked")) {
        KML_VTED.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTED',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTED').is(":not(:checked)")) {
        map.removeLayer(KML_VTED);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTED',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTEN */
$('input[type="checkbox"][id="Area-Fight-VTEN"]').click(function () {
    if ($('#Area-Fight-VTEN').is(":checked")) {
        KML_VTEN.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTEN',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTEN').is(":not(:checked)")) {
        map.removeLayer(KML_VTEN);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTEN',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTEU */
$('input[type="checkbox"][id="Area-Fight-VTEU"]').click(function () {
    if ($('#Area-Fight-VTEU').is(":checked")) {
        KML_VTEU.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTEU',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTEU').is(":not(:checked)")) {
        map.removeLayer(KML_VTEU);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTEU',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTMI */
$('input[type="checkbox"][id="Area-Fight-VTMI"]').click(function () {
    if ($('#Area-Fight-VTMI').is(":checked")) {
        KML_VTMI.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTMI',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTMI').is(":not(:checked)")) {
        map.removeLayer(KML_VTMI);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTMI',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTMK */
$('input[type="checkbox"][id="Area-Fight-VTMK"]').click(function () {
    if ($('#Area-Fight-VTMK').is(":checked")) {
        KML_VTMK.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTMK',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTMK').is(":not(:checked)")) {
        map.removeLayer(KML_VTMK);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTMK',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTMP */
$('input[type="checkbox"][id="Area-Fight-VTMP"]').click(function () {
    if ($('#Area-Fight-VTMP').is(":checked")) {
        KML_VTMP.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTMP',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTMP').is(":not(:checked)")) {
        map.removeLayer(KML_VTMP);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTMP',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTDB */
$('input[type="checkbox"][id="Area-Fight-VTDB"]').click(function () {
    if ($('#Area-Fight-VTDB').is(":checked")) {
        KML_VTDB.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTDB',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTDB').is(":not(:checked)")) {
        map.removeLayer(KML_VTDB);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTDB',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});

/* VTDS */
$('input[type="checkbox"][id="Area-Fight-VTDS"]').click(function () {
    if ($('#Area-Fight-VTDS').is(":checked")) {
        KML_VTDS.addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer Area-Fight VTDS',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('#Area-Fight-VTDS').is(":not(:checked)")) {
        map.removeLayer(KML_VTDS);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer Area-Fight VTDS',
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});
/*
 * ------------------------------------------------------------------------------- *
 */