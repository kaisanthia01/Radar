$(document).ready(function () {
    $("#Map-Control-Fight-Plan-Date-TakeOff").datepicker({
        format: "dd-mm-yyyy",
        Default: true
    });

    $("#Map-Control-Fight-Plan-Button-Submit").click(function () {
        // add polyline to map
        latlngs = [latlongWing1, latlongWing41];
        polyline = L.polyline(latlngs, { "weight": 2, "color": "#198754", });

        polyline.addTo(map);
        markerWing1.addTo(map);
        markerWing41.addTo(map);

        // Fetch form to apply custom Bootstrap validation
        /*var form = $("#Map-Control-Fight-Plan-Form");
        if (form[0].checkValidity() === false) {
            //ถ้า false ไม่บันทึกข้อมูล - Add clase ตรวจสอบข้อมูล
            form.addClass("was-validated");
            Swal.fire({
                icon: 'warning',
                title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                showDenyButton: true,
                denyButtonText: 'Close',
                showConfirmButton: false,
                showCancelButton: false,
            });
        } else {
            var txtTakeOff = $("#Map-Control-Fight-Plan-TakeOff").val();
            var txtLanding = $("#Map-Control-Fight-Plan-Landing").val();
            var txtDateTakeOff = $("#Map-Control-Fight-Plan-Date-TakeOff").val();
            var txtTimeTakeOff = $("#Map-Control-Fight-Plan-Time-TakeOff").val();
            var txtTimeHH = $("#Map-Control-Fight-Plan-Time-HH").val();
            var txtTimeMM = $("#Map-Control-Fight-Plan-Time-MM").val();
            var txtLevelFeet = $("#Map-Control-Fight-Plan-Level-Feet").val();
            var txtReserveAirport = $("#Map-Control-Fight-Plan-Reserve-Airport").val();

            Swal.fire({
                icon: 'success',
                title: 'Login Failed',
                text: 'Usernames หรือ Password ไม่ถูกต้อง',
                showDenyButton: true,
                denyButtonText: 'Close',
                showConfirmButton: false,
                showCancelButton: false,
            });
        }*/
    });

    $("#Map-Control-Fight-Plan-Button-Close").click(function () {
        $("#Map-Control-Fight-Plan-TakeOff").val("");
        $("#Map-Control-Fight-Plan-Landing").val("");
        $("#Map-Control-Fight-Plan-Date-TakeOff").val("");
        $("#Map-Control-Fight-Plan-Time-TakeOff").val("");
        $("#Map-Control-Fight-Plan-Time-HH").val("");
        $("#Map-Control-Fight-Plan-Time-MM").val("");
        $("#Map-Control-Fight-Plan-Level-Feet").val("");
        $("#Map-Control-Fight-Plan-Reserve-Airport").val("");

        map.removeLayer(polyline);
        map.removeLayer(markerWing41);
        map.removeLayer(markerWing1);
    });
});