$('#Map-Control-Center-Left-Sidebar-Menu-Layer-Upload-KML').on('click', function (e) {
    $.blockUI({
        message: '<div class="p-1"> ' +
            '<div class="progress mb-2">' +
            '<div class="progress-bar bg-success p-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress-bar-kml">Uploading...0%</div>' +
            '</div>' +
            '<button type="button" class="btn btn-danger btn-sm" onclick="ProgressBarKmlCancel();">Cancel</button>' +
            '</div> ',
        css: {
            width: '275px',
            border: 'none',
            borderRadius: '25px',
            cursor: 'default',
            background: 'none'
        }
    });

    e.preventDefault();
    AjaxStopKML = $.ajax({
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = parseInt(((evt.loaded / evt.total) * 100));
                    $("#progress-bar-kml").width(percentComplete + '%');
                    $("#progress-bar-kml").html(percentComplete + '%');
                }
            }, false);
            return xhr;
        },
        type: 'POST',
        url: 'assets/scripts/kml.php',
        data: new FormData($("#FormUploadKML")[0]),
        contentType: false,
        cache: false,
        processData: false,
        async: false,
        beforeSend: function () {
            $("#progress-bar-kml").width('0%');
            $("#progress-bar-kml").html('0%');
        },
        error: function () {
            Swal.fire({
                title: "Error Upload File",
                text: "ขั้นตอนอัพโหลดไฟล์ KML ผิดพลาด",
                icon: "error",
                cancelButtonColor: '#d33',
                cancelButtonText: 'Close',
                showCancelButton: true,
                showConfirmButton: false
            });
        },
        success: function (resp) {
            respKML = JSON.parse(resp);
            if (respKML.result == 'ok') {
                if (KML_Upload_Slot.find((check) => check == respKML.filename)) {
                    $("#progress-bar-kml").width('100%');
                    $("#progress-bar-kml").html('100%');
                    $('#FormUploadKML')[0].reset();

                } else {
                    var length = KML_Upload_Slot.length;
                    var text = respKML.filename;
                    text = text.replace(".kml", "");
                    KML_Upload_Slot.push(respKML.filename);
                    $("#progress-bar-kml").width('100%');
                    $("#progress-bar-kml").html('100%');
                    $('#FormUploadKML')[0].reset();
                    $('#list').append(
                        '<li class="list-group-item d-flex justify-content-between align-items-center p-1" id="li-' + length + '">' +
                        '<input class="form-check-input input-btn-kml" type="checkbox" value="' + text + '" id="check-' + length + '" name="input-btn-kml" checked>' +
                        '<label class="form-check-label" for="' + text + '">&nbsp;' + respKML.filename + '</label>' +
                        '<span class="badge rounded-pill bg-danger m-1 span-btn-kml" id="' + length + '">ลบ</span>' +
                        '</li>'
                    );

                    fetch('assets/kml/upload/' + respKML.filename).then(res => res.text()).then(kmltext => {
                        // Create new kml overlay
                        const parser = new DOMParser();
                        const kml = parser.parseFromString(kmltext, 'text/xml');
                        var fileNameMap = new L.KML(kml);
                        var arMap = fileNameMap.addTo(map);
                        //KML_Upload_Map.push(kml);
                        KML_Upload_Map.push(arMap);
                        KML_Upload_Map[length].addTo(map);
                        //console.log(KML_Upload_Map[length].addTo(map));
                    });
                }

                Swal.fire({
                    title: "Success Upload File",
                    text: "อัพโหลดไฟล์ KML เรียบร้อย",
                    icon: "success",
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Close',
                    showCancelButton: true,
                    showConfirmButton: false
                });
            } else {
                $('#FormUploadKML')[0].reset();
                Swal.fire({
                    title: "Error Upload File",
                    text: "ไม่สามารถอัพโหลดไฟล์ KML ได้",
                    icon: "error",
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Close',
                    showCancelButton: true,
                    showConfirmButton: false
                });
            }
        }
    });

    $.unblockUI();
});


/*
 * Upload File KML
 */
$("#formUploadFileKML").change(function () {
    var allowedTypes = ['application/vnd.google-earth.kml+xml']; // 'application/vnd.google-earth.kml+xml', 'application/vnd.google-earth.kmz'
    var file = this.files[0];
    var fileType = file.type;
    if (!allowedTypes.includes(fileType)) {
        $("#formUploadFileKML").val('');
        Swal.fire({
            title: "Error Upload File",
            text: "ไฟล์นามสกุล KML เท่านั้น",
            icon: "error",
            cancelButtonColor: '#d33',
            cancelButtonText: 'Close',
            showCancelButton: true,
            showConfirmButton: false
        });
        return false;
    }
});
/*
 * ------------------------------------------------------------------------------- *
 */


/*
 * Cancel Upload File KML
 */
function ProgressBarKmlCancel() {
    $.unblockUI();
    AjaxStopKML.abort();
}
/*
 * ------------------------------------------------------------------------------- *
 */

/*
 * Delete Upload File KML
 */
$('#list').on('click', '.span-btn-kml', function () {
    var idMap = this.id;
    var li = '#li-' + idMap;

    // Delete KML
    $.post("assets/scripts/kml_delete.php", {
            filename: KML_Upload_Slot[idMap]
        },
        function (data) {
            resp = JSON.parse(data);
            if (resp.result == 'ok') {
                $(li).remove();
                KML_Upload_Map[idMap].remove();

                const index = KML_Upload_Map.indexOf(KML_Upload_Map[idMap]);
                if (index > -1) { // only splice array when item is found
                    KML_Upload_Map.splice(index, 1); // 2nd parameter means remove one item only
                }

                const index1 = KML_Upload_Slot.indexOf(KML_Upload_Slot[idMap]);
                if (index > -1) { // only splice array when item is found
                    KML_Upload_Slot.splice(index1, 1); // 2nd parameter means remove one item only
                }

                //console.log(KML_Upload_Map);
                //console.log(KML_Upload_Slot);

                Swal.fire({
                    title: "Success Delete KML",
                    text: "ลบไฟล์ KML: " + resp.filename,
                    icon: "success",
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Close',
                    showCancelButton: true,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    title: "Error Delete KML",
                    text: "ไม่สามารถลบไฟล์ KML: " + resp.filename,
                    icon: "error",
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Close',
                    showCancelButton: true,
                    showConfirmButton: false
                });
            }
        });
});
/*
 * ------------------------------------------------------------------------------- *
 */

/*
 * Hidden Upload File KML
 */
$('#list').on('click', '.input-btn-kml', function () {
    var idMap = this.id;
    var txtID = idMap.replace("check-", "");
    if ($('.input-btn-kml').is(":checked")) {
        KML_Upload_Map[txtID].addTo(map);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add Layer KML: ' + this.value,
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    } else if ($('.input-btn-kml').is(":not(:checked)")) {
        KML_Upload_Map[txtID].remove();
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Remove Layer KML: ' + this.value,
            showConfirmButton: false,
            padding: '7px',
            timer: 1500
        });
    }
});
/*
 * ------------------------------------------------------------------------------- *
 */