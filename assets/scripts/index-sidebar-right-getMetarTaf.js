function ajaxMetarRTAF() {
    var jsonMetar, jsonMetarData;
    //Get Metar Json
    $.ajax({
        Type: "GET",
        contentType: "application/text; charset=utf-8",
        url: 'assets/scripts/metar.php',
        dataType: "text",
        async: false,
        success: function (data) {
            //resolve(data); // Resolve promise and go to then()
            jsonMetarData = data.trim();
            jsonMetar = JSON.parse(jsonMetarData);
        },
        error: function (err) {
            // reject(err) // Reject the promise and go to catch()
            jsonMetar = 'Error';
            console.error(err);
        }
    });

    return jsonMetar;
}

function ajaxTafRTAF() {
    var jsonTaf, jsonTafData;
    //Get Taf Json
    $.ajax({
        Type: "GET",
        contentType: "application/text; charset=utf-8",
        url: 'assets/scripts/taf.php',
        dataType: "text",
        async: false,
        success: function (data) {
            //resolve(data); // Resolve promise and go to then()
            jsonTafData = data.trim();
            jsonTaf = JSON.parse(jsonTafData);
        },
        error: function (err) {
            // reject(err) // Reject the promise and go to catch()
            jsonTaf = 'Error';
            console.error(err);
        }
    });

    return jsonTaf;
}

function getMetarTextRTAF(MetarTextRTAF) {
    $.each(MetarTextRTAF.CURRENT_WEATHER, function (index, value) {
        if (value.STATION_CODE != '-') {
            if (value.STATION_CODE == "VTNC") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTNC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTNC = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTNC = HeaderMetarTextVTNC + BodyMetarTextVTNC;

                    //SetTooltip VTNC
                    iconVTNC = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTNC.setIcon(iconVTNC).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNC + '</div></div>').addTo(map);
                } else {
                    iconVTNC = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTNC.setIcon(iconVTNC).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTNP") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTNP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTNP = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTNP = HeaderMetarTextVTNP + BodyMetarTextVTNP;

                    //SetTooltip VTNP
                    iconVTNP = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTNP.setIcon(iconVTNP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNP + '</div></div>').addTo(map);
                } else {
                    iconVTNP = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTNP.setIcon(iconVTNP).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTED") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTED = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTED = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTED = HeaderMetarTextVTED + BodyMetarTextVTED;

                    //SetTooltip VTED
                    iconVTED = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTED.setIcon(iconVTED).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTED + '</div></div>').addTo(map);
                } else {
                    iconVTED = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTED.setIcon(iconVTED).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTEU") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTEU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTEU = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTEU = HeaderMetarTextVTEU + BodyMetarTextVTEU;

                    //SetTooltip VTEU
                    iconVTEU = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTEU.setIcon(iconVTEU).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEU + '</div></div>').addTo(map);
                } else {
                    iconVTEU = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTEU.setIcon(iconVTEU).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTEN") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTEN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTEN = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTEN = HeaderMetarTextVTEN + BodyMetarTextVTEN;

                    //SetTooltip VTEN
                    iconVTEN = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTEN.setIcon(iconVTEN).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEN + '</div></div>').addTo(map);
                } else {
                    iconVTEN = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTEN.setIcon(iconVTEN).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMD") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMD = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMD = HeaderMetarTextVTMD + BodyMetarTextVTMD;

                    //SetTooltip VTMD
                    iconVTMD = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMD.setIcon(iconVTMD).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMD + '</div></div>').addTo(map);
                } else {
                    iconVTMD = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMD.setIcon(iconVTMD).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMI") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMI = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMI = HeaderMetarTextVTMI + BodyMetarTextVTMI;

                    //SetTooltip VTMI
                    iconVTMI = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMI.setIcon(iconVTMI).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMI + '</div></div>').addTo(map);
                } else {
                    iconVTMI = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMI.setIcon(iconVTMI).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTML") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTML = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTML = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTML = HeaderMetarTextVTML + BodyMetarTextVTML;

                    //SetTooltip VTML
                    iconVTML = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTML.setIcon(iconVTML).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTML + '</div></div>').addTo(map);
                } else {
                    iconVTML = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTML.setIcon(iconVTML).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMW") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMW = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMW = HeaderMetarTextVTMW + BodyMetarTextVTMW;

                    //SetTooltip VTMW
                    iconVTMW = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMW.setIcon(iconVTMW).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMW + '</div></div>').addTo(map);
                } else {
                    iconVTMW = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMW.setIcon(iconVTMW).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMU") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMU = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMU = HeaderMetarTextVTMU + BodyMetarTextVTMU;

                    //SetTooltip VTMU
                    iconVTMU = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMU.setIcon(iconVTMU).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMU + '</div></div>').addTo(map);
                } else {
                    iconVTMU = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMU.setIcon(iconVTMU).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMP") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMP = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMP = HeaderMetarTextVTMP + BodyMetarTextVTMP;

                    //SetTooltip VTMP
                    iconVTMP = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMP.setIcon(iconVTMP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMP + '</div></div>').addTo(map);
                } else {
                    iconVTMP = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMP.setIcon(iconVTMP).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMK") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMK = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMK = HeaderMetarTextVTMK + BodyMetarTextVTMK;

                    //SetTooltip VTMK
                    iconVTMK = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMK.setIcon(iconVTMK).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMK + '</div></div>').addTo(map);
                } else {
                    iconVTMK = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMK.setIcon(iconVTMK).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTMH") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMH = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTMH = HeaderMetarTextVTMH + BodyMetarTextVTMH;

                    //SetTooltip VTMH
                    iconVTMH = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTMH.setIcon(iconVTMH).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMH + '</div></div>').addTo(map);
                } else {
                    iconVTMH = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTMH.setIcon(iconVTMH).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDB") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDB = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTDB = HeaderMetarTextVTDB + BodyMetarTextVTDB;

                    //SetTooltip VTDB
                    iconVTDB = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTDB.setIcon(iconVTDB).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDB + '</div></div>').addTo(map);
                } else {
                    iconVTDB = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTDB.setIcon(iconVTDB).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDS") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDS = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTDS = HeaderMetarTextVTDS + BodyMetarTextVTDS;

                    //SetTooltip VTDS
                    iconVTDS = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTDS.setIcon(iconVTDS).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDS + '</div></div>').addTo(map);
                } else {
                    iconVTDS = new L.metarIcon({
                        weather: 'NIL'
                    });
                    markerVTDS.setIcon(iconVTDS).unbindTooltip().addTo(map);
                }
            } else if (value.STATION_CODE == "VTDT") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDT = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    var ContentMetarTextVTDT = HeaderMetarTextVTDT + BodyMetarTextVTDT;

                    //SetTooltip VTDT
                    iconVTDT = L.icon({
                        iconUrl: 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png',
                        iconSize: [15, 15]
                    });
                    markerVTDT.setIcon(iconVTDT).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDT + '</div></div>').addTo(map);
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

function getMetarTafTextRTAF(MetarTextRTAF, TafTextRTAF) {
    var ContentMetarTextVTNC = 'NIL',
        ContentMetarTextVTNP = 'NIL',
        ContentMetarTextVTED = 'NIL',
        ContentMetarTextVTEU = 'NIL',
        ContentMetarTextVTEN = 'NIL',
        ContentMetarTextVTMD = 'NIL',
        ContentMetarTextVTMI = 'NIL',
        ContentMetarTextVTML = 'NIL',
        ContentMetarTextVTMW = 'NIL',
        ContentMetarTextVTMU = 'NIL',
        ContentMetarTextVTMP = 'NIL',
        ContentMetarTextVTMK = 'NIL',
        ContentMetarTextVTMH = 'NIL',
        ContentMetarTextVTDB = 'NIL',
        ContentMetarTextVTDS = 'NIL',
        ContentMetarTextVTDT = 'NIL';

    var ContentTafTextVTNC = 'NIL',
        ContentTafTextVTNP = 'NIL',
        ContentTafTextVTED = 'NIL',
        ContentTafTextVTEU = 'NIL',
        ContentTafTextVTEN = 'NIL',
        ContentTafTextVTMD = 'NIL',
        ContentTafTextVTMI = 'NIL',
        ContentTafTextVTML = 'NIL',
        ContentTafTextVTMW = 'NIL',
        ContentTafTextVTMU = 'NIL',
        ContentTafTextVTMP = 'NIL',
        ContentTafTextVTMK = 'NIL',
        ContentTafTextVTMH = 'NIL',
        ContentTafTextVTDB = 'NIL',
        ContentTafTextVTDS = 'NIL',
        ContentTafTextVTDT = 'NIL';

    var IonsMetarTextVTNC = 'NIL',
        IonsMetarTextVTNP = 'NIL',
        IonsMetarTextVTED = 'NIL',
        IonsMetarTextVTEU = 'NIL',
        IonsMetarTextVTEN = 'NIL',
        IonsMetarTextVTMD = 'NIL',
        IonsMetarTextVTMI = 'NIL',
        IonsMetarTextVTML = 'NIL',
        IonsMetarTextVTMW = 'NIL',
        IonsMetarTextVTMU = 'NIL',
        IonsMetarTextVTMP = 'NIL',
        IonsMetarTextVTMK = 'NIL',
        IonsMetarTextVTMH = 'NIL',
        IonsMetarTextVTDB = 'NIL',
        IonsMetarTextVTDS = 'NIL',
        IonsMetarTextVTDT = 'NIL';

    var CountTextVTNC = 0,
        CountTextVTNP = 0,
        CountTextVTED = 0,
        CountTextVTEU = 0,
        CountTextVTEN = 0,
        CountTextVTMD = 0,
        CountTextVTMI = 0,
        CountTextVTML = 0,
        CountTextVTMW = 0,
        CountTextVTMU = 0,
        CountTextVTMP = 0,
        CountTextVTMK = 0,
        CountTextVTMH = 0,
        CountTextVTDB = 0,
        CountTextVTDS = 0,
        CountTextVTDT = 0;

    //ตั้งค่าข่าว Metar
    $.each(MetarTextRTAF.CURRENT_WEATHER, function (index, value) {
        if (value.STATION_CODE != '-') {
            if (value.STATION_CODE == "VTNC") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTNC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTNC = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTNC = HeaderMetarTextVTNC + BodyMetarTextVTNC;
                    IonsMetarTextVTNC = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTNC = 'NIL';
                }
                CountTextVTNC++;
            } else if (value.STATION_CODE == "VTNP") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTNP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTNP = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTNP = HeaderMetarTextVTNP + BodyMetarTextVTNP;
                    IonsMetarTextVTNP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTNP = 'NIL';
                }
                CountTextVTNP++;
            } else if (value.STATION_CODE == "VTED") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTED = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTED = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTED = HeaderMetarTextVTED + BodyMetarTextVTED;
                    IonsMetarTextVTED = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTED = 'NIL';
                }
                CountTextVTED++;
            } else if (value.STATION_CODE == "VTEU") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTEU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTEU = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTEU = HeaderMetarTextVTEU + BodyMetarTextVTEU;
                    IonsMetarTextVTEU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTEU = 'NIL';
                }
                CountTextVTEU++;
            } else if (value.STATION_CODE == "VTEN") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTEN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTEN = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTEN = HeaderMetarTextVTEN + BodyMetarTextVTEN;
                    IonsMetarTextVTEN = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTEN = 'NIL';
                }
                CountTextVTEN++;
            } else if (value.STATION_CODE == "VTMD") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMD = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMD = HeaderMetarTextVTMD + BodyMetarTextVTMD;
                    IonsMetarTextVTMD = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMD = 'NIL';
                }
                CountTextVTMD++;
            } else if (value.STATION_CODE == "VTMI") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMI = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMI = HeaderMetarTextVTMI + BodyMetarTextVTMI;
                    IonsMetarTextVTMI = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMI = 'NIL';
                }
                CountTextVTMI++;
            } else if (value.STATION_CODE == "VTML") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTML = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTML = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTML = HeaderMetarTextVTML + BodyMetarTextVTML;
                    IonsMetarTextVTML = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTML = 'NIL';
                }
                CountTextVTML++;
            } else if (value.STATION_CODE == "VTMW") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMW = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMW = HeaderMetarTextVTMW + BodyMetarTextVTMW;
                    IonsMetarTextVTMW = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMW = 'NIL';
                }
                CountTextVTMW++;
            } else if (value.STATION_CODE == "VTMU") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMU = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMU = HeaderMetarTextVTMU + BodyMetarTextVTMU;
                    IonsMetarTextVTMU = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMU = 'NIL';
                }
                CountTextVTMU++;
            } else if (value.STATION_CODE == "VTMP") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMP = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMP = HeaderMetarTextVTMP + BodyMetarTextVTMP;
                    IonsMetarTextVTMP = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMP = 'NIL';
                }
                CountTextVTMP++;
            } else if (value.STATION_CODE == "VTMK") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMK = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMK = HeaderMetarTextVTMK + BodyMetarTextVTMK;
                    IonsMetarTextVTMK = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMK = 'NIL';
                }
                CountTextVTMK++;
            } else if (value.STATION_CODE == "VTMH") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTMH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTMH = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTMH = HeaderMetarTextVTMH + BodyMetarTextVTMH;
                    IonsMetarTextVTMH = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTMH = 'NIL';
                }
                CountTextVTMH++;
            } else if (value.STATION_CODE == "VTDB") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDB = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTDB = HeaderMetarTextVTDB + BodyMetarTextVTDB;
                    IonsMetarTextVTDB = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTDB = 'NIL';
                }
                CountTextVTDB++;
            } else if (value.STATION_CODE == "VTDS") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDS = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTDS = HeaderMetarTextVTDS + BodyMetarTextVTDS;
                    IonsMetarTextVTDS = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTDS = 'NIL';
                }
                CountTextVTDS++;
            } else if (value.STATION_CODE == "VTDT") {
                if (value.METAR != "NIL") {
                    var HeaderMetarTextVTDT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                    var position = value.METAR.search("RMK");
                    var txtMetar1 = value.METAR.substring(0, position);
                    var txtMetar2 = value.METAR.substring(position);
                    var BodyMetarTextVTDT = '<p class="card-text mb-0"><small>' + value.NEWS_TYPE + ' ' + txtMetar1 + '<br>' + txtMetar2 + '</small></p>';
                    ContentMetarTextVTDT = HeaderMetarTextVTDT + BodyMetarTextVTDT;
                    IonsMetarTextVTDT = 'assets/images/metar/' + value.STATION_COLOR_NAME + '.png';
                } else {
                    IonsMetarTextVTDT = 'NIL';
                }
                CountTextVTDT++;
            } else {

            }
        }
    });

    //ตั้งค่าข่าว Taf
    $.each(TafTextRTAF.CURRENT_TAF, function (index, value) {
        if (value.STATION_CODE != '-') {
            if (value.STATION_CODE == "VTNC") {
                var HeaderTafTextVTNC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTNC = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTNC = HeaderTafTextVTNC + BodyTafTextVTNC;
                CountTextVTNC++;

            } else if (value.STATION_CODE == "VTNP") {
                var HeaderTafTextVTNP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTNP = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTNP = HeaderTafTextVTNP + BodyTafTextVTNP;
                CountTextVTNP++;

            } else if (value.STATION_CODE == "VTED") {
                var HeaderTafTextVTED = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTED = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTED = HeaderTafTextVTED + BodyTafTextVTED;
                CountTextVTED++;

            } else if (value.STATION_CODE == "VTEU") {
                var HeaderTafTextVTEU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTEU = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTEU = HeaderTafTextVTEU + BodyTafTextVTEU;
                CountTextVTEU++;

            } else if (value.STATION_CODE == "VTEN") {
                var HeaderTafTextVTEN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTEN = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTEN = HeaderTafTextVTEN + BodyTafTextVTEN;
                CountTextVTEN++;

            } else if (value.STATION_CODE == "VTMD") {
                var HeaderTafTextVTMD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMD = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMD = HeaderTafTextVTMD + BodyTafTextVTMD;
                CountTextVTMD++;

            } else if (value.STATION_CODE == "VTMI") {
                var HeaderTafTextVTMI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMI = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMI = HeaderTafTextVTMI + BodyTafTextVTMI;
                CountTextVTMI++;

            } else if (value.STATION_CODE == "VTML") {
                var HeaderTafTextVTML = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTML = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTML = HeaderTafTextVTML + BodyTafTextVTML;
                CountTextVTML++;

            } else if (value.STATION_CODE == "VTMW") {
                var HeaderTafTextVTMW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMW = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMW = HeaderTafTextVTMW + BodyTafTextVTMW;
                CountTextVTMW++;

            } else if (value.STATION_CODE == "VTMU") {
                var HeaderTafTextVTMU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMU = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMU = HeaderTafTextVTMU + BodyTafTextVTMU;
                CountTextVTMU++;

            } else if (value.STATION_CODE == "VTMP") {
                var HeaderTafTextVTMP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMP = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMP = HeaderTafTextVTMP + BodyTafTextVTMP;
                CountTextVTMP++;

            } else if (value.STATION_CODE == "VTMK") {
                var HeaderTafTextVTMK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMK = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMK = HeaderTafTextVTMK + BodyTafTextVTMK;
                CountTextVTMK++;

            } else if (value.STATION_CODE == "VTMH") {
                var HeaderTafTextVTMH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTMH = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTMH = HeaderTafTextVTMH + BodyTafTextVTMH;
                CountTextVTMH++;

            } else if (value.STATION_CODE == "VTDB") {
                var HeaderTafTextVTDB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTDB = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTDB = HeaderTafTextVTDB + BodyTafTextVTDB;
                CountTextVTDB++;

            } else if (value.STATION_CODE == "VTDS") {
                var HeaderTafTextVTDS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTDS = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTDS = HeaderTafTextVTDS + BodyTafTextVTDS;
                CountTextVTDS++;

            } else if (value.STATION_CODE == "VTDT") {
                var HeaderTafTextVTDT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + value.STATION_NAME + ' | ' + value.NEWS_TIME + '</span></h6>';
                var BodyTafTextVTDT = '<p class="card-text mb-0"><small>' + value.TAF_TEXT + '</small></p>';
                ContentTafTextVTDT = HeaderTafTextVTDT + BodyTafTextVTDT;
                CountTextVTDT++;

            } else {

            }
        }
    });

    if (CountTextVTNC > 0) {
        //SetTooltip VTNC
        iconVTNC = L.icon({
            iconUrl: IonsMetarTextVTNC == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTNC,
            iconSize: [15, 15]
        });
        markerVTNC.setIcon(iconVTNC).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNC + '<hr>' + ContentTafTextVTNC + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTNC
        iconVTNC = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTNC.setIcon(iconVTNC).unbindTooltip().addTo(map);
    }

    if (CountTextVTNP > 0) {
        //SetTooltip VTNP
        iconVTNP = L.icon({
            iconUrl: IonsMetarTextVTNP == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTNP,
            iconSize: [15, 15]
        });
        markerVTNP.setIcon(iconVTNP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTNP + '<hr>' + ContentTafTextVTNP + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTNP
        iconVTNP = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTNP.setIcon(iconVTNP).unbindTooltip().addTo(map);
    }

    if (CountTextVTED > 0) {
        //SetTooltip VTED
        iconVTED = L.icon({
            iconUrl: IonsMetarTextVTED == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTED,
            iconSize: [15, 15]
        });
        markerVTED.setIcon(iconVTED).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTED + '<hr>' + ContentTafTextVTED + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTED
        iconVTED = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTED.setIcon(iconVTED).unbindTooltip().addTo(map);
    }

    if (CountTextVTEU > 0) {
        //SetTooltip VTEU
        iconVTEU = L.icon({
            iconUrl: IonsMetarTextVTEU == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTEU,
            iconSize: [15, 15]
        });
        markerVTEU.setIcon(iconVTEU).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEU + '<hr>' + ContentTafTextVTEU + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTEU
        iconVTEU = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTEU.setIcon(iconVTEU).unbindTooltip().addTo(map);
    }

    if (CountTextVTEN > 0) {
        //SetTooltip VTEN
        iconVTEN = L.icon({
            iconUrl: IonsMetarTextVTEN == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTEN,
            iconSize: [15, 15]
        });
        markerVTEN.setIcon(iconVTEN).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTEN + '<hr>' + ContentTafTextVTEN + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTEN
        iconVTEN = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTEN.setIcon(iconVTEN).unbindTooltip().addTo(map);
    }

    if (CountTextVTMD > 0) {
        //SetTooltip VTMD
        iconVTMD = L.icon({
            iconUrl: IonsMetarTextVTMD == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMD,
            iconSize: [15, 15]
        });
        markerVTMD.setIcon(iconVTMD).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMD + '<hr>' + ContentTafTextVTMD + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMD
        iconVTMD = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMD.setIcon(iconVTMD).unbindTooltip().addTo(map);
    }

    if (CountTextVTMI > 0) {
        //SetTooltip VTMI
        iconVTMI = L.icon({
            iconUrl: IonsMetarTextVTMI == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMI,
            iconSize: [15, 15]
        });
        markerVTMI.setIcon(iconVTMI).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMI + '<hr>' + ContentTafTextVTMI + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMI
        iconVTMI = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMI.setIcon(iconVTMI).unbindTooltip().addTo(map);
    }

    if (CountTextVTML > 0) {
        //SetTooltip VTML
        iconVTML = L.icon({
            iconUrl: IonsMetarTextVTML == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTML,
            iconSize: [15, 15]
        });
        markerVTML.setIcon(iconVTML).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTML + '<hr>' + ContentTafTextVTML + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTML
        iconVTML = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTML.setIcon(iconVTML).unbindTooltip().addTo(map);
    }

    if (CountTextVTMW > 0) {
        //SetTooltip VTMW
        iconVTMW = L.icon({
            iconUrl: IonsMetarTextVTMW == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMW,
            iconSize: [15, 15]
        });
        markerVTMW.setIcon(iconVTMW).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMW + '<hr>' + ContentTafTextVTMW + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMW
        iconVTMW = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMW.setIcon(iconVTMW).unbindTooltip().addTo(map);
    }

    if (CountTextVTMU > 0) {
        //SetTooltip VTMU
        iconVTMU = L.icon({
            iconUrl: IonsMetarTextVTMU == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMU,
            iconSize: [15, 15]
        });
        markerVTMU.setIcon(iconVTMU).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMU + '<hr>' + ContentTafTextVTMU + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMU
        iconVTMU = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMU.setIcon(iconVTMU).unbindTooltip().addTo(map);
    }

    if (CountTextVTMP > 0) {
        //SetTooltip VTMP
        iconVTMP = L.icon({
            iconUrl: IonsMetarTextVTMP == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMP,
            iconSize: [15, 15]
        });
        markerVTMP.setIcon(iconVTMP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMP + '<hr>' + ContentTafTextVTMP + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMP
        iconVTMP = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMP.setIcon(iconVTMP).unbindTooltip().addTo(map);
    }

    if (CountTextVTMK > 0) {
        //SetTooltip VTMK
        iconVTMK = L.icon({
            iconUrl: IonsMetarTextVTMK == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMK,
            iconSize: [15, 15]
        });
        markerVTMK.setIcon(iconVTMK).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMK + '<hr>' + ContentTafTextVTMK + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMK
        iconVTMK = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMK.setIcon(iconVTMK).unbindTooltip().addTo(map);
    }

    if (CountTextVTMH > 0) {
        //SetTooltip VTMH
        iconVTMH = L.icon({
            iconUrl: IonsMetarTextVTMH == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTMH,
            iconSize: [15, 15]
        });
        markerVTMH.setIcon(iconVTMH).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTMH + '<hr>' + ContentTafTextVTMH + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTMH
        iconVTMH = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTMH.setIcon(iconVTMH).unbindTooltip().addTo(map);
    }

    if (CountTextVTDB > 0) {
        //SetTooltip VTDB
        iconVTDB = L.icon({
            iconUrl: IonsMetarTextVTDB == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTDB,
            iconSize: [15, 15]
        });
        markerVTDB.setIcon(iconVTDB).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDB + '<hr>' + ContentTafTextVTDB + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTDB
        iconVTDB = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTDB.setIcon(iconVTDB).unbindTooltip().addTo(map);
    }

    if (CountTextVTDS > 0) {
        //SetTooltip VTDS
        iconVTDS = L.icon({
            iconUrl: IonsMetarTextVTDS == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTDS,
            iconSize: [15, 15]
        });
        markerVTDS.setIcon(iconVTDS).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDS + '<hr>' + ContentTafTextVTDS + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTDS
        iconVTDS = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTDS.setIcon(iconVTDS).unbindTooltip().addTo(map);
    }

    if (CountTextVTDT > 0) {
        //SetTooltip VTDT
        iconVTDT = L.icon({
            iconUrl: IonsMetarTextVTDT == 'NIL' ? 'assets/images/metar/NIL.png' : IonsMetarTextVTDT,
            iconSize: [15, 15]
        });
        markerVTDT.setIcon(iconVTDT).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDT + '<hr>' + ContentTafTextVTDT + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTDT
        iconVTDT = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTDT.setIcon(iconVTDT).unbindTooltip().addTo(map);
    }
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

function callMetarUpdate() {}

function currentTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    //var time = hh + ":" + mm + ":" + ss;
    var time = year + '-' + month + '-' + day + ' | ' + hh + ':' + mm + ':' + ss;
    return time;
}


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