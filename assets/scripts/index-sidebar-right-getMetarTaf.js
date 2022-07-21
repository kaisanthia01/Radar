function ajaxMetarRTAF() {
    var jsonMetar, jsonMetarData;
    //Get Metar Json
    $.ajax({
        Type: "GET",
        contentType: "application/text; charset=utf-8",
        url: 'assets/scripts/latest_metar.json',
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
            console.log(err);
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
        url: 'assets/scripts/latest_taf.json',
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
            console.log(err);
        }
    });

    return jsonTaf;
}

function ajaxMetarCheckWX() {
    var jsonMetar, jsonMetarData;
    //Get Metar Json
    $.ajax({
        Type: "GET",
        contentType: "application/text; charset=utf-8",
        url: 'assets/scripts/latest_metar_wx.json',
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
            console.log(err);
        }
    });

    return jsonMetar;
}

function ajaxTafCheckWX() {
    var jsonTaf, jsonTafData;
    //Get Taf Json
    $.ajax({
        Type: "GET",
        contentType: "application/text; charset=utf-8",
        url: 'assets/scripts/latest_taf_wx.json',
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
            console.log(err);
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
}

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
        ContentMetarTextVTNC = ContentMetarTextVTNC == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTNC;
        ContentTafTextVTNC = ContentTafTextVTNC == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTNC;
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
        ContentMetarTextVTNP = ContentMetarTextVTNP == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTNP;
        ContentTafTextVTNP = ContentTafTextVTNP == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTNP;
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
        ContentMetarTextVTED = ContentMetarTextVTED == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTED;
        ContentTafTextVTED = ContentTafTextVTED == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTED;
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
        ContentMetarTextVTEU = ContentMetarTextVTEU == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTEU;
        ContentTafTextVTEU = ContentTafTextVTEU == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTEU;
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
        ContentMetarTextVTEN = ContentMetarTextVTEN == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTEN;
        ContentTafTextVTEN = ContentTafTextVTEN == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTEN;
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
        ContentMetarTextVTMD = ContentMetarTextVTMD == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMD;
        ContentTafTextVTMD = ContentTafTextVTMD == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMD;
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
        ContentMetarTextVTMI = ContentMetarTextVTMI == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMI;
        ContentTafTextVTMI = ContentTafTextVTMI == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMI;
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
        ContentMetarTextVTML = ContentMetarTextVTML == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTML;
        ContentTafTextVTML = ContentTafTextVTML == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTML;
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
        ContentMetarTextVTMW = ContentMetarTextVTMW == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMW;
        ContentTafTextVTMW = ContentTafTextVTMW == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMW;
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
        ContentMetarTextVTMU = ContentMetarTextVTMU == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMU;
        ContentTafTextVTMU = ContentTafTextVTMU == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMU;
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
        ContentMetarTextVTMP = ContentMetarTextVTMP == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMP;
        ContentTafTextVTMP = ContentTafTextVTMP == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMP;
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
        ContentMetarTextVTMK = ContentMetarTextVTMK == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMK;
        ContentTafTextVTMK = ContentTafTextVTMK == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMK;
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
        ContentMetarTextVTMH = ContentMetarTextVTMH == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTMH;
        ContentTafTextVTMH = ContentTafTextVTMH == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTMH;
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
        ContentMetarTextVTDB = ContentMetarTextVTDB == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTDB;
        ContentTafTextVTDB = ContentTafTextVTDB == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTDB;
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
        ContentMetarTextVTDS = ContentMetarTextVTDS == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTDS;
        ContentTafTextVTDS = ContentTafTextVTDS == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTDS;
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
        ContentMetarTextVTDT = ContentMetarTextVTDT == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>' : ContentMetarTextVTDT;
        ContentTafTextVTDT = ContentTafTextVTDT == 'NIL' ? '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>' : ContentTafTextVTDT;
        markerVTDT.setIcon(iconVTDT).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTDT + '<hr>' + ContentTafTextVTDT + '</div></div>').addTo(map);
    } else {
        //SetTooltip VTDT
        iconVTDT = L.icon({
            iconUrl: 'assets/images/metar/NIL.png',
            iconSize: [15, 15]
        });
        markerVTDT.setIcon(iconVTDT).unbindTooltip().addTo(map);
    }
}

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
}

function getMetarTafTexCheckWX(MetarTextCheckWX, TafTextCheckWX) {
    var ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD,
        ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD,
        ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD,
        ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD, ContentMetarTextVTBD;

    var ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD,
        ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD,
        ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD,
        ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD, ContentTafTextVTBD;

    var ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD,
        ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD,
        ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD,
        ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD, ContentIconTextVTBD;

    /* VTBD --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTBD) {
        var txtHeader = MetarTextCheckWX.VTBD[0].observed;
        var txtMetar = MetarTextCheckWX.VTBD[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTBD[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTBD = HeaderMetarText + BodyMetarText;
        ContentIconTextVTBD = txtIcon;
    } else {
        ContentIconTextVTBD = 'NIL';
        ContentMetarTextVTBD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTBD) {
        var txtHeader = TafTextCheckWX.VTBD[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTBD[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTBD[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTBD = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTBD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTBD != 'NIL') {
        iconVTBD = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBD.setIcon(iconVTBD).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTBD + '<hr>' + ContentTafTextVTBD + '</div></div>').addTo(map);
    } else {
        iconVTBD = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBD.setIcon(iconVTBD).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTBS --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTBS) {
        var txtHeader = MetarTextCheckWX.VTBS[0].observed;
        var txtMetar = MetarTextCheckWX.VTBS[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTBS[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTBS = HeaderMetarText + BodyMetarText;
        ContentIconTextVTBS = txtIcon;
    } else {
        ContentIconTextVTBS = 'NIL';
        ContentMetarTextVTBS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTBS) {
        var txtHeader = TafTextCheckWX.VTBS[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTBS[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTBS[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTBS = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTBS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTBS != 'NIL') {
        iconVTBS = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBS.setIcon(iconVTBS).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTBS + '<hr>' + ContentTafTextVTBS + '</div></div>').addTo(map);
    } else {
        iconVTBS = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBS.setIcon(iconVTBS).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCC --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCC) {
        var txtHeader = MetarTextCheckWX.VTCC[0].observed;
        var txtMetar = MetarTextCheckWX.VTCC[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCC[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCC = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCC = txtIcon;
    } else {
        ContentIconTextVTCC = 'NIL';
        ContentMetarTextVTCC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCC) {
        var txtHeader = TafTextCheckWX.VTCC[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCC[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCC[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCC = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCC != 'NIL') {
        iconVTCC = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCC.setIcon(iconVTCC).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCC + '<hr>' + ContentTafTextVTCC + '</div></div>').addTo(map);
    } else {
        iconVTCC = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCC.setIcon(iconVTCC).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCT --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCT) {
        var txtHeader = MetarTextCheckWX.VTCT[0].observed;
        var txtMetar = MetarTextCheckWX.VTCT[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCT[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCT = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCT = txtIcon;
    } else {
        ContentIconTextVTCT = 'NIL';
        ContentMetarTextVTCT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCT) {
        var txtHeader = TafTextCheckWX.VTCT[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCT[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCT[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCT = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCT = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCT != 'NIL') {
        iconVTCT = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCT.setIcon(iconVTCT).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCT + '<hr>' + ContentTafTextVTCT + '</div></div>').addTo(map);
    } else {
        iconVTCT = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCT.setIcon(iconVTCT).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSP) {
        var txtHeader = MetarTextCheckWX.VTSP[0].observed;
        var txtMetar = MetarTextCheckWX.VTSP[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSP[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSP = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSP = txtIcon;
    } else {
        ContentIconTextVTSP = 'NIL';
        ContentMetarTextVTSP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSP) {
        var txtHeader = TafTextCheckWX.VTSP[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSP[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSP[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSP = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSP != 'NIL') {
        iconVTSP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSP.setIcon(iconVTSP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSP + '<hr>' + ContentTafTextVTSP + '</div></div>').addTo(map);
    } else {
        iconVTSP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSP.setIcon(iconVTSP).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSS --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSS) {
        var txtHeader = MetarTextCheckWX.VTSS[0].observed;
        var txtMetar = MetarTextCheckWX.VTSS[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSS[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSS = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSS = txtIcon;
    } else {
        ContentIconTextVTSS = 'NIL';
        ContentMetarTextVTSS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSS) {
        var txtHeader = TafTextCheckWX.VTSS[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSS[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSS[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSS = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSS = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSS != 'NIL') {
        iconVTSS = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSS.setIcon(iconVTSS).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSS + '<hr>' + ContentTafTextVTSS + '</div></div>').addTo(map);
    } else {
        iconVTSS = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSS.setIcon(iconVTSS).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSG --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSG) {
        var txtHeader = MetarTextCheckWX.VTSG[0].observed;
        var txtMetar = MetarTextCheckWX.VTSG[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSG[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSG = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSG = txtIcon;
    } else {
        ContentIconTextVTSG = 'NIL';
        ContentMetarTextVTSG = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSG) {
        var txtHeader = TafTextCheckWX.VTSG[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSG[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSG[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSG = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSG = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSG != 'NIL') {
        iconVTSG = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSG.setIcon(iconVTSG).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSG + '<hr>' + ContentTafTextVTSG + '</div></div>').addTo(map);
    } else {
        iconVTSG = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSG.setIcon(iconVTSG).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUK --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUK) {
        var txtHeader = MetarTextCheckWX.VTUK[0].observed;
        var txtMetar = MetarTextCheckWX.VTUK[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUK[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUK = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUK = txtIcon;
    } else {
        ContentIconTextVTUK = 'NIL';
        ContentMetarTextVTUK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUK) {
        var txtHeader = TafTextCheckWX.VTUK[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUK[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUK[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUK = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUK = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUK != 'NIL') {
        iconVTUK = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUK.setIcon(iconVTUK).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUK + '<hr>' + ContentTafTextVTUK + '</div></div>').addTo(map);
    } else {
        iconVTUK = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUK.setIcon(iconVTUK).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSE --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSE) {
        var txtHeader = MetarTextCheckWX.VTSE[0].observed;
        var txtMetar = MetarTextCheckWX.VTSE[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSE[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSE = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSE = txtIcon;
    } else {
        ContentIconTextVTSE = 'NIL';
        ContentMetarTextVTSE = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSE) {
        var txtHeader = TafTextCheckWX.VTSE[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSE[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSE[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSE = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSE = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSE != 'NIL') {
        iconVTSE = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSE.setIcon(iconVTSE).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSE + '<hr>' + ContentTafTextVTSE + '</div></div>').addTo(map);
    } else {
        iconVTSE = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSE.setIcon(iconVTSE).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPM --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTPM) {
        var txtHeader = MetarTextCheckWX.VTPM[0].observed;
        var txtMetar = MetarTextCheckWX.VTPM[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTPM[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTPM = HeaderMetarText + BodyMetarText;
        ContentIconTextVTPM = txtIcon;
    } else {
        ContentIconTextVTPM = 'NIL';
        ContentMetarTextVTPM = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTPM) {
        var txtHeader = TafTextCheckWX.VTPM[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTPM[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTPM[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTPM = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTPM = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTPM != 'NIL') {
        iconVTPM = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPM.setIcon(iconVTPM).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTPM + '<hr>' + ContentTafTextVTPM + '</div></div>').addTo(map);
    } else {
        iconVTPM = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPM.setIcon(iconVTPM).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTST --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTST) {
        var txtHeader = MetarTextCheckWX.VTST[0].observed;
        var txtMetar = MetarTextCheckWX.VTST[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTST[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTST = HeaderMetarText + BodyMetarText;
        ContentIconTextVTST = txtIcon;
    } else {
        ContentIconTextVTST = 'NIL';
        ContentMetarTextVTST = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTST) {
        var txtHeader = TafTextCheckWX.VTST[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTST[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTST[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTST = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTST = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTST != 'NIL') {
        iconVTST = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTST.setIcon(iconVTST).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTST + '<hr>' + ContentTafTextVTST + '</div></div>').addTo(map);
    } else {
        iconVTST = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTST.setIcon(iconVTST).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTBO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTBO) {
        var txtHeader = MetarTextCheckWX.VTBO[0].observed;
        var txtMetar = MetarTextCheckWX.VTBO[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTBO[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTBO = HeaderMetarText + BodyMetarText;
        ContentIconTextVTBO = txtIcon;
    } else {
        ContentIconTextVTBO = 'NIL';
        ContentMetarTextVTBO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTBO) {
        var txtHeader = TafTextCheckWX.VTBO[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTBO[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTBO[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTBO = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTBO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTBO != 'NIL') {
        iconVTBO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBO.setIcon(iconVTBO).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTBO + '<hr>' + ContentTafTextVTBO + '</div></div>').addTo(map);
    } else {
        iconVTBO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTBO.setIcon(iconVTBO).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUW --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUW) {
        var txtHeader = MetarTextCheckWX.VTUW[0].observed;
        var txtMetar = MetarTextCheckWX.VTUW[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUW[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUW = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUW = txtIcon;
    } else {
        ContentIconTextVTUW = 'NIL';
        ContentMetarTextVTUW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUW) {
        var txtHeader = TafTextCheckWX.VTUW[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUW[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUW[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUW = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUW = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUW != 'NIL') {
        iconVTUW = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUW.setIcon(iconVTUW).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUW + '<hr>' + ContentTafTextVTUW + '</div></div>').addTo(map);
    } else {
        iconVTUW = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUW.setIcon(iconVTUW).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUQ --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUQ) {
        var txtHeader = MetarTextCheckWX.VTUQ[0].observed;
        var txtMetar = MetarTextCheckWX.VTUQ[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUQ[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUQ = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUQ = txtIcon;
    } else {
        ContentIconTextVTUQ = 'NIL';
        ContentMetarTextVTUQ = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUQ) {
        var txtHeader = TafTextCheckWX.VTUQ[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUQ[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUQ[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUQ = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUQ = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUQ != 'NIL') {
        iconVTUQ = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUQ.setIcon(iconVTUQ).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUQ + '<hr>' + ContentTafTextVTUQ + '</div></div>').addTo(map);
    } else {
        iconVTUQ = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUQ.setIcon(iconVTUQ).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSF --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSF) {
        var txtHeader = MetarTextCheckWX.VTSF[0].observed;
        var txtMetar = MetarTextCheckWX.VTSF[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSF[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSF = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSF = txtIcon;
    } else {
        ContentIconTextVTSF = 'NIL';
        ContentMetarTextVTSF = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSF) {
        var txtHeader = TafTextCheckWX.VTSF[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSF[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSF[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSF = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSF = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSF != 'NIL') {
        iconVTSF = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSF.setIcon(iconVTSF).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSF + '<hr>' + ContentTafTextVTSF + '</div></div>').addTo(map);
    } else {
        iconVTSF = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSF.setIcon(iconVTSF).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSC --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSC) {
        var txtHeader = MetarTextCheckWX.VTSC[0].observed;
        var txtMetar = MetarTextCheckWX.VTSC[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSC[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSC = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSC = txtIcon;
    } else {
        ContentIconTextVTSC = 'NIL';
        ContentMetarTextVTSC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSC) {
        var txtHeader = TafTextCheckWX.VTSC[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSC[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSC[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSC = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSC = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSC != 'NIL') {
        iconVTSC = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSC.setIcon(iconVTSC).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSC + '<hr>' + ContentTafTextVTSC + '</div></div>').addTo(map);
    } else {
        iconVTSC = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSC.setIcon(iconVTSC).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCN --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCN) {
        var txtHeader = MetarTextCheckWX.VTCN[0].observed;
        var txtMetar = MetarTextCheckWX.VTCN[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCN[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCN = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCN = txtIcon;
    } else {
        ContentIconTextVTCN = 'NIL';
        ContentMetarTextVTCN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCN) {
        var txtHeader = TafTextCheckWX.VTCN[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCN[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCN[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCN = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCN = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCN != 'NIL') {
        iconVTCN = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCN.setIcon(iconVTCN).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCN + '<hr>' + ContentTafTextVTCN + '</div></div>').addTo(map);
    } else {
        iconVTCN = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCN.setIcon(iconVTCN).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUO) {
        var txtHeader = MetarTextCheckWX.VTUO[0].observed;
        var txtMetar = MetarTextCheckWX.VTUO[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUO[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUO = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUO = txtIcon;
    } else {
        ContentIconTextVTUO = 'NIL';
        ContentMetarTextVTUO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUO) {
        var txtHeader = TafTextCheckWX.VTUO[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUO[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUO[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUO = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUO != 'NIL') {
        iconVTUO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUO.setIcon(iconVTUO).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUO + '<hr>' + ContentTafTextVTUO + '</div></div>').addTo(map);
    } else {
        iconVTUO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUO.setIcon(iconVTUO).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPH --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTPH) {
        var txtHeader = MetarTextCheckWX.VTPH[0].observed;
        var txtMetar = MetarTextCheckWX.VTPH[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTPH[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTPH = HeaderMetarText + BodyMetarText;
        ContentIconTextVTPH = txtIcon;
    } else {
        ContentIconTextVTPH = 'NIL';
        ContentMetarTextVTPH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTPH) {
        var txtHeader = TafTextCheckWX.VTPH[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTPH[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTPH[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTPH = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTPH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTPH != 'NIL') {
        iconVTPH = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPH.setIcon(iconVTPH).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTPH + '<hr>' + ContentTafTextVTPH + '</div></div>').addTo(map);
    } else {
        iconVTPH = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPH.setIcon(iconVTPH).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTPP) {
        var txtHeader = MetarTextCheckWX.VTPP[0].observed;
        var txtMetar = MetarTextCheckWX.VTPP[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTPP[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTPP = HeaderMetarText + BodyMetarText;
        ContentIconTextVTPP = txtIcon;
    } else {
        ContentIconTextVTPP = 'NIL';
        ContentMetarTextVTPP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTPP) {
        var txtHeader = TafTextCheckWX.VTPP[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTPP[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTPP[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTPP = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTPP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTPP != 'NIL') {
        iconVTPP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPP.setIcon(iconVTPP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTPP + '<hr>' + ContentTafTextVTPP + '</div></div>').addTo(map);
    } else {
        iconVTPP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPP.setIcon(iconVTPP).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCP) {
        var txtHeader = MetarTextCheckWX.VTCP[0].observed;
        var txtMetar = MetarTextCheckWX.VTCP[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCP[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCP = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCP = txtIcon;
    } else {
        ContentIconTextVTCP = 'NIL';
        ContentMetarTextVTCP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCP) {
        var txtHeader = TafTextCheckWX.VTCP[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCP[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCP[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCP = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCP = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCP != 'NIL') {
        iconVTCP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCP.setIcon(iconVTCP).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCP + '<hr>' + ContentTafTextVTCP + '</div></div>').addTo(map);
    } else {
        iconVTCP = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCP.setIcon(iconVTCP).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCH --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCH) {
        var txtHeader = MetarTextCheckWX.VTCH[0].observed;
        var txtMetar = MetarTextCheckWX.VTCH[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCH[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCH = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCH = txtIcon;
    } else {
        ContentIconTextVTCH = 'NIL';
        ContentMetarTextVTCH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCH) {
        var txtHeader = TafTextCheckWX.VTCH[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCH[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCH[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCH = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCH = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCH != 'NIL') {
        iconVTCH = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCH.setIcon(iconVTCH).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCH + '<hr>' + ContentTafTextVTCH + '</div></div>').addTo(map);
    } else {
        iconVTCH = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCH.setIcon(iconVTCH).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUV --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUV) {
        var txtHeader = MetarTextCheckWX.VTUV[0].observed;
        var txtMetar = MetarTextCheckWX.VTUV[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUV[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUV = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUV = txtIcon;
    } else {
        ContentIconTextVTUV = 'NIL';
        ContentMetarTextVTUV = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUV) {
        var txtHeader = TafTextCheckWX.VTUV[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUV[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUV[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUV = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUV = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUV != 'NIL') {
        iconVTUV = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUV.setIcon(iconVTUV).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUV + '<hr>' + ContentTafTextVTUV + '</div></div>').addTo(map);
    } else {
        iconVTUV = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUV.setIcon(iconVTUV).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSR --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSR) {
        var txtHeader = MetarTextCheckWX.VTSR[0].observed;
        var txtMetar = MetarTextCheckWX.VTSR[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSR[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSR = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSR = txtIcon;
    } else {
        ContentIconTextVTSR = 'NIL';
        ContentMetarTextVTSR = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSR) {
        var txtHeader = TafTextCheckWX.VTSR[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSR[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSR[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSR = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSR = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSR != 'NIL') {
        iconVTSR = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSR.setIcon(iconVTSR).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSR + '<hr>' + ContentTafTextVTSR + '</div></div>').addTo(map);
    } else {
        iconVTSR = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSR.setIcon(iconVTSR).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUL --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUL) {
        var txtHeader = MetarTextCheckWX.VTUL[0].observed;
        var txtMetar = MetarTextCheckWX.VTUL[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUL[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUL = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUL = txtIcon;
    } else {
        ContentIconTextVTUL = 'NIL';
        ContentMetarTextVTUL = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUL) {
        var txtHeader = TafTextCheckWX.VTUL[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUL[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUL[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUL = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUL = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUL != 'NIL') {
        iconVTUL = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUL.setIcon(iconVTUL).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUL + '<hr>' + ContentTafTextVTUL + '</div></div>').addTo(map);
    } else {
        iconVTUL = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUL.setIcon(iconVTUL).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCL --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTCL) {
        var txtHeader = MetarTextCheckWX.VTCL[0].observed;
        var txtMetar = MetarTextCheckWX.VTCL[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTCL[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTCL = HeaderMetarText + BodyMetarText;
        ContentIconTextVTCL = txtIcon;
    } else {
        ContentIconTextVTCL = 'NIL';
        ContentMetarTextVTCL = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTCL) {
        var txtHeader = TafTextCheckWX.VTCL[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTCL[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTCL[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTCL = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTCL = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTCL != 'NIL') {
        iconVTCL = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCL.setIcon(iconVTCL).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTCL + '<hr>' + ContentTafTextVTCL + '</div></div>').addTo(map);
    } else {
        iconVTCL = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTCL.setIcon(iconVTCL).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUI --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUI) {
        var txtHeader = MetarTextCheckWX.VTUI[0].observed;
        var txtMetar = MetarTextCheckWX.VTUI[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUI[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUI = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUI = txtIcon;
    } else {
        ContentIconTextVTUI = 'NIL';
        ContentMetarTextVTUI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUI) {
        var txtHeader = TafTextCheckWX.VTUI[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUI[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUI[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUI = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUI = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUI != 'NIL') {
        iconVTUI = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUI.setIcon(iconVTUI).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUI + '<hr>' + ContentTafTextVTUI + '</div></div>').addTo(map);
    } else {
        iconVTUI = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUI.setIcon(iconVTUI).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSM --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSM) {
        var txtHeader = MetarTextCheckWX.VTSM[0].observed;
        var txtMetar = MetarTextCheckWX.VTSM[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSM[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSM = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSM = txtIcon;
    } else {
        ContentIconTextVTSM = 'NIL';
        ContentMetarTextVTSM = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSM) {
        var txtHeader = TafTextCheckWX.VTSM[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSM[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSM[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSM = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSM = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSM != 'NIL') {
        iconVTSM = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSM.setIcon(iconVTSM).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSM + '<hr>' + ContentTafTextVTSM + '</div></div>').addTo(map);
    } else {
        iconVTSM = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSM.setIcon(iconVTSM).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSB --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTSB) {
        var txtHeader = MetarTextCheckWX.VTSB[0].observed;
        var txtMetar = MetarTextCheckWX.VTSB[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTSB[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTSB = HeaderMetarText + BodyMetarText;
        ContentIconTextVTSB = txtIcon;
    } else {
        ContentIconTextVTSB = 'NIL';
        ContentMetarTextVTSB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTSB) {
        var txtHeader = TafTextCheckWX.VTSB[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTSB[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTSB[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTSB = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTSB = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTSB != 'NIL') {
        iconVTSB = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSB.setIcon(iconVTSB).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTSB + '<hr>' + ContentTafTextVTSB + '</div></div>').addTo(map);
    } else {
        iconVTSB = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTSB.setIcon(iconVTSB).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTPO) {
        var txtHeader = MetarTextCheckWX.VTPO[0].observed;
        var txtMetar = MetarTextCheckWX.VTPO[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTPO[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTPO = HeaderMetarText + BodyMetarText;
        ContentIconTextVTPO = txtIcon;
    } else {
        ContentIconTextVTPO = 'NIL';
        ContentMetarTextVTPO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTPO) {
        var txtHeader = TafTextCheckWX.VTPO[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTPO[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTPO[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTPO = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTPO = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTPO != 'NIL') {
        iconVTPO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPO.setIcon(iconVTPO).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTPO + '<hr>' + ContentTafTextVTPO + '</div></div>').addTo(map);
    } else {
        iconVTPO = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTPO.setIcon(iconVTPO).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUD --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUD) {
        var txtHeader = MetarTextCheckWX.VTUD[0].observed;
        var txtMetar = MetarTextCheckWX.VTUD[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUD[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUD = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUD = txtIcon;
    } else {
        ContentIconTextVTUD = 'NIL';
        ContentMetarTextVTUD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUD) {
        var txtHeader = TafTextCheckWX.VTUD[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUD[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUD[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUD = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUD = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUD != 'NIL') {
        iconVTUD = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUD.setIcon(iconVTUD).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUD + '<hr>' + ContentTafTextVTUD + '</div></div>').addTo(map);
    } else {
        iconVTUD = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUD.setIcon(iconVTUD).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUU --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarTextCheckWX.VTUU) {
        var txtHeader = MetarTextCheckWX.VTUU[0].observed;
        var txtMetar = MetarTextCheckWX.VTUU[0].raw_text;
        var txtIcon = MetarTextCheckWX.VTUU[0].flight_category;

        if (txtMetar.search(/BECMG/g) > -1) {
            var position = txtMetar.search(/BECMG/g);
            txtMetar = txtMetar.substring(0, position);
        }

        if (txtMetar.search(/TEMPO/g) > -1) {
            var position = txtMetar.search(/TEMPO/g);
            txtMetar = txtMetar.substring(0, position);
        }

        var HeaderMetarText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : ' + txtHeader + '</span></h6>';
        var BodyMetarText = '<p class="card-text mb-0"><small>' + txtMetar + '</small></p>';
        ContentMetarTextVTUU = HeaderMetarText + BodyMetarText;
        ContentIconTextVTUU = txtIcon;
    } else {
        ContentIconTextVTUU = 'NIL';
        ContentMetarTextVTUU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">METAR : NIL</span></h6>';
    }

    if (TafTextCheckWX.VTUU) {
        var txtHeader = TafTextCheckWX.VTUU[0].timestamp.bulletin + ' - ' + TafTextCheckWX.VTUU[0].timestamp.to;
        var txtTaf = TafTextCheckWX.VTUU[0].raw_text;
        var txtArray = txtTaf.split(" ");
        var newTxtTaf = '';
        $.each(txtArray, function (index, value) {
            if (value == 'BECMG') {
                newTxtTaf += "<br>" + value + " ";
            } else if (value == 'TEMPO') {
                newTxtTaf += "<br>" + value + " ";
            } else {
                newTxtTaf += value + " ";
            }
        });

        var HeaderTafText = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : ' + txtHeader + '</span></h6>';
        var BodyTafText = '<p class="card-text mb-0"><small>' + newTxtTaf + '</small></p>';
        ContentTafTextVTUU = HeaderTafText + BodyTafText;
    } else {
        ContentTafTextVTUU = '<h6 class="card-subtitle mb-1 text-muted fw-bolder">TAF : NIL</span></h6>';
    }

    if (ContentIconTextVTUU != 'NIL') {
        iconVTUU = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUU.setIcon(iconVTUU).bindTooltip('<div class="card m-0"><div class="card-body p-2 m-0">' + ContentMetarTextVTUU + '<hr>' + ContentTafTextVTUU + '</div></div>').addTo(map);
    } else {
        iconVTUU = L.icon({
            iconUrl: 'assets/images/metar/' + txtIcon + '.png',
            iconSize: [15, 15]
        });
        markerVTUU.setIcon(iconVTUU).addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

function getMetarSymbolCheckWX(MetarSymbolCheckWX) {
    /* VTBD --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTBD) {
        var txtMetar = MetarSymbolCheckWX.VTBD[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTBD = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTBD.setIcon(iconVTBD).unbindTooltip().addTo(map);
    } else {
        iconVTBD = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTBD.setIcon(iconVTBD).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTBS --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTBS) {
        var txtMetar = MetarSymbolCheckWX.VTBS[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTBS = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTBS.setIcon(iconVTBS).unbindTooltip().addTo(map);
    } else {
        iconVTBS = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTBS.setIcon(iconVTBS).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCC --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCC) {
        var txtMetar = MetarSymbolCheckWX.VTCC[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCC = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCC.setIcon(iconVTCC).unbindTooltip().addTo(map);
    } else {
        iconVTCC = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCC.setIcon(iconVTCC).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCT --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCT) {
        var txtMetar = MetarSymbolCheckWX.VTCT[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCT = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCT.setIcon(iconVTCT).unbindTooltip().addTo(map);
    } else {
        iconVTCT = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCT.setIcon(iconVTCT).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSP) {
        var txtMetar = MetarSymbolCheckWX.VTSP[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSP = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSP.setIcon(iconVTSP).unbindTooltip().addTo(map);
    } else {
        iconVTSP = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSP.setIcon(iconVTSP).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSS --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSS) {
        var txtMetar = MetarSymbolCheckWX.VTSS[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSS = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSS.setIcon(iconVTSS).unbindTooltip().addTo(map);
    } else {
        iconVTSS = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSS.setIcon(iconVTSS).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSG --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSG) {
        var txtMetar = MetarSymbolCheckWX.VTSG[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSG = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSG.setIcon(iconVTSG).unbindTooltip().addTo(map);
    } else {
        iconVTSG = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSG.setIcon(iconVTSG).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUK --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUK) {
        var txtMetar = MetarSymbolCheckWX.VTUK[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUK = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUK.setIcon(iconVTUK).unbindTooltip().addTo(map);
    } else {
        iconVTUK = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUK.setIcon(iconVTUK).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSE --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSE) {
        var txtMetar = MetarSymbolCheckWX.VTSE[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSE = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSE.setIcon(iconVTSE).unbindTooltip().addTo(map);
    } else {
        iconVTSE = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSE.setIcon(iconVTSE).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPM --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTPM) {
        var txtMetar = MetarSymbolCheckWX.VTPM[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTPM = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTPM.setIcon(iconVTPM).unbindTooltip().addTo(map);
    } else {
        iconVTPM = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTPM.setIcon(iconVTPM).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTST --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTST) {
        var txtMetar = MetarSymbolCheckWX.VTST[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTST = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTST.setIcon(iconVTST).unbindTooltip().addTo(map);
    } else {
        iconVTST = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTST.setIcon(iconVTST).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTBO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTBO) {
        var txtMetar = MetarSymbolCheckWX.VTBO[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTBO = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTBO.setIcon(iconVTBO).unbindTooltip().addTo(map);
    } else {
        iconVTBO = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTBO.setIcon(iconVTBO).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUW --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUW) {
        var txtMetar = MetarSymbolCheckWX.VTUW[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUW = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUW.setIcon(iconVTUW).unbindTooltip().addTo(map);
    } else {
        iconVTUW = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUW.setIcon(iconVTUW).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUQ --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUQ) {
        var txtMetar = MetarSymbolCheckWX.VTUQ[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUQ = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUQ.setIcon(iconVTUQ).unbindTooltip().addTo(map);
    } else {
        iconVTUQ = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUQ.setIcon(iconVTUQ).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSF --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSF) {
        var txtMetar = MetarSymbolCheckWX.VTSF[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSF = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSF.setIcon(iconVTSF).unbindTooltip().addTo(map);
    } else {
        iconVTSF = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSF.setIcon(iconVTSF).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSC --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSC) {
        var txtMetar = MetarSymbolCheckWX.VTSC[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSC = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSC.setIcon(iconVTSC).unbindTooltip().addTo(map);
    } else {
        iconVTSC = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSC.setIcon(iconVTSC).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCN --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCN) {
        var txtMetar = MetarSymbolCheckWX.VTCN[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCN = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCN.setIcon(iconVTCN).unbindTooltip().addTo(map);
    } else {
        iconVTCN = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCN.setIcon(iconVTCN).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUO) {
        var txtMetar = MetarSymbolCheckWX.VTUO[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUO = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUO.setIcon(iconVTUO).unbindTooltip().addTo(map);
    } else {
        iconVTUO = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUO.setIcon(iconVTUO).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPH --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTPH) {
        var txtMetar = MetarSymbolCheckWX.VTPH[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTPH = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTPH.setIcon(iconVTPH).unbindTooltip().addTo(map);
    } else {
        iconVTPH = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTPH.setIcon(iconVTPH).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTPP) {
        var txtMetar = MetarSymbolCheckWX.VTPP[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTPP = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTPP.setIcon(iconVTPP).unbindTooltip().addTo(map);
    } else {
        iconVTPP = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTPP.setIcon(iconVTPP).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCP --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCP) {
        var txtMetar = MetarSymbolCheckWX.VTCP[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCP = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCP.setIcon(iconVTCP).unbindTooltip().addTo(map);
    } else {
        iconVTCP = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCP.setIcon(iconVTCP).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCH --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCH) {
        var txtMetar = MetarSymbolCheckWX.VTCH[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCH = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCH.setIcon(iconVTCH).unbindTooltip().addTo(map);
    } else {
        iconVTCH = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCH.setIcon(iconVTCH).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUV --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUV) {
        var txtMetar = MetarSymbolCheckWX.VTUV[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUV = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUV.setIcon(iconVTUV).unbindTooltip().addTo(map);
    } else {
        iconVTUV = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUV.setIcon(iconVTUV).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSR --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSR) {
        var txtMetar = MetarSymbolCheckWX.VTSR[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }
        iconVTSR = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSR.setIcon(iconVTSR).unbindTooltip().addTo(map);
    } else {
        iconVTSR = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSR.setIcon(iconVTSR).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUL --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUL) {
        var txtMetar = MetarSymbolCheckWX.VTUL[0];
        var ww, cc, wd;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUL = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUL.setIcon(iconVTUL).unbindTooltip().addTo(map);
    } else {
        iconVTUL = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUL.setIcon(iconVTUL).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTCL --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTCL) {
        var txtMetar = MetarSymbolCheckWX.VTCL[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTCL = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTCL.setIcon(iconVTCL).unbindTooltip().addTo(map);
    } else {
        iconVTCL = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTCL.setIcon(iconVTCL).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUI --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUI) {
        var txtMetar = MetarSymbolCheckWX.VTUI[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUI = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUI.setIcon(iconVTUI).unbindTooltip().addTo(map);
    } else {
        iconVTUI = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUI.setIcon(iconVTUI).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSM --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSM) {
        var txtMetar = MetarSymbolCheckWX.VTSM[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSM = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSM.setIcon(iconVTSM).unbindTooltip().addTo(map);
    } else {
        iconVTSM = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSM.setIcon(iconVTSM).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTSB --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTSB) {
        var txtMetar = MetarSymbolCheckWX.VTSB[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTSB = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTSB.setIcon(iconVTSB).unbindTooltip().addTo(map);
    } else {
        iconVTSB = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTSB.setIcon(iconVTSB).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTPO --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTPO) {
        var txtMetar = MetarSymbolCheckWX.VTPO[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTPO = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTPO.setIcon(iconVTPO).unbindTooltip().addTo(map);
    } else {
        iconVTPO = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTPO.setIcon(iconVTPO).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUD --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUD) {
        var txtMetar = MetarSymbolCheckWX.VTUD[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUD = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUD.setIcon(iconVTUD).unbindTooltip().addTo(map);
    } else {
        iconVTUD = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUD.setIcon(iconVTUD).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* VTUU --------------------------------------------------------------------------------------------------------------------------------------------------------- */
    if (MetarSymbolCheckWX.VTUU) {
        var txtMetar = MetarSymbolCheckWX.VTUU[0];
        var ww, cc, wd, ws;
        if (txtMetar.conditions) {
            ww = txtMetar.conditions[0].code;
        } else {
            ww = '';
        }

        if (txtMetar.raw_text.search("OVC") > -1) {
            cc = 8;
        } else if (txtMetar.raw_text.search("BKN") > -1) {
            cc = 6;
        } else if (txtMetar.raw_text.search("SCT") > -1) {
            cc = 4;
        } else if (txtMetar.raw_text.search("FEW") > -1) {
            cc = 2;
        } else {
            cc = 0;
        }

        if (txtMetar.wind) {
            wd = txtMetar.wind.degrees;
            ws = txtMetar.wind.speed_kts;
        } else {
            wd = 0;
            ws = 0;
        }

        iconVTUU = new L.metarIcon({
            windDirection: wd,
            windSpeed: ws,
            temp: txtMetar.temperature.celsius,
            dewpoint: txtMetar.dewpoint.celsius,
            visibility: Math.round(txtMetar.visibility.miles_float),
            cloud: cc,
            pressure: txtMetar.barometer.hpa,
            weather: ww,
            rtaf: false
        });

        markerVTUU.setIcon(iconVTUU).unbindTooltip().addTo(map);
    } else {
        iconVTUU = new L.metarIcon({
            weather: 'NIL'
        });
        markerVTUU.setIcon(iconVTUU).unbindTooltip().addTo(map);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

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
}

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
}

function ResetMetarTextCheckWX() {
    map.removeLayer(markerVTBD);
    map.removeLayer(markerVTBS);
    map.removeLayer(markerVTCC);
    map.removeLayer(markerVTCT);
    map.removeLayer(markerVTSP);
    map.removeLayer(markerVTSS);
    map.removeLayer(markerVTSG);
    map.removeLayer(markerVTUK);
    map.removeLayer(markerVTSE);
    map.removeLayer(markerVTPM);
    map.removeLayer(markerVTST);
    map.removeLayer(markerVTBO);
    map.removeLayer(markerVTUW);
    map.removeLayer(markerVTUQ);
    map.removeLayer(markerVTSF);
    map.removeLayer(markerVTSC);
    map.removeLayer(markerVTCN);
    map.removeLayer(markerVTUO);
    map.removeLayer(markerVTPH);
    map.removeLayer(markerVTPP);
    map.removeLayer(markerVTCP);
    map.removeLayer(markerVTCH);
    map.removeLayer(markerVTUV);
    map.removeLayer(markerVTSR);
    map.removeLayer(markerVTUL);
    map.removeLayer(markerVTCL);
    map.removeLayer(markerVTUI);
    map.removeLayer(markerVTSM);
    map.removeLayer(markerVTSB);
    map.removeLayer(markerVTPO);
    map.removeLayer(markerVTUD);
    map.removeLayer(markerVTUU);
}

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