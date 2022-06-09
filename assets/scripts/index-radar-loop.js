$(document).ready(function () {
    var HH = 0,
        MM = 0,
        MaxLoopHH, MaxLoopMM, newmonth, newday,
        txtHH, txtMM, intervalId;
    $("#btn-play-paused").click(function () {
        if ($('#btn-play-paused').val() == 'Play') {
            $('#btn-play-paused').val('Stop');
            HH = new Date().getHours() - 10;
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
        /* ตั้งค่าห้วงชั่วโมงเวลาย้อนหลังถึงปัจจุบัน */
        if (HH < 0) {
            HH = HH - 24;

            newday = date.getDate() - 1;
            if (newday == 31) {
                newmonth = date.getMonth();
            }
            realdate = year + '' + newmonth + '' + newday;
        }

        if (HH < 10) {
            txtHH = '0' + HH;
        } else if (HH == 24) {
            txtHH = '00';
        } else {
            txtHH = HH;
        }
        /* -------------------------------- */

        /* ตรวจสอบห้วงชั่วโมงต้องไม่เกินเวลาปัจจุบัน */
        if (HH >= hour) {
            txtHH = hour;
        }
        /* -------------------------------- */

        /* ตั้งค่าห้วงชั่วโมงเวลาย้อนหลังถึงปัจจุบัน */
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
        /* -------------------------------- */

        /* ตรวจสอบห้วงนาทีต้องไม่เกินเวลาปัจจุบัน */
        if (MM > minute) {
            if (MM >= 0 && MM < 15) {
                txtMM = '00';
            } else if (MM >= 15 && MM < 30) {
                txtMM = '15';
            } else if (MM >= 30 && MM < 45) {
                txtMM = '30';
            } else {
                txtMM = '45';
            }
        }
        /* -------------------------------- */

        /* map.removeLayer(imageOverlayWing4);
         radarUrlWing4 = '/assets/images/radar/wing4/ppi/wing4_ppi_' + realdate + '-' + txtHH + txtMM + '.png';
         imageOverlayWing4 = L.imageOverlay(radarUrlWing4, latLngBoundsWing4, {
             opacity: 1,
             interactive: false
         });
         imageOverlayWing4.addTo(map);*/

        radarUrlWing4 = '/assets/images/radar/wing4/ppi/wing4_ppi_' + realdate + '-' + txtHH + txtMM + '.png';
        $('#txt-radar-time').text('ช่วงเวลา ' + txtdate + ' | ' + txtHH + ':' + txtMM + ' UTZ');

        MM = MM + 15;
        //console.log(txtHH + txtMM + ' | ' + radarUrlWing4 + ' | ' + realtime);
        //console.log(radarUrlWing4 + ' | ' + realtime);
        console.log(radarUrlWing4 + ' | ' + realtime);
    }
});