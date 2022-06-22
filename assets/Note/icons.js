/* METAR ICON */
L.MetarIcon = L.Icon.extend({

    // OPTIONS
    options: {
        iconSize: new L.Point(100, 100),
        className: "leaflet-boat-icon",
        wind: true,
        windDirection: 0,
        windSpeed: 0,
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

        e.width = s.x;
        e.height = s.y;
        this.lastHeading = 0;   // reset in case the marker is removed and added again

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
        ctx.arc(w / 2, h / 2, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.arc(w / 2, h / 2, 10, -0.5 * Math.PI, -1.5 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = 'white';
        ctx.fillRect((w / 2) - 2.5, (h / 2) - 10, 5, 20);
        ctx.stroke();
        /* 
        * -------------------------------------------------------------------
        */

        /* 
        * สร้างข้อมูลข่าวอากาศ
        */
        ctx.fillStyle = 'black';
        ctx.font = "bolder 10px Arial";

        // Show the different textAlign values
        ctx.fillText("26", (w / 2) - 25, (h / 2) - 10);
        ctx.fillText("7", (w / 2) - 25, (h / 2) + 5);
        ctx.fillText("24", (w / 2) - 25, (h / 2) + 20);

        ctx.font = "bolder 10px Arial";
        ctx.fillText("A2976", (w / 2) + 15, (h / 2) - 10);

        ctx.fillStyle = 'red';
        ctx.font = "bolder 10px Arial";
        ctx.fillText("TSRA", (w / 2) + 15, (h / 2) + 5);
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
            console.log(w / 2);
            console.log(h / 2);

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