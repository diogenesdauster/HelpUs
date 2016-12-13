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
    $.__views.institutoDetails = Ti.UI.createWindow({
        id: "institutoDetails"
    });
    $.__views.institutoDetails && $.addTopLevelView($.__views.institutoDetails);
    $.__views.NomeLabel = Ti.UI.createLabel({
        id: "NomeLabel"
    });
    $.__views.institutoDetails.add($.__views.NomeLabel);
    $.__views.imgImageView = Ti.UI.createImageView({
        id: "imgImageView"
    });
    $.__views.institutoDetails.add($.__views.imgImageView);
    $.__views.necessidadeLabel = Ti.UI.createLabel({
        id: "necessidadeLabel"
    });
    $.__views.institutoDetails.add($.__views.necessidadeLabel);
    $.__views.enderecoLabel = Ti.UI.createLabel({
        id: "enderecoLabel"
    });
    $.__views.institutoDetails.add($.__views.enderecoLabel);
    $.__views.contatoLabel = Ti.UI.createLabel({
        id: "contatoLabel"
    });
    $.__views.institutoDetails.add($.__views.contatoLabel);
    $.__views.doarButton = Ti.UI.createButton({
        id: "doarButton"
    });
    $.__views.institutoDetails.add($.__views.doarButton);
    doar ? $.addListener($.__views.doarButton, "click", doar) : __defers["$.__views.doarButton!click!doar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var instituto = $.args;
    $.NomeLabel.value = instituto.get("nome");
    $.imgImageView.image = instituto.get("img");
    $.necessidadeLabel.value = instituto.get("necessidade");
    $.enderecoLabel.value = instituto.get("endereco");
    $.contatoLabel.value = instituto.get("contato");
    __defers["$.__views.doarButton!click!doar"] && $.addListener($.__views.doarButton, "click", doar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;