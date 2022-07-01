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
        weather: ''

    },

    // PROPERTIES
    x: 66,
    y: 85,
    x_fac: 0.18,
    y_fac: 0.18,
    ctx: null,
    lastHeading: 0,
    lastWindDirection: 0,

    // CREATE ICON
    // setup the icon and start drawing
    createIcon: function () {
        var e = document.createElement("canvas");
        this._setIconStyles(e, "icon");
        var s = this.options.iconSize;

        //ข้อมูลข่าวสภาพอากาศ


        e.width = s.x;
        e.height = s.y;
        this.lastHeading = 0; // reset in case the marker is removed and added again

        this.ctx = e.getContext("2d");
        this.draw(this.ctx, s.x, s.y);

        return e;
    },

    // DRAW
    // renders the boat icon onto the canvas element
    draw: function (ctx, w, h) {
        if (!ctx) return;
        var x = this.x;
        var y = this.y;

        var x_fac = this.x_fac;
        var y_fac = this.y_fac;

        ctx.clearRect(0, 0, w, h);

        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.options.course * Math.PI / 180);
        ctx.translate(-w / 2, -h / 2);

        /* 
         * สร้างจำนวนเมฆปกคลุม
         */
        if (this.options.cloud == 8) {
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
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((w / 2), (h / 2));
            ctx.lineTo(50, 60);
            ctx.lineTo(40, 50);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc((w / 2), (h / 2), 10, 0.5 * Math.PI, 1 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 5) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(40, 50);
            ctx.lineTo(50, 50);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 4) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 3) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.fillRect((w / 2) - 1.5, (h / 2) - 10, 2, 20);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((w / 2), (h / 2) - 10);
            ctx.lineTo(50, 50);
            ctx.lineTo(60, 50);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc((w / 2) - 1, (h / 2), 10, 1.5 * Math.PI, 0 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 2) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((w / 2), (h / 2) - 10);
            ctx.lineTo(50, 50);
            ctx.lineTo(60, 50);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc((w / 2) - 1, (h / 2), 10, 1.5 * Math.PI, 0 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 1) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
            ctx.stroke();
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = 'black';
            ctx.fillRect((w / 2) - 2.5, (h / 2) - 10, 5, 20);
            ctx.stroke();
            ctx.closePath();
        } else if (this.options.cloud == 0) {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
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
        ctx.fillText(this.options.visibility, (w / 2) - 25, (h / 2) + 5);
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
    },

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

    // SET SPEED
    // sets the boat speed value and
    // update the boat icon accordingly
    setSpeed: function (speed) {
        this.options.speed = speed;

        var s = this.options.iconSize;
        this.draw(this.ctx, s.x, s.y);
    }
});

L.metarIcon = function (direction, speed) {
    return new L.MetarIcon(direction, speed);
};