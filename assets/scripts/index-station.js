$(document).ready(function () {
    /* Map-Control-Station-Wing-VTMD */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMD"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMD').is(":checked")) {
            markerWing6.addTo(map);
            seqGroup.addTo(map);
            seqGroup.motionStart();
        }
        else if ($('#Map-Control-Station-Wing-VTMD').is(":not(:checked)")) {
            map.removeLayer(markerWing6);
            map.removeLayer(seqGroup);
        }
    });

    /* Map-Control-Station-Wing-VTNI */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTNI"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTNI').is(":checked")) {
            markerWing41.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTNI').is(":not(:checked)")) {
            map.removeLayer(markerWing41);
        }
    });

    /* Map-Control-Station-Wing-VTNC */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTNC"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTNC').is(":checked")) {
            markerWing41.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTNC').is(":not(:checked)")) {
            map.removeLayer(markerWing41);
        }
    });

    /* Map-Control-Station-Wing-VTNP */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTNP"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTNP').is(":checked")) {
            markerWing46.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTNP').is(":not(:checked)")) {
            map.removeLayer(markerWing46);
        }
    });

    /* Map-Control-Station-Wing-VTED */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTED"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTED').is(":checked")) {
            markerWing23.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTED').is(":not(:checked)")) {
            map.removeLayer(markerWing23);
        }
    });

    /* Map-Control-Station-Wing-VTEU */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTEU"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTEU').is(":checked")) {
            markerWing21.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTEU').is(":not(:checked)")) {
            map.removeLayer(markerWing21);
        }
    });

    /* Map-Control-Station-Wing-VTEN */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTEN"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTEN').is(":checked")) {
            markerWing1.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTEN').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
        }
    });

    /* Map-Control-Station-Wing-VTEZ */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTEZ"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTEZ').is(":checked")) {
            markerWing1.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTEZ').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
        }
    });

    /* Map-Control-Station-Wing-VTET */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTET"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTET').is(":checked")) {
            markerWing1.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTET').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
        }
    });

    /* Map-Control-Station-Wing-VTMG */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMG"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMG').is(":checked")) {
            markerWing1.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMG').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
        }
    });

    /* Map-Control-Station-Wing-VTMI */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMI"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMI').is(":checked")) {
            markerWing4.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMI').is(":not(:checked)")) {
            map.removeLayer(markerWing4);
        }
    });

    /* Map-Control-Station-Wing-VTML */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTML"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTML').is(":checked")) {
            markerWing2.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTML').is(":not(:checked)")) {
            map.removeLayer(markerWing2);
        }
    });

    /* Map-Control-Station-Wing-VTMM */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMM"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMM').is(":checked")) {
            markerWing2.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMM').is(":not(:checked)")) {
            map.removeLayer(markerWing2);
        }
    });

    /* Map-Control-Station-Wing-VTMK */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMK"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMK').is(":checked")) {
            markerWingSS.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMK').is(":not(:checked)")) {
            map.removeLayer(markerWingSS);
        }
    });

    /* Map-Control-Station-Wing-VTMW */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMW"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMW').is(":checked")) {
            markerWing6.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMW').is(":not(:checked)")) {
            map.removeLayer(markerWing6);
        }
    });

    /* Map-Control-Station-Wing-VTMU */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMU"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMU').is(":checked")) {
            markerWing6.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMU').is(":not(:checked)")) {
            map.removeLayer(markerWing6);
        }
    });

    /* Map-Control-Station-Wing-VTMP */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMP"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMP').is(":checked")) {
            markerWing5.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMP').is(":not(:checked)")) {
            map.removeLayer(markerWing5);
        }
    });

    /* Map-Control-Station-Wing-VTDB */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTDB"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTDB').is(":checked")) {
            markerWing7.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTDB').is(":not(:checked)")) {
            map.removeLayer(markerWing7);
        }
    });


    /* Map-Control-Station-Wing-VTDS */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTDS"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTDS').is(":checked")) {
            markerWing56.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTDS').is(":not(:checked)")) {
            map.removeLayer(markerWing56);
        }
    });

    /* Map-Control-Station-Wing-VTMH */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTMH"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTMH').is(":checked")) {
            markerWing5.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTMH').is(":not(:checked)")) {
            map.removeLayer(markerWing5);
        }
    });

    /* Map-Control-Station-Wing-VTDT */
    $('input[type="checkbox"][id="Map-Control-Station-Wing-VTDT"]').click(function () {
        if ($('#Map-Control-Station-Wing-VTDT').is(":checked")) {
            markerWing56.addTo(map);
        }
        else if ($('#Map-Control-Station-Wing-VTDT').is(":not(:checked)")) {
            map.removeLayer(markerWing56);
        }
    });
});