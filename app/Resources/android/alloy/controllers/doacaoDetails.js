function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showMapDoacao() {
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
    $.__views.viewDados = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewDados"
    });
    $.__views.viewDados && $.addTopLevelView($.__views.viewDados);
    $.__views.fotoImageView = Ti.UI.createImageView({
        height: 150,
        width: 150,
        top: 5,
        id: "fotoImageView"
    });
    $.__views.viewDados.add($.__views.fotoImageView);
    $.__views.descricaoLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "descricaoLabel"
    });
    $.__views.viewDados.add($.__views.descricaoLabel);
    $.__views.institutoLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "institutoLabel"
    });
    $.__views.viewDados.add($.__views.institutoLabel);
    $.__views.mapButton = Ti.UI.createButton({
        title: "Local da Doação",
        id: "mapButton"
    });
    $.__views.viewDados.add($.__views.mapButton);
    showMapDoacao ? $.addListener($.__views.mapButton, "click", showMapDoacao) : __defers["$.__views.mapButton!click!showMapDoacao"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var doacao = $.args;
    $.fotoImageView.image = doacao.get("foto") ? doacao.get("foto") : "/placeholder/caixadoacoes.jpg";
    $.descricaoLabel.text = doacao.get("descricao");
    Alloy.Collections.institutos.fetch({
        query: {
            statement: "SELECT * FROM institutos WHERE alloy_id = ?",
            params: [ doacao.get("instituto") ]
        }
    });
    instituto = Alloy.Collections.institutos.at(0);
    $.institutoLabel.text = instituto ? instituto.get("nome") : "Instituto HelpUs";
    Alloy.Collections.institutos.fetch();
    __defers["$.__views.mapButton!click!showMapDoacao"] && $.addListener($.__views.mapButton, "click", showMapDoacao);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;