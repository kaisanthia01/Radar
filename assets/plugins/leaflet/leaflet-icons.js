/* METAR ICON */
L.MetarIcon = L.Icon.extend({
    // OPTIONS
    options: {
        iconSize: new L.Point(100, 100),
        className: "leaflet-boat-icon",
        wind: true,
        windDirection: 0,
        windSpeed: 0,
        temp: 0,
        dewpoint: 0,
        visibility: 0,
        cloud: 0,
        pressure: '',
        weather: '',
        rtaf: true

    },

    // PROPERTIES
    x: 66,
    y: 85,
    ctx: null,
    lastHeading: 0,
    lastWindDirection: 0,

    // CREATE ICON
    // setup the icon and start drawing
    createIcon: function () {
        var e = document.createElement("canvas");
        this._setIconStyles(e, "icon");
        var s = this.options.iconSize;
        e.width = s.x;
        e.height = s.y;
        this.lastHeading = 0; // reset in case the marker is removed and added again

        this.ctx = e.getContext("2d");
        this.draw(this.ctx, s.x, s.y);

        return e;
    },

    //สร้างรูป icons
    draw: function (ctx, w, h) {
        if (!ctx) return;
        var x = this.x;
        var y = this.y;

        ctx.clearRect(0, 0, w, h);
        ctx.translate(w / 2, h / 2);
        //ctx.rotate(this.options.course * Math.PI / 180);
        ctx.translate(-w / 2, -h / 2);

        if (this.options.weather != 'NIL') {
            /* 
             * สร้างจำนวนเมฆปกคลุม
             */
            if (this.options.cloud >= 8 && this.options.rtaf == true) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 7) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = 'white';
                ctx.fillRect((w / 2) - 2.5, (h / 2) - 10, 5, 20);
                ctx.stroke();
                ctx.closePath();

            } else if (this.options.cloud == 6) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo((w / 2), (h / 2));
                ctx.lineTo(50, 60);
                ctx.lineTo(40, 50);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc((w / 2), (h / 2), 10, 0.5 * Math.PI, 1 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();


                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 5) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(40, 50);
                ctx.lineTo(50, 50);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 4) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 3) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.fillStyle = "#000000";
                ctx.fillRect((w / 2) - 1.5, (h / 2) - 10, 2, 20);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo((w / 2), (h / 2) - 10);
                ctx.lineTo(50, 50);
                ctx.lineTo(60, 50);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc((w / 2) - 1, (h / 2), 10, 1.5 * Math.PI, 0 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 2) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo((w / 2), (h / 2) - 10);
                ctx.lineTo(50, 50);
                ctx.lineTo(60, 50);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc((w / 2) - 1, (h / 2), 10, 1.5 * Math.PI, 0 * Math.PI);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 1) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                //ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = "#000000";
                ctx.fillRect((w / 2) - 2.5, (h / 2) - 10, 5, 20);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.cloud == 0) {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
                ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            } else {
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(42.5, 42.5);
                ctx.lineTo(55, 57.5);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(57, 42);
                ctx.lineTo(42, 57);
                ctx.stroke();
                ctx.closePath();
            }

            /* 
             * -------------------------------------------------------------------
             */

            /* 
             * สร้างข้อมูลข่าวอากาศ
             */
            ctx.fillStyle = 'black';
            ctx.font = "bolder 10px Arial";

            // Show the different textAlign values
            ctx.fillText(this.options.temp, (w / 2) - 25, (h / 2) - 10);
            if (this.options.visibility == 28) {
                ctx.fillText('7', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 27) {
                ctx.fillText('6', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 26) {
                ctx.fillText('5', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 25) {
                ctx.fillText('4', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 24) {
                ctx.fillText('3', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 23) {
                ctx.fillText("2", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 22) {
                ctx.fillText("2", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("2", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 21) {
                ctx.fillText("2", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 20) {
                ctx.fillText('2', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 19) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("7", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 18) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 17) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("5", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 16) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("2", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 15) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 14) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 13) {
                ctx.fillText("1", (w / 2) - 27.5, (h / 2) + 5);
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 12) {
                ctx.fillText('1', (w / 2) - 25, (h / 2) + 5);
            } else if (this.options.visibility == 11) {
                ctx.fillText("7", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 10) {
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 9) {
                ctx.fillText("5", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 8) {
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("2", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 7) {
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 6) {
                ctx.fillText("5", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("16", (w / 2) - 22, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 5) {
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("4", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 4) {
                ctx.fillText("3", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("16", (w / 2) - 22, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 3) {
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("8", (w / 2) - 19.5, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else if (this.options.visibility == 2) {
                ctx.fillText("1", (w / 2) - 20, (h / 2) - 1);
                ctx.fillText("16", (w / 2) - 22, (h / 2) + 10);
                ctx.beginPath();
                ctx.moveTo((w / 2) - 12.5, (h / 2) - 2.5);
                ctx.lineTo((w / 2) - 22.5, (h / 2) + 5);
                ctx.stroke();
                ctx.closePath();
            } else {
                ctx.fillText('0', (w / 2) - 25, (h / 2) + 5);
            }

            ctx.fillText(this.options.dewpoint, (w / 2) - 25, (h / 2) + 20);

            ctx.font = "bolder 10px Arial";
            ctx.fillText(this.options.pressure, (w / 2) + 15, (h / 2) - 10);

            ctx.fillStyle = 'red';
            ctx.font = "bolder 10px Arial";
            ctx.fillText(this.options.weather, (w / 2) + 15, (h / 2) + 5);
            /* 
             * -------------------------------------------------------------------
             */


            /* 
             * สร้างลูกศรลม
             */
            ctx.beginPath();
            // draw wind
            if (this.options.wind == true) {

                ctx.translate(w / 2, h / 2);
                ctx.rotate(this.options.windDirection * Math.PI / 180);
                ctx.translate(-w / 2, -h / 2);

                ctx.beginPath();
                ctx.moveTo(w / 2, y - 45);
                ctx.lineTo(w / 2, y - 70);

                var center = w / 2;

                var spd = 5 * Math.round(this.options.windSpeed / 5);
                var tenLines = Math.floor(spd / 10);
                var fiveLine = ((spd % 10) > 0);

                var carriage = 70;
                for (var i = 0; i < tenLines; i++) {
                    ctx.moveTo(center, y - carriage);
                    ctx.lineTo(center + 8, y - carriage - 8);
                    carriage -= 5;
                }

                if (fiveLine) {
                    if (tenLines == 0) carriage -= 5;
                    ctx.moveTo(center, y - carriage);
                    ctx.lineTo(center + 5, y - carriage - 5);
                }

                ctx.stroke();
            }
            /* 
             * -------------------------------------------------------------------
             */
        } else {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(42.5, 42.5);
            ctx.lineTo(55, 57.5);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(57, 42);
            ctx.lineTo(42, 57);
            ctx.stroke();
            ctx.closePath();
        }

    },

    //ทิศทางลม
    setHeadingWind: function (heading, windSpeed, windDirection) {
        this.options.wind = true;

        this.options.course = (heading % 360) - this.lastHeading;
        this.lastHeading = heading % 360;

        this.options.windDirection = (windDirection % 360) - (heading % 360);
        this.lastHeading += this.options.windDirection;

        this.options.windSpeed = windSpeed;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
    },

    //ความเร็วลม
    setSpeed: function (speed) {
        this.options.speed = speed;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
    }
});

L.metarIcon = function (direction, speed) {
    return new L.MetarIcon(direction, speed);
};