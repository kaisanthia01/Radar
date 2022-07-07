function getMetarTextRTAF(MetarTextRTAF) {
    let VTMD = 0,
        VTNI = 0,
        VTNC = 0,
        VTNP = 0,
        VTED = 0,
        VTEU = 0,
        VTEN = 0,
        VTEZ = 0,
        VTET = 0,
        VTMG = 0,
        VTMI = 0,
        VTML = 0,
        VTMM = 0,
        VTMK = 0,
        VTMW = 0,
        VTMU = 0,
        VTMP = 0,
        VTDB = 0,
        VTDS = 0,
        VTMH = 0,
        VTDT = 0;
    let HeaderMetarTextVTMD, BodyMetarTextVTMD, ContentMetarTextVTMD, ColorMetarTextVTMD,
        HeaderMetarTextVTNC, BodyMetarTextVTNC, ContentMetarTextVTNC, ColorMetarTextVTNC,
        HeaderMetarTextVTNP, BodyMetarTextVTNP, ContentMetarTextVTNP, ColorMetarTextVTNP,
        HeaderMetarTextVTED, BodyMetarTextVTED, ContentMetarTextVTED, ColorMetarTextVTED,
        HeaderMetarTextVTEU, BodyMetarTextVTEU, ContentMetarTextVTEU, ColorMetarTextVTEU,
        HeaderMetarTextVTEN, BodyMetarTextVTEN, ContentMetarTextVTEN, ColorMetarTextVTEN,
        HeaderMetarTextVTMI, BodyMetarTextVTMI, ContentMetarTextVTMI, ColorMetarTextVTMI,
        HeaderMetarTextVTML, BodyMetarTextVTML, ContentMetarTextVTML, ColorMetarTextVTML,
        HeaderMetarTextVTMK, BodyMetarTextVTMK, ContentMetarTextVTMK, ColorMetarTextVTMK,
        HeaderMetarTextVTMW, BodyMetarTextVTMW, ContentMetarTextVTMW, ColorMetarTextVTMW,
        HeaderMetarTextVTMU, BodyMetarTextVTMU, ContentMetarTextVTMU, ColorMetarTextVTMU,
        HeaderMetarTextVTMP, BodyMetarTextVTMP, ContentMetarTextVTMP, ColorMetarTextVTMP,
        HeaderMetarTextVTDB, BodyMetarTextVTDB, ContentMetarTextVTDB, ColorMetarTextVTDB,
        HeaderMetarTextVTDS, BodyMetarTextVTDS, ContentMetarTextVTDS, ColorMetarTextVTDS,
        HeaderMetarTextVTMH, BodyMetarTextVTMH, ContentMetarTextVTMH, ColorMetarTextVTMH,
        HeaderMetarTextVTDT, BodyMetarTextVTDT, ContentMetarTextVTDT, ColorMetarTextVTDT;

    $.each(MetarTextRTAF.CURRENT_WEATHER, function (index, value) {
        if (value.STATION_CODE != '-') {
            //console.log(value.STATION_NAME + ' ' + value.NEWS_TIME + '\n' + value.TAF_TEXT);
            if (value.STATION_CODE == "VTMD") {
                HeaderMetarTextVTMD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMD > 0) {
                    BodyMetarTextVTMD += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMD = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMD++;
                }
                ContentMetarTextVTMD = HeaderMetarTextVTMD + BodyMetarTextVTMD;
                ColorMetarTextVTMD = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
            } else if (value.STATION_CODE == "VTNC") {
                HeaderMetarTextVTNC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTNC > 0) {
                    BodyMetarTextVTNC += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTNC = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTNC++;
                }
                ContentMetarTextVTNC = HeaderMetarTextVTNC + BodyMetarTextVTNC;
                ColorMetarTextVTNC = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTNP") {
                HeaderMetarTextVTNP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTNP > 0) {
                    BodyMetarTextVTNP += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTNP = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTNP++;
                }
                ContentMetarTextVTNP = HeaderMetarTextVTNP + BodyMetarTextVTNP;
                ColorMetarTextVTNP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTED") {
                HeaderMetarTextVTED = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTED > 0) {
                    BodyMetarTextVTED += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTED = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTED++;
                }
                ContentMetarTextVTED = HeaderMetarTextVTED + BodyMetarTextVTED;
                ColorMetarTextVTED = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTEU") {
                HeaderMetarTextVTEU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTEU > 0) {
                    BodyMetarTextVTEU += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTEU = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTEU++;
                }
                ContentMetarTextVTEU = HeaderMetarTextVTEU + BodyMetarTextVTEU;
                ColorMetarTextVTEU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTEN") {
                HeaderMetarTextVTEN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTEN > 0) {
                    BodyMetarTextVTEN += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTEN = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTEN++;
                }
                ContentMetarTextVTEN = HeaderMetarTextVTEN + BodyMetarTextVTEN;
                ColorMetarTextVTEN = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMI") {
                HeaderMetarTextVTMI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMI > 0) {
                    BodyMetarTextVTMI += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMI = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMI++;
                }
                ContentMetarTextVTMI = HeaderMetarTextVTMI + BodyMetarTextVTMI;
                ColorMetarTextVTMI = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTML") {
                HeaderMetarTextVTML = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTML > 0) {
                    BodyMetarTextVTML += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTML = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTML++;
                }
                ContentMetarTextVTML = HeaderMetarTextVTML + BodyMetarTextVTML;
                ColorMetarTextVTML = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMK") {
                HeaderMetarTextVTMK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMK > 0) {
                    BodyMetarTextVTMK += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMK = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMK++;
                }
                ContentMetarTextVTMK = HeaderMetarTextVTMK + BodyMetarTextVTMK;
                ColorMetarTextVTMK = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMW") {
                HeaderMetarTextVTMW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMW > 0) {
                    BodyMetarTextVTMW += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMW = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMW++;
                }
                ContentMetarTextVTMW = HeaderMetarTextVTMW + BodyMetarTextVTMW;
                ColorMetarTextVTMW = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMU") {
                HeaderMetarTextVTMU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMU > 0) {
                    BodyMetarTextVTMU += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMU = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMU++;
                }
                ContentMetarTextVTMU = HeaderMetarTextVTMU + BodyMetarTextVTMU;
                ColorMetarTextVTMU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMP") {
                HeaderMetarTextVTMP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMP > 0) {
                    BodyMetarTextVTMP += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMP = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMP++;
                }
                ContentMetarTextVTMP = HeaderMetarTextVTMP + BodyMetarTextVTMP;
                ColorMetarTextVTMP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDB") {
                HeaderMetarTextVTDB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDB > 0) {
                    BodyMetarTextVTDB += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDB = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDB++;
                }
                ContentMetarTextVTDB = HeaderMetarTextVTDB + BodyMetarTextVTDB;
                ColorMetarTextVTDB = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDS") {
                HeaderMetarTextVTDS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDS > 0) {
                    BodyMetarTextVTDS += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDS = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDS++;
                }
                ContentMetarTextVTDS = HeaderMetarTextVTDS + BodyMetarTextVTDS;
                ColorMetarTextVTDS = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMH") {
                HeaderMetarTextVTMH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMH > 0) {
                    BodyMetarTextVTMH += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVMDH = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMH++;
                }
                ContentMetarTextVTMH = HeaderMetarTextVTMH + BodyMetarTextVTMH;
                ColorMetarTextVTMH = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDT") {
                HeaderMetarTextVTDT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDT > 0) {
                    BodyMetarTextVTDT += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDT = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDT++;
                }
                ContentMetarTextVTDT = HeaderMetarTextVTDT + BodyMetarTextVTDT;
                ColorMetarTextVTDT = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else {

            }
        }
    });

    //SetTooltip VTMD
    iconVTMD = L.icon({
        iconUrl: ColorMetarTextVTMD,
        iconSize: [15, 15]
    });
    markerVTMD = L.marker([13.910211, 100.610533], {
        icon: iconVTMD
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMD + '</div></div>').addTo(map);

    //SetTooltip VTNC
    iconVTNC = L.icon({
        iconUrl: ColorMetarTextVTNC,
        iconSize: [15, 15]
    });
    markerVTNC = L.marker([18.7734933, 98.9653736], {
        icon: iconVTNC
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNC + '</div></div>').addTo(map);

    //SetTooltip VTNP
    iconVTNP = L.icon({
        iconUrl: ColorMetarTextVTNP,
        iconSize: [15, 15]
    });
    markerVTNP = L.marker([16.7838369, 100.2790302], {
        icon: iconVTNP
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNP + '</div></div>').addTo(map);

    //SetTooltip VTED
    iconVTED = L.icon({
        iconUrl: ColorMetarTextVTED,
        iconSize: [15, 15]
    });
    markerVTED = L.marker([17.3802148, 102.7947298], {
        icon: iconVTED
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTED + '</div></div>').addTo(map);

    //SetTooltip VTEU
    iconVTEU = L.icon({
        iconUrl: ColorMetarTextVTEU,
        iconSize: [15, 15]
    });
    markerVTEU = L.marker([15.2480524, 104.8604472], {
        icon: iconVTEU
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEU + '</div></div>').addTo(map);

    //SetTooltip VTEN
    iconVTEN = L.icon({
        iconUrl: ColorMetarTextVTEN,
        iconSize: [15, 15]
    });
    markerVTEN = L.marker([14.9343853, 102.0810221], {
        icon: iconVTEN
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEN + '</div></div>').addTo(map);

    //SetTooltip VTMI
    iconVTMI = L.icon({
        iconUrl: ColorMetarTextVTMI,
        iconSize: [15, 15]
    });
    markerVTMI = L.marker([15.277034, 100.291933], {
        icon: iconVTMI
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMI + '</div></div>').addTo(map);

    //SetTooltip VTML
    iconVTML = L.icon({
        iconUrl: ColorMetarTextVTML,
        iconSize: [15, 15]
    });
    markerVTML = L.marker([14.8714901, 100.6479151], {
        icon: iconVTML
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTML + '</div></div>').addTo(map);

    //SetTooltip VTMK
    iconVTMK = L.icon({
        iconUrl: ColorMetarTextVTMK,
        iconSize: [15, 15]
    });
    markerVTMK = L.marker([14.098889, 99.923629], {
        icon: iconVTMK
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMK + '</div></div>').addTo(map);

    //SetTooltip VTMW
    iconVTMW = L.icon({
        iconUrl: ColorMetarTextVTMW,
        iconSize: [15, 15]
    });
    markerVTMW = L.marker([13.910211, 100.610533], {
        icon: iconVTMW
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMW + '</div></div>').addTo(map);

    //SetTooltip VTMU
    //iconVTMU = L.icon({
    //    iconUrl: ColorMetarTextVTMU,
    //    iconSize: [15, 15]
    //});
    //markerVTMU = L.marker([13.910211, 100.610533], {
    //    icon: iconVTMU
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMU + '</div></div>').addTo(map);

    //SetTooltip VTMP
    iconVTMP = L.icon({
        iconUrl: ColorMetarTextVTMP,
        iconSize: [15, 15]
    });
    markerVTMP = L.marker([11.7866226, 99.8077392], {
        icon: iconVTMP
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMP + '</div></div>').addTo(map);

    //SetTooltip VTDB
    iconVTDB = L.icon({
        iconUrl: ColorMetarTextVTDB,
        iconSize: [15, 15]
    });
    markerVTDB = L.marker([9.1358421, 99.1366254], {
        icon: iconVTDB
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDB + '</div></div>').addTo(map);

    //SetTooltip VTDS
    //iconVTDS = L.icon({
    //    iconUrl: ColorMetarTextVTDS,
    //    iconSize: [15, 15]
    //});
    //markerVTDS = L.marker([13.910211, 100.610533], {
    //    icon: iconVTDS
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDS + '</div></div>').addTo(map);
    //
    ////SetTooltip VTMH
    //iconVTMH = L.icon({
    //    iconUrl: ColorMetarTextVTMH,
    //    iconSize: [15, 15]
    //});
    //markerVTMH = L.marker([13.910211, 100.610533], {
    //    icon: iconVTMH
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMH + '</div></div>').addTo(map);
    //
    ////SetTooltip VTDT
    //iconVTDT = L.icon({
    //    iconUrl: ColorMetarTextVTDT,
    //    iconSize: [15, 15]
    //});
    //markerVTDT = L.marker([13.910211, 100.610533], {
    //    icon: iconVTDT
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDT + '</div></div>').addTo(map);
};

function getMetarTafTextRTAF(MetarTextRTAF, TafTextRTAF) {
    let VTMD = 0,
        VTNI = 0,
        VTNC = 0,
        VTNP = 0,
        VTED = 0,
        VTEU = 0,
        VTEN = 0,
        VTEZ = 0,
        VTET = 0,
        VTMG = 0,
        VTMI = 0,
        VTML = 0,
        VTMM = 0,
        VTMK = 0,
        VTMW = 0,
        VTMU = 0,
        VTMP = 0,
        VTDB = 0,
        VTDS = 0,
        VTMH = 0,
        VTDT = 0;
    let HeaderMetarTextVTMD, BodyMetarTextVTMD, ContentMetarTextVTMD, ColorMetarTextVTMD,
        HeaderMetarTextVTNC, BodyMetarTextVTNC, ContentMetarTextVTNC, ColorMetarTextVTNC,
        HeaderMetarTextVTNP, BodyMetarTextVTNP, ContentMetarTextVTNP, ColorMetarTextVTNP,
        HeaderMetarTextVTED, BodyMetarTextVTED, ContentMetarTextVTED, ColorMetarTextVTED,
        HeaderMetarTextVTEU, BodyMetarTextVTEU, ContentMetarTextVTEU, ColorMetarTextVTEU,
        HeaderMetarTextVTEN, BodyMetarTextVTEN, ContentMetarTextVTEN, ColorMetarTextVTEN,
        HeaderMetarTextVTMI, BodyMetarTextVTMI, ContentMetarTextVTMI, ColorMetarTextVTMI,
        HeaderMetarTextVTML, BodyMetarTextVTML, ContentMetarTextVTML, ColorMetarTextVTML,
        HeaderMetarTextVTMK, BodyMetarTextVTMK, ContentMetarTextVTMK, ColorMetarTextVTMK,
        HeaderMetarTextVTMW, BodyMetarTextVTMW, ContentMetarTextVTMW, ColorMetarTextVTMW,
        HeaderMetarTextVTMU, BodyMetarTextVTMU, ContentMetarTextVTMU, ColorMetarTextVTMU,
        HeaderMetarTextVTMP, BodyMetarTextVTMP, ContentMetarTextVTMP, ColorMetarTextVTMP,
        HeaderMetarTextVTDB, BodyMetarTextVTDB, ContentMetarTextVTDB, ColorMetarTextVTDB,
        HeaderMetarTextVTDS, BodyMetarTextVTDS, ContentMetarTextVTDS, ColorMetarTextVTDS,
        HeaderMetarTextVTMH, BodyMetarTextVTMH, ContentMetarTextVTMH, ColorMetarTextVTMH,
        HeaderMetarTextVTDT, BodyMetarTextVTDT, ContentMetarTextVTDT, ColorMetarTextVTDT;

    $.each(MetarTextRTAF.CURRENT_WEATHER, function (index, value) {
        if (value.STATION_CODE != '-') {
            //console.log(value.STATION_NAME + ' ' + value.NEWS_TIME + '\n' + value.TAF_TEXT);
            if (value.STATION_CODE == "VTMD") {
                HeaderMetarTextVTMD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMD > 0) {
                    BodyMetarTextVTMD += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMD = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMD++;
                }
                ContentMetarTextVTMD = HeaderMetarTextVTMD + BodyMetarTextVTMD;
                ColorMetarTextVTMD = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
            } else if (value.STATION_CODE == "VTNC") {
                HeaderMetarTextVTNC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTNC > 0) {
                    BodyMetarTextVTNC += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTNC = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTNC++;
                }
                ContentMetarTextVTNC = HeaderMetarTextVTNC + BodyMetarTextVTNC;
                ColorMetarTextVTNC = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTNP") {
                HeaderMetarTextVTNP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTNP > 0) {
                    BodyMetarTextVTNP += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTNP = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTNP++;
                }
                ContentMetarTextVTNP = HeaderMetarTextVTNP + BodyMetarTextVTNP;
                ColorMetarTextVTNP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTED") {
                HeaderMetarTextVTED = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTED > 0) {
                    BodyMetarTextVTED += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTED = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTED++;
                }
                ContentMetarTextVTED = HeaderMetarTextVTED + BodyMetarTextVTED;
                ColorMetarTextVTED = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTEU") {
                HeaderMetarTextVTEU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTEU > 0) {
                    BodyMetarTextVTEU += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTEU = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTEU++;
                }
                ContentMetarTextVTEU = HeaderMetarTextVTEU + BodyMetarTextVTEU;
                ColorMetarTextVTEU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTEN") {
                HeaderMetarTextVTEN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTEN > 0) {
                    BodyMetarTextVTEN += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTEN = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTEN++;
                }
                ContentMetarTextVTEN = HeaderMetarTextVTEN + BodyMetarTextVTEN;
                ColorMetarTextVTEN = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMI") {
                HeaderMetarTextVTMI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMI > 0) {
                    BodyMetarTextVTMI += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMI = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMI++;
                }
                ContentMetarTextVTMI = HeaderMetarTextVTMI + BodyMetarTextVTMI;
                ColorMetarTextVTMI = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTML") {
                HeaderMetarTextVTML = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTML > 0) {
                    BodyMetarTextVTML += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTML = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTML++;
                }
                ContentMetarTextVTML = HeaderMetarTextVTML + BodyMetarTextVTML;
                ColorMetarTextVTML = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMK") {
                HeaderMetarTextVTMK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMK > 0) {
                    BodyMetarTextVTMK += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMK = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMK++;
                }
                ContentMetarTextVTMK = HeaderMetarTextVTMK + BodyMetarTextVTMK;
                ColorMetarTextVTMK = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMW") {
                HeaderMetarTextVTMW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMW > 0) {
                    BodyMetarTextVTMW += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMW = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMW++;
                }
                ContentMetarTextVTMW = HeaderMetarTextVTMW + BodyMetarTextVTMW;
                ColorMetarTextVTMW = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMU") {
                HeaderMetarTextVTMU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMU > 0) {
                    BodyMetarTextVTMU += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMU = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMU++;
                }
                ContentMetarTextVTMU = HeaderMetarTextVTMU + BodyMetarTextVTMU;
                ColorMetarTextVTMU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMP") {
                HeaderMetarTextVTMP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMP > 0) {
                    BodyMetarTextVTMP += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTMP = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMP++;
                }
                ContentMetarTextVTMP = HeaderMetarTextVTMP + BodyMetarTextVTMP;
                ColorMetarTextVTMP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDB") {
                HeaderMetarTextVTDB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDB > 0) {
                    BodyMetarTextVTDB += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDB = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDB++;
                }
                ContentMetarTextVTDB = HeaderMetarTextVTDB + BodyMetarTextVTDB;
                ColorMetarTextVTDB = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDS") {
                HeaderMetarTextVTDS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDS > 0) {
                    BodyMetarTextVTDS += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDS = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDS++;
                }
                ContentMetarTextVTDS = HeaderMetarTextVTDS + BodyMetarTextVTDS;
                ColorMetarTextVTDS = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTMH") {
                HeaderMetarTextVTMH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTMH > 0) {
                    BodyMetarTextVTMH += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVMDH = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTMH++;
                }
                ContentMetarTextVTMH = HeaderMetarTextVTMH + BodyMetarTextVTMH;
                ColorMetarTextVTMH = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else if (value.STATION_CODE == "VTDT") {
                HeaderMetarTextVTDT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                if (VTDT > 0) {
                    BodyMetarTextVTDT += '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                } else {
                    BodyMetarTextVTDT = '<p class="card-text mb-0"><small>- ' + value.NEWS_TYPE + ' ' + value.METAR + '</small></p>';
                    VTDT++;
                }
                ContentMetarTextVTDT = HeaderMetarTextVTDT + BodyMetarTextVTDT;
                ColorMetarTextVTDT = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';

            } else {

            }
        }
    });

    //SetTooltip VTMD
    iconVTMD = L.icon({
        iconUrl: ColorMetarTextVTMD,
        iconSize: [15, 15]
    });
    markerVTMD = L.marker([13.910211, 100.610533], {
        icon: iconVTMD
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMD + '</div></div>').addTo(map);

    //SetTooltip VTNC
    iconVTNC = L.icon({
        iconUrl: ColorMetarTextVTNC,
        iconSize: [15, 15]
    });
    markerVTNC = L.marker([18.7734933, 98.9653736], {
        icon: iconVTNC
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNC + '</div></div>').addTo(map);

    //SetTooltip VTNP
    iconVTNP = L.icon({
        iconUrl: ColorMetarTextVTNP,
        iconSize: [15, 15]
    });
    markerVTNP = L.marker([16.7838369, 100.2790302], {
        icon: iconVTNP
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNP + '</div></div>').addTo(map);

    //SetTooltip VTED
    iconVTED = L.icon({
        iconUrl: ColorMetarTextVTED,
        iconSize: [15, 15]
    });
    markerVTED = L.marker([17.3802148, 102.7947298], {
        icon: iconVTED
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTED + '</div></div>').addTo(map);

    //SetTooltip VTEU
    iconVTEU = L.icon({
        iconUrl: ColorMetarTextVTEU,
        iconSize: [15, 15]
    });
    markerVTEU = L.marker([15.2480524, 104.8604472], {
        icon: iconVTEU
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEU + '</div></div>').addTo(map);

    //SetTooltip VTEN
    iconVTEN = L.icon({
        iconUrl: ColorMetarTextVTEN,
        iconSize: [15, 15]
    });
    markerVTEN = L.marker([14.9343853, 102.0810221], {
        icon: iconVTEN
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEN + '</div></div>').addTo(map);

    //SetTooltip VTMI
    iconVTMI = L.icon({
        iconUrl: ColorMetarTextVTMI,
        iconSize: [15, 15]
    });
    markerVTMI = L.marker([15.277034, 100.291933], {
        icon: iconVTMI
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMI + '</div></div>').addTo(map);

    //SetTooltip VTML
    iconVTML = L.icon({
        iconUrl: ColorMetarTextVTML,
        iconSize: [15, 15]
    });
    markerVTML = L.marker([14.8714901, 100.6479151], {
        icon: iconVTML
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTML + '</div></div>').addTo(map);

    //SetTooltip VTMK
    iconVTMK = L.icon({
        iconUrl: ColorMetarTextVTMK,
        iconSize: [15, 15]
    });
    markerVTMK = L.marker([14.098889, 99.923629], {
        icon: iconVTMK
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMK + '</div></div>').addTo(map);

    //SetTooltip VTMW
    iconVTMW = L.icon({
        iconUrl: ColorMetarTextVTMW,
        iconSize: [15, 15]
    });
    markerVTMW = L.marker([13.910211, 100.610533], {
        icon: iconVTMW
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMW + '</div></div>').addTo(map);

    //SetTooltip VTMU
    //iconVTMU = L.icon({
    //    iconUrl: ColorMetarTextVTMU,
    //    iconSize: [15, 15]
    //});
    //markerVTMU = L.marker([13.910211, 100.610533], {
    //    icon: iconVTMU
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMU + '</div></div>').addTo(map);

    //SetTooltip VTMP
    iconVTMP = L.icon({
        iconUrl: ColorMetarTextVTMP,
        iconSize: [15, 15]
    });
    markerVTMP = L.marker([11.7866226, 99.8077392], {
        icon: iconVTMP
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMP + '</div></div>').addTo(map);

    //SetTooltip VTDB
    iconVTDB = L.icon({
        iconUrl: ColorMetarTextVTDB,
        iconSize: [15, 15]
    });
    markerVTDB = L.marker([9.1358421, 99.1366254], {
        icon: iconVTDB
    }).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDB + '</div></div>').addTo(map);

    //SetTooltip VTDS
    //iconVTDS = L.icon({
    //    iconUrl: ColorMetarTextVTDS,
    //    iconSize: [15, 15]
    //});
    //markerVTDS = L.marker([13.910211, 100.610533], {
    //    icon: iconVTDS
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDS + '</div></div>').addTo(map);
    //
    ////SetTooltip VTMH
    //iconVTMH = L.icon({
    //    iconUrl: ColorMetarTextVTMH,
    //    iconSize: [15, 15]
    //});
    //markerVTMH = L.marker([13.910211, 100.610533], {
    //    icon: iconVTMH
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMH + '</div></div>').addTo(map);
    //
    ////SetTooltip VTDT
    //iconVTDT = L.icon({
    //    iconUrl: ColorMetarTextVTDT,
    //    iconSize: [15, 15]
    //});
    //markerVTDT = L.marker([13.910211, 100.610533], {
    //    icon: iconVTDT
    //}).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDT + '</div></div>').addTo(map);
};

function getMetarSymbolRTAF(MetarSymbolRTAF) {
    $.each(MetarSymbolRTAF.CURRENT_WEATHER, function (index, value) {
        if (value.STATION_CODE != '-') {
            if (value.STATION_CODE == "VTNC") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTNC
                    iconVTNC = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTNC.setIcon(iconVTNC).unbindTooltip().addTo(map);
                } else {
                    iconVTNC = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTNC.setIcon(iconVTNC).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTNP") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTNP
                    iconVTNP = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTNP.setIcon(iconVTNP).unbindTooltip().addTo(map);
                } else {
                    iconVTNP = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTNP.setIcon(iconVTNP).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTED") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTED
                    iconVTED = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTED.setIcon(iconVTED).unbindTooltip().addTo(map);
                } else {
                    iconVTED = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTED.setIcon(iconVTED).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTEU") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTEU
                    iconVTEU = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTEU.setIcon(iconVTEU).unbindTooltip().addTo(map);
                } else {
                    iconVTEU = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTEU.setIcon(iconVTEU).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTEN") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTEN
                    iconVTEN = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTEN.setIcon(iconVTEN).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMD") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMD
                    iconVTMD = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMD.setIcon(iconVTMD).unbindTooltip().addTo(map);
                } else {
                    iconVTMD = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMD.setIcon(iconVTMD).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMI") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMI
                    iconVTMI = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMI.setIcon(iconVTMI).unbindTooltip().addTo(map);
                } else {
                    iconVTMI = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMI.setIcon(iconVTMI).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTML") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTML
                    iconVTML = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTML.setIcon(iconVTML).unbindTooltip().addTo(map);
                } else {
                    iconVTML = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTML.setIcon(iconVTML).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMW") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMW
                    iconVTMW = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMW.setIcon(iconVTMW).unbindTooltip().addTo(map);
                } else {
                    iconVTMW = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMW.setIcon(iconVTMW).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMU") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMU
                    iconVTMU = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMU.setIcon(iconVTMU).unbindTooltip().addTo(map);
                } else {
                    iconVTMU = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMU.setIcon(iconVTMU).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMP") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMP
                    iconVTMP = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMP.setIcon(iconVTMP).unbindTooltip().addTo(map);
                } else {
                    iconVTMP = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMP.setIcon(iconVTMP).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMK") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMK
                    iconVTMK = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMK.setIcon(iconVTMK).unbindTooltip().addTo(map);
                } else {
                    iconVTMK = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMK.setIcon(iconVTMK).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMH") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTMH
                    iconVTMH = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTMH.setIcon(iconVTMH).unbindTooltip().addTo(map);
                } else {
                    iconVTMH = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMH.setIcon(iconVTMH).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDB") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTDB
                    iconVTDB = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTDB.setIcon(iconVTDB).unbindTooltip().addTo(map);
                } else {
                    iconVTDB = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTDB.setIcon(iconVTDB).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDS") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTDS
                    iconVTDS = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTDS.setIcon(iconVTDS).unbindTooltip().addTo(map);
                } else {
                    iconVTDS = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTDS.setIcon(iconVTDS).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDT") {
                if (value.METAR != "NIL") {
                    //SetTooltip VTDT
                    iconVTDT = new L.metarIcon({
                        windDirection: value.WIND_DIRECTION,
                        windSpeed: value.WIND_SPEED,
                        temp: value.TEMP,
                        dewpoint: MetarDewpoint(value.METAR),
                        visibility: MetarVis(value.VISIBILITY),
                        cloud: MetarCloud(value.METAR),
                        pressure: MetarPressure(value.METAR),
                        weather: MetarWeather(value.METAR)
                    });
                    markerVTDT.setIcon(iconVTDT).unbindTooltip().addTo(map);
                } else {
                    iconVTDT = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTDT.setIcon(iconVTDT).unbindTooltip().addTo(map);
                }
            } else {

            }
        }
    });
};

function MetarVis(txtVis) {
    if (parseInt(txtVis) == 9999) {
        txtVis = 28;
    } else if (parseInt(txtVis) == 9000) {
        txtVis = 27;
    } else if (parseInt(txtVis) == 8000) {
        txtVis = 26;
    } else if (parseInt(txtVis) == 6000) {
        txtVis = 25;
    } else if (parseInt(txtVis) == 4800) {
        txtVis = 24;
    } else if (parseInt(txtVis) == 4400) {
        txtVis = 23;
    } else if (parseInt(txtVis) == 4000) {
        txtVis = 22;
    } else if (parseInt(txtVis) == 3600) {
        txtVis = 21;
    } else if (parseInt(txtVis) == 3200) {
        txtVis = 20;
    } else if (parseInt(txtVis) == 3000) {
        txtVis = 19;
    } else if (parseInt(txtVis) == 2800) {
        txtVis = 18;
    } else if (parseInt(txtVis) == 2600) {
        txtVis = 17;
    } else if (parseInt(txtVis) == 2400) {
        txtVis = 16;
    } else if (parseInt(txtVis) == 2200) {
        txtVis = 15;
    } else if (parseInt(txtVis) == 2000) {
        txtVis = 14;
    } else if (parseInt(txtVis) == 1800) {
        txtVis = 13;
    } else if (parseInt(txtVis) == 1600) {
        txtVis = 12;
    } else if (parseInt(txtVis) == 1400) {
        txtVis = 11;
    } else if (parseInt(txtVis) == 1200) {
        txtVis = 10;
    } else if (parseInt(txtVis) == 1000) {
        txtVis = 9;
    } else if (parseInt(txtVis) == 800) {
        txtVis = 8;
    } else if (parseInt(txtVis) == 600) {
        txtVis = 7;
    } else if (parseInt(txtVis) == 500) {
        txtVis = 6;
    } else if (parseInt(txtVis) == 400) {
        txtVis = 5;
    } else if (parseInt(txtVis) == 300) {
        txtVis = 4;
    } else if (parseInt(txtVis) == 200) {
        txtVis = 3;
    } else if (parseInt(txtVis) == 100) {
        txtVis = 2;
    } else if (parseInt(txtVis) == 0) {
        txtVis = 1;
    } else {
        txtVis = 0;
    }

    return txtVis;
}

function MetarDewpoint(txtDewpoint) {
    let position = txtDewpoint.search("/");
    txtDewpoint = txtDewpoint.substring((position + 1), (position + 3));
    return txtDewpoint;
}

function MetarCloud(txtCloud) {
    const typeCloud = [
        "1ST", "2ST", "3ST", "4ST", "5ST", "6ST", "7ST", "8ST",
        "1TCU", "2TCU", "3TCU", "4TCU", "5TCU", "6TCU", "7TCU", "8TCU",
        "1CB", "2CB", "3CB", "4CB", "5CB", "6CB", "7CB", "8CB",
        "1CU", "2CU", "3CU", "4CU", "5CU", "6CU", "7CU", "8CU",
        "1SC", "2SC", "3SC", "4SC", "5SC", "6SC", "7SC", "8SC",
        "1AC", "2AC", "3AC", "4AC", "5AC", "6AC", "7AC", "8AC",
        "1AS", "2AS", "3AS", "4AS", "5AS", "6AS", "7AS", "8AS",
        "1NS", "2NS", "3NS", "4NS", "5NS", "6NS", "7NS", "8NS",
        "1CC", "2CC", "3CC", "4CC", "5CC", "6CC", "7CC", "8CC",
        "1CI", "2CI", "3CI", "4CI", "5CI", "6CI", "7CI", "8CI",
        "1CS", "2CS", "3CS", "4CS", "5CS", "6CS", "7CS", "8CS"
    ];
    let position = txtCloud.search("RMK");
    txtCloud = txtCloud.substring(position);
    let cc = 0;
    for (let i = 0; i < typeCloud.length; i++) {
        if (txtCloud.search(typeCloud[i]) > 0) {
            position = txtCloud.search(typeCloud[i]);
            cc = cc + parseInt(txtCloud.substring(position, position + 1));
            txtCloud = txtCloud.substring((position + 6));
        }
    }
    return cc;
}

function MetarPressure(txtPressure) {
    let position = txtPressure.search("RMK");
    txtPressure = txtPressure.substring((position - 6), (position - 1));
    return txtPressure;
}

function MetarWeather(txtWeather) {
    const typeWeather = [
        "VC", "MI", "PR", "BC", "DR", "BL",
        "SH", "TS", "FZ", "DZ", "RA", "SN", "SG",
        "IC", "PL", "GR", "GS", "UP", "BR", "FG",
        "FU", "VA", "DU", "SA", "HZ", "PY", "PO",
        "SQ", "FC", "SS", "DS"
    ];

    let position = txtWeather.search("RMK");
    txtWeather = txtWeather.substring(13, position);
    txtWeather = txtWeather.replace(/FEW|SCT|BKN|OVC/gi, "");
    let ww = '';
    for (let i = 0; i < typeWeather.length; i++) {
        if (txtWeather.search(typeWeather[i]) > 0) {
            position = txtWeather.search(typeWeather[i]);
            ww += typeWeather[i];
            txtWeather = txtWeather.replace(/typeWeather[i]/gi, "");
        }
    }

    return ww;
}

function AddsetMetarTextRTAF() {
    iconVTNC = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTNC-1.png',
        iconSize: [15, 15]
    });

    iconVTNP = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTNP.png',
        iconSize: [15, 15]
    });

    iconVTEU = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTEU.png',
        iconSize: [15, 15]
    });

    iconVTED = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTED.png',
        iconSize: [15, 15]
    });

    iconVTEN = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTEN.png',
        iconSize: [15, 15]
    });

    iconVTMI = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTMI-1.png',
        iconSize: [15, 15]
    });

    iconVTML = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTML.png',
        iconSize: [15, 15]
    });

    iconVTMW = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTMW.png',
        iconSize: [15, 15]
    });

    iconVTMU = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/RTAF.png',
        iconSize: [15, 15]
    });

    iconVTMP = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTMP.png',
        iconSize: [15, 15]
    });

    iconVTMD = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTMD-1.png',
        iconSize: [15, 15]
    });

    iconVTMK = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTMK.png',
        iconSize: [15, 15]
    });

    iconVTMH = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/RTAF.png',
        iconSize: [15, 15]
    });

    iconVTDB = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTDB.png',
        iconSize: [15, 15]
    });

    iconVTDS = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTDS.png',
        iconSize: [15, 15]
    });

    iconVTDT = L.icon({
        iconUrl: 'assets/images/logo/StationRTAF/VTDT.png',
        iconSize: [15, 15]
    });

    markerVTNC.setIcon(iconVTNC).addTo(map);
    markerVTNP.setIcon(iconVTNP).addTo(map);
    markerVTED.setIcon(iconVTED).addTo(map);
    markerVTEU.setIcon(iconVTEU).addTo(map);
    markerVTEN.setIcon(iconVTEN).addTo(map);
    markerVTMD.setIcon(iconVTMD).addTo(map);
    markerVTMI.setIcon(iconVTMI).addTo(map);
    markerVTML.setIcon(iconVTML).addTo(map);
    markerVTMW.setIcon(iconVTMW).addTo(map);
    markerVTMU.setIcon(iconVTMU).addTo(map);
    markerVTMP.setIcon(iconVTMP).addTo(map);
    markerVTMK.setIcon(iconVTMK).addTo(map);
    markerVTMH.setIcon(iconVTMH).addTo(map);
    markerVTDB.setIcon(iconVTDB).addTo(map);
    markerVTDS.setIcon(iconVTDS).addTo(map);
    markerVTDT.setIcon(iconVTDT).addTo(map);
};

function ResetMetarTextRTAF() {
    map.removeLayer(markerVTNC);
    map.removeLayer(markerVTNP);
    map.removeLayer(markerVTED);
    map.removeLayer(markerVTEU);
    map.removeLayer(markerVTEN);
    map.removeLayer(markerVTMD);
    map.removeLayer(markerVTMI);
    map.removeLayer(markerVTML);
    map.removeLayer(markerVTMW);
    map.removeLayer(markerVTMU);
    map.removeLayer(markerVTMP);
    map.removeLayer(markerVTMK);
    map.removeLayer(markerVTMH);
    map.removeLayer(markerVTDB);
    map.removeLayer(markerVTDS);
    map.removeLayer(markerVTDT);
};

function MetarProgressBarCancel() {
    $.unblockUI();
    $("#collapseMetarRTAF").slideToggle();
    ResetMetarTextRTAF();
    $('input[type="checkbox"][id="Wx-News-Metar-Rtaf"]').prop('checked', false);
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Loading Metar Cancel',
        showConfirmButton: false,
        padding: '7px',
        timer: 1500
    });
}