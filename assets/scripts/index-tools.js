$(document).ready(function () {
    /* Map-Control-Tools-Title */
    $('input[type="checkbox"][id="Map-Control-Tools-Title"]').click(function () {
        if ($('#Map-Control-Tools-Title').is(":checked")) {
            $('#Map-Title').removeClass("d-none");
        }
        else if ($('#Map-Control-Tools-Title').is(":not(:checked)")) {
            $('#Map-Title').addClass("d-none");
        }
    });

    /* Map-Control-Tools-Rain-Rate */
    $('input[type="checkbox"][id="Map-Control-Tools-Rain-Rate"]').click(function () {
        if ($('#Map-Control-Tools-Rain-Rate').is(":checked")) {
            $('#Map-Control-Bottom-Left').removeClass("d-none");
        }
        else if ($('#Map-Control-Tools-Rain-Rate').is(":not(:checked)")) {
            $('#Map-Control-Bottom-Left').addClass("d-none");
        }
    });

    /* Map-Control-Top-Right-Button-Close */
    $('p[id="Map-Control-Top-Right-Button-Close"]').click(function () {
        $('#accordionStation').toggle("slow", function () {
            $('p[id="Map-Control-Top-Right-Button-Close"]').text($('p[id="Map-Control-Top-Right-Button-Close"]').text() == 'ปิด' ? 'เปิด' : 'ปิด');
            $("#Map-Control-Top-Right").width($('#Map-Control-Top-Right').width() == 350 ? 75 : 350);
        });
    });
});