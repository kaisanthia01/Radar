var i, statusLoading;
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        $.blockUI({
            message: '<div class="p-1"> ' +
                '<div class="progress mb-2">' +
                '<div class="progress-bar bg-warning p-1 progress-bar-animated progress-bar-striped text-dark" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="PageLoadingProgressBar">Loading...!</div>' +
                '</div>' +
                '</div> ',
            css: {
                width: '275px',
                border: 'none',
                borderRadius: '25px',
                cursor: 'default',
                background: 'none'
            }
        });
        /*var all = document.getElementsByTagName("*");
        /*for (var i = 0; i < all.length; i++) {
            console.log('loading is ' + i++);
        }*/

        i = 0;
        statusLoading = setInterval(() => {
            $("#PageLoadingProgressBar").width(i + '%');
            $("#PageLoadingProgressBar").html('Loading...' + i + '%');
            console.log('loading is ' + i++);
        }, 1000);
    } else if (event.target.readyState === 'complete') {
        clearInterval(statusLoading);
        $("#PageLoadingProgressBar").width('100%');
        $("#PageLoadingProgressBar").html('Loading...100%');
        $.unblockUI();
        //var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        //console.log('Page load time is ' + loadTime);
    }
});