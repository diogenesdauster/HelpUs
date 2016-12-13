function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showMap() {
        var ctrl = Alloy.createController("map", doacao);
        ctrl.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "doacaoDetails";
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
    var __defers = {};
    $.__views.doacaoDetails = Ti.UI.createWindow({
        id: "doacaoDetails"
    });
    $.__views.doacaoDetails && $.addTopLevelView($.__views.doacaoDetails);
    $.__views.fotoImageView = Ti.UI.createImageView({
        id: "fotoImageView"
    });
    $.__views.doacaoDetails.add($.__views.fotoImageView);
    $.__views.descricaoLabel = Ti.UI.createLabel({
        id: "descricaoLabel"
    });
    $.__views.doacaoDetails.add($.__views.descricaoLabel);
    $.__views.institutoLabel = Ti.UI.createLabel({
        id: "institutoLabel"
    });
    $.__views.doacaoDetails.add($.__views.institutoLabel);
    $.__views.mapButton = Ti.UI.createButton({
        id: "mapButton"
    });
    $.__views.doacaoDetails.add($.__views.mapButton);
    showMap ? $.addListener($.__views.mapButton, "click", showMap) : __defers["$.__views.mapButton!click!showMap"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var doacao = $.args;
    $.fotoImageView.image = doacao.get("foto") ? doacao.get("foto") : "/placeholder/caixadoacoes.jpg";
    Alloy.Collections.institutos.fetch({
        query: {
            statement: "SELECT * FROM institutos WHERE alloy_id = ?",
            params: [ doacao.get("instituto") ]
        }
    });
    instituto = Alloy.Collections.institutos.at(0);
    $.descricaoLabel.value = instituto ? instituto.get("nome") : "Instituto HelpUs";
    __defers["$.__views.mapButton!click!showMap"] && $.addListener($.__views.mapButton, "click", showMap);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;