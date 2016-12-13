function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doar() {
        var ctrl = Alloy.createController("doar", instituto);
        ctrl.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "institutoDetails";
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
    $.__views.imgImageView = Ti.UI.createImageView({
        height: 200,
        width: 300,
        top: 5,
        id: "imgImageView"
    });
    $.__views.viewDados.add($.__views.imgImageView);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        text: "INSTITUTO",
        id: "__alloyId13"
    });
    $.__views.viewDados.add($.__views.__alloyId13);
    $.__views.NomeLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "NomeLabel"
    });
    $.__views.viewDados.add($.__views.NomeLabel);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        text: "NECESSIDADE",
        id: "__alloyId14"
    });
    $.__views.viewDados.add($.__views.__alloyId14);
    $.__views.necessidadeLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "necessidadeLabel"
    });
    $.__views.viewDados.add($.__views.necessidadeLabel);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        text: "ENDEREÇO",
        id: "__alloyId15"
    });
    $.__views.viewDados.add($.__views.__alloyId15);
    $.__views.enderecoLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "enderecoLabel"
    });
    $.__views.viewDados.add($.__views.enderecoLabel);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        text: "TELEFONE",
        id: "__alloyId16"
    });
    $.__views.viewDados.add($.__views.__alloyId16);
    $.__views.contatoLabel = Ti.UI.createLabel({
        top: 5,
        textAlign: "center",
        id: "contatoLabel"
    });
    $.__views.viewDados.add($.__views.contatoLabel);
    $.__views.doarButton = Ti.UI.createButton({
        title: "Fazer uma Doação",
        id: "doarButton"
    });
    $.__views.viewDados.add($.__views.doarButton);
    doar ? $.addListener($.__views.doarButton, "click", doar) : __defers["$.__views.doarButton!click!doar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var instituto = $.args;
    $.NomeLabel.text = instituto.get("nome");
    $.imgImageView.image = instituto.get("img");
    $.necessidadeLabel.text = instituto.get("necessidade");
    $.enderecoLabel.text = instituto.get("endereco");
    $.contatoLabel.text = instituto.get("contato");
    __defers["$.__views.doarButton!click!doar"] && $.addListener($.__views.doarButton, "click", doar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;