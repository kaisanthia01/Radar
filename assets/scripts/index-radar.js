$(document).ready(function () {
    /* Map-Control-Radar-Wing-VTEN */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTEN"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTEN').is(":checked")) {
            markerWing1.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTEN').is(":not(:checked)")) {
            map.removeLayer(markerWing1);
        }
    });

    /* Map-Control-Radar-Wing-VTEU */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTEU"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTEU').is(":checked")) {
            markerWing21.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTEU').is(":not(:checked)")) {
            map.removeLayer(markerWing21);
        }
    });

    /* Map-Control-Radar-Wing-VTED */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTED"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTED').is(":checked")) {
            markerWing23.addTo(map);
            imageOverlayWing1.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTED').is(":not(:checked)")) {
            map.removeLayer(markerWing23);
            map.removeLayer(imageOverlayWing1);
        }
    });

    /* Map-Control-Radar-Wing-VTMI */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTMI"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTMI').is(":checked")) {
            markerWing4.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTMI').is(":not(:checked)")) {
            map.removeLayer(markerWing4);
        }
    });

    /* Map-Control-Radar-Wing-VTMK */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTMK"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTMK').is(":checked")) {
            markerWingSS.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTMK').is(":not(:checked)")) {
            map.removeLayer(markerWingSS);
        }
    });

    /* Map-Control-Radar-Wing-VTDB */
    $('input[type="checkbox"][id="Map-Control-Radar-Wing-VTDB"]').click(function () {
        if ($('#Map-Control-Radar-Wing-VTDB').is(":checked")) {
            markerWing7.addTo(map);
        }
        else if ($('#Map-Control-Radar-Wing-VTDB').is(":not(:checked)")) {
            map.removeLayer(markerWing7);
        }
    });
});