function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1 = models[i];
            __alloyId1.__transform = _.isFunction(__alloyId1.transform) ? __alloyId1.transform() : __alloyId1.toJSON();
            var __alloyId3 = Ti.UI.createTableViewRow({
                identificador: __alloyId1.__transform.alloy_id
            });
            rows.push(__alloyId3);
            var __alloyId4 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createImageView({
                height: 96,
                width: 72,
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId1.__transform.foto
            });
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                layout: "vertical"
            });
            __alloyId4.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                text: __alloyId1.__transform.descricao
            });
            __alloyId6.add(__alloyId7);
        }
        $.__views.myTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "doacoes";
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
    $.__views.__alloyId0 = Ti.UI.createWindow({
        id: "__alloyId0"
    });
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable"
    });
    $.__views.__alloyId0.add($.__views.myTable);
    var __alloyId8 = Alloy.Collections["doacoes"] || doacoes;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    $.__views.doacoesTab = Ti.UI.createTab({
        title: L("Doacoes"),
        window: $.__views.__alloyId0,
        id: "doacoesTab"
    });
    $.__views.doacoesTab && $.addTopLevelView($.__views.doacoesTab);
    exports.destroy = function() {
        __alloyId8 && __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    $.args;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;