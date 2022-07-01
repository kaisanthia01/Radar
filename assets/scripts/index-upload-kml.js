$('#Map-Control-Center-Left-Sidebar-Menu-Layer-Upload-KML').on('click', function () {
    var bar = $('#progress-bar-kml');
    var percentVal = 0;
    var Interval = setInterval(function () {
        bar.width((percentVal / 4) + '%');
        bar.html('Uploading...' + percentVal + '%');
        percentVal++;
    }, 500);
    if (percentVal == 100) {
        $.unblockUI();
        clearInterval(Interval);

    }


    $('#FormUploadKML').ajaxForm({
        beforeSubmit: function () {
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
    });
});

var test = 0;
$('.add').click(function () {
    $('.block:last').before('' +
        '<div class="alert alert-warning alert-dismissible fade show p-2" role="alert">' +
        '<span class="kml-map-list">' + test + '</span>' +
        '<button type="button" class="btn-close remove btn-sm" data-bs-dismiss="alert" aria-label="Close" id="' + test + '"></button>' +
        '</div>' +
        '');
});

$('button').on('click', function () {
    //$(this).parent().remove();
    alert(this.id);
});

function ProgressBarKmlCancel() {
    $.unblockUI();
    clearInterval(Interval);
    alert('Close');
}