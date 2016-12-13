function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "map";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.map = Ti.UI.createWindow({
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var doacao = $.args;
    var Map = require("ti.map");
    var doacaoAnnotation = Map.createAnnotation({
        latitude: doacao.get("latitude"),
        longitude: doacao.get("longitude"),
        title: "Busca Doação Aqui",
        pincolor: Map.ANNOTATION_RED
    });
    var map = Map.createView({
        mapType: Map.NORMAL_TYPE,
        region: {
            latitude: doacao.get("latitude"),
            longitude: doacao.get("longitude"),
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        animate: true,
        annotations: [ doacaoAnnotation ]
    });
    $.map.add(map);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;