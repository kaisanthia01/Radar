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
            //console.log(value.STATION_NAME + ' ' + value.NEWS_TIME + '\n' + value.TAF_TEXT);
            if (value.STATION_CODE == "VTMD") {
                if (value.METAR == "NIL") {}
                var nWD = value.WIND_DIRECTION;
                var nWP = value.WIND_SPEED;
                var nT = value.TEMP;
                var nD = MetarDewpoint(value.METAR);
                var nV = MetarVis(value.VISIBILITY);
                var nC = MetarCloud(value.METAR);
                var nP = MetarPressure(value.METAR);
                var nWW = MetarPressure(value.METAR);

                //SetTooltip VTMD
                iconVTMD = new L.metarIcon({
                    windDirection: nWD,
                    windSpeed: nWP,
                    temp: nT,
                    dewpoint: nD,
                    visibility: nV,
                    cloud: nC,
                    pressure: nP,
                    weather: nWW
                });
                markerVTMD.setIcon(iconVTMD).unbindTooltip().addTo(map);
            } else {

            }
        }
    });
};

function ResetMetarTextRTAF() {
    map.removeLayer(markerVTMD);
    map.removeLayer(markerVTNC);
    map.removeLayer(markerVTNP);
    map.removeLayer(markerVTED);
    map.removeLayer(markerVTEU);
    map.removeLayer(markerVTEN);
    map.removeLayer(markerVTMI);
    map.removeLayer(markerVTML);
    map.removeLayer(markerVTMU);
    map.removeLayer(markerVTMW);
    map.removeLayer(markerVTMP);
    map.removeLayer(markerVTMH);
    map.removeLayer(markerVTDB);
    map.removeLayer(markerVTDS);
    map.removeLayer(markerVTDT);
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
    
    if(txtWeather.search("ST") > 0){
        let position = txtPressure.search("A");
    }
    return txtCloud;
}

function MetarPressure(txtPressure) {
    let position = txtPressure.search("A");
    txtPressure = txtPressure.substring((position - 1), (position + 5));
    return txtPressure;
}

function MetarWeather(txtWeather) {
    let ww = '';
    for (let i = 0; i < 32; i++) {
        if (txtWeather.search("-") > 0) {
            ww += '-';
        } else if (txtWeather.search("+") > 0) {
            ww += '+';
        } else if (txtWeather.search("VC") > 0) {
            ww += 'VC';
        } else if (txtWeather.search("MI") > 0) {
            ww += 'MI';
        } else if (txtWeather.search("PR") > 0) {
            ww += 'PR';
        } else if (txtWeather.search("BC") > 0) {
            ww += 'BC';
        } else if (txtWeather.search("DR") > 0) {
            ww += 'DR';
        } else if (txtWeather.search("BL") > 0) {
            ww += 'BL';
        } else if (txtWeather.search("SH") > 0) {
            ww += 'SH';
        } else if (txtWeather.search("TS") > 0) {
            ww += 'TS';
        } else if (txtWeather.search("FZ") > 0) {
            ww += 'FZ';
        } else if (txtWeather.search("DZ") > 0) {
            ww += 'DZ';
        } else if (txtWeather.search("RA") > 0) {
            ww += 'RA';
        } else if (txtWeather.search("SN") > 0) {
            ww += 'SN';
        } else if (txtWeather.search("IC") > 0) {
            ww += 'IC';
        } else if (txtWeather.search("PL") > 0) {
            ww += 'PL';
        } else if (txtWeather.search("GR") > 0) {
            ww += 'GR';
        } else if (txtWeather.search("GS") > 0) {
            ww += 'GS';
        } else if (txtWeather.search("UP") > 0) {
            ww += 'UP';
        } else if (txtWeather.search("BR") > 0) {
            ww += 'BR';
        } else if (txtWeather.search("FG") > 0) {
            ww += 'FG';
        } else if (txtWeather.search("FU") > 0) {
            ww += 'FU';
        } else if (txtWeather.search("VA") > 0) {
            ww += 'VA';
        } else if (txtWeather.search("DU") > 0) {
            ww += 'DU';
        } else if (txtWeather.search("SA") > 0) {
            ww += 'SA';
        } else if (txtWeather.search("HZ") > 0) {
            ww += 'HZ';
        } else if (txtWeather.search("PY") > 0) {
            ww += 'PY';
        } else if (txtWeather.search("PO") > 0) {
            ww += 'PO';
        } else if (txtWeather.search("SQ") > 0) {
            ww += 'SQ';
        } else if (txtWeather.search("FC") > 0) {
            ww += 'FC';
        } else if (txtWeather.search("SS") > 0) {
            ww += 'SS';
        } else if (txtWeather.search("DS") > 0) {
            ww += 'DS';
        } else {

        }
    }
    return ww;
}