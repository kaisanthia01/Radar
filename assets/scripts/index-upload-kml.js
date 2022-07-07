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
    AjaxStop = $.ajax({
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
            if (resp != 'err') {
                $('#FormUploadKML')[0].reset();
                $('.block:last').before('' +
                    '<div class="form-check">' +
                    '<input class="form-check-input" type="checkbox" value="' + resp + '" id="' + resp + '" checked>' +
                    '<label class="form-check-label" for="' + resp + '">&nbsp;' + resp + '</label>' +
                    '<span class="badge rounded-pill bg-danger m-1" style="position: absolute; right: 0px;" name="btn-' + resp + '">ลบ</span>' +
                    '</div>' +
                    '');
            } else {
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
    var allowedTypes = ['application/vnd.google-earth.kml+xml', 'application/vnd.google-earth.kmz'];
    var file = this.files[0];
    var fileType = file.type;
    if (!allowedTypes.includes(fileType)) {
        $("#formUploadFileKML").val('');
        Swal.fire({
            title: "Error Upload File",
            text: "ไฟล์นามสกุล KML, KMZ เท่านั้น",
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

function ProgressBarKmlCancel() {
    $.unblockUI();
    AjaxStop.abort();
}

/*$('#FormUploadKML').ajaxForm({
    beforeSubmit: function () {
        
    },

    uploadProgress: function (event, position, total, percentComplete) {
        bar.width(percentComplete + '%');
        bar.html('Uploading...' + percentComplete + '%');
    },

    success: function () {
        bar.width('100%');
        bar.html('Uploading...100%');
    },

    complete: function (xhr) {
        if (xhr.responseText) {
            document.getElementById("kml-map-list").innerHTML = '<i class="fa-solid fa-layer-group"></i>' + xhr.responseText;

        }
    }
});*/