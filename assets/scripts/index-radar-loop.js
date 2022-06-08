$(document).ready(function () {
    var HH = 0,
        MM = 0,
        txtHH, txtMM, intervalId;
    $("#btn-play-paused").click(function () {
        if ($('#btn-play-paused').val() == 'Play') {
            $('#btn-play-paused').val('Stop');
            intervalId = setInterval(RadarLoop, 1000);
        } else {
            $('#btn-play-paused').val('Play');
            window.clearInterval(intervalId);
            MM = 0;
            HH = 0;
            txtHH = '';
            txtMM = '';
        }
    });

    function RadarLoop() {
        if (HH < 10) {
            txtHH = '0' + HH;
        } else if (HH == 24) {
            txtHH = '00';
        } else {
            txtHH = HH;
        }

        if (MM == 0) {
            txtMM = '00';
        } else if (MM < 10) {
            txtMM = '0' + MM;
        } else if (MM == 60) {
            txtMM = '00';
            MM = 0;
            HH++;

            if (HH < 10) {
                txtHH = '0' + HH;
            } else if (HH == 24) {
                txtHH = '00';
            } else {
                txtHH = HH;
            }

        } else {
            txtMM = MM;
        }

        map.removeLayer(imageOverlayWing4);
        radarUrlWing4 = '/assets/images/radar/wing4/ppi/wing4_PPI_240_20220608-' + txtHH + txtMM + '.png';
        imageOverlayWing4 = L.imageOverlay(radarUrlWing4, latLngBoundsWing4, {
            opacity: 1,
            interactive: false
        });
        imageOverlayWing4.addTo(map);

        MM = MM + 15;
        $('#txt-radar-time').text(txtHH + ':' + txtMM);
        console.log(txtHH + txtMM + ' | ' + radarUrlWing4);
    }
});