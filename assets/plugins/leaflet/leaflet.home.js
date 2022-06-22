L.Control.HomeView = L.Control.Layers.extend({
    options: {
        position: 'topleft'
    },
    onAdd: function (map) {
        var container = L.DomUtil.create("div", "leaflet-control-home leaflet-bar leaflet-control");
        homeView = L.DomUtil.create("a", "leaflet-control-home-button", container);
        homeView.href = "#";
        homeView.title = "Home";
        homeView.background = "Home";
        homeView.onclick = function () {
            map.setView([13.83493614196777, 100.8463897705078], 6);
        }
        return container;
    },
});

L.Map.mergeOptions({
    homeView: false
});

L.Map.addInitHook(function () {
    if (this.options.homeView) {
        this.homeView = new L.Control.HomeView(this.options.homeView);
        this.addControl(this.homeView)
    }
});

L.control.homeview = function (options) {
    return new L.Control.HomeView(options)
};