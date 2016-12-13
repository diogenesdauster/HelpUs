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
    this.__controllerPath = "index";
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
    var __alloyId10 = [];
    $.__views.__alloyId11 = Alloy.createController("institutos", {
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId12 = Alloy.createController("doacoes", {
        id: "__alloyId12"
    });
    __alloyId10.push($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId10,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var xhr = Ti.Network.createHTTPClient();
    xhr.onerror = function(e) {
        alert(e);
    };
    xhr.onload = function() {
        var institutos = JSON.parse(this.responseText).instituicoes;
        for (var i = 0; i < institutos.length; i++) {
            var instituto = Alloy.createModel("instituto", {
                nome: institutos[i].nome,
                img: institutos[i].img,
                necessidade: institutos[i].necessidade,
                endereco: institutos[i].endereco,
                contato: institutos[i].contato
            });
            instituto.save();
            Alloy.Collections.institutos.fetch();
        }
    };
    Alloy.Collections.institutos.fetch();
    Alloy.Collections.institutos.at(0);
    xhr.open("GET", "https://raw.githubusercontent.com/disias/HelpUs/master/Json/instituicoes.json");
    xhr.send();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;