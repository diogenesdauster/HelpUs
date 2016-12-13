function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId22(e) {
        if (e && e.fromAdapter) return;
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId14 = models[i];
            __alloyId14.__transform = _.isFunction(__alloyId14.transform) ? __alloyId14.transform() : __alloyId14.toJSON();
            var __alloyId16 = Ti.UI.createTableViewRow({
                identificador: __alloyId14.__transform.alloy_id
            });
            rows.push(__alloyId16);
            var __alloyId17 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId16.add(__alloyId17);
            var __alloyId18 = Ti.UI.createImageView({
                height: 96,
                width: 72,
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId14.__transform.img
            });
            __alloyId17.add(__alloyId18);
            var __alloyId19 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                layout: "vertical"
            });
            __alloyId17.add(__alloyId19);
            var __alloyId20 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                text: __alloyId14.__transform.nome
            });
            __alloyId19.add(__alloyId20);
        }
        $.__views.myTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "institutos";
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
    $.__views.__alloyId13 = Ti.UI.createWindow({
        id: "__alloyId13"
    });
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable"
    });
    $.__views.__alloyId13.add($.__views.myTable);
    var __alloyId21 = Alloy.Collections["institutos"] || institutos;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    $.__views.institutosTab = Ti.UI.createTab({
        title: L("Institutos"),
        window: $.__views.__alloyId13,
        id: "institutosTab"
    });
    $.__views.institutosTab && $.addTopLevelView($.__views.institutosTab);
    exports.destroy = function() {
        __alloyId21 && __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    $.args;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;