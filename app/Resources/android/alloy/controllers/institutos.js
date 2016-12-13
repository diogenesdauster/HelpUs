function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId26(e) {
        if (e && e.fromAdapter) return;
        __alloyId26.opts || {};
        var models = __alloyId25.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId18 = models[i];
            __alloyId18.__transform = _.isFunction(__alloyId18.transform) ? __alloyId18.transform() : __alloyId18.toJSON();
            var __alloyId20 = Ti.UI.createTableViewRow({
                identificador: __alloyId18.__transform.alloy_id
            });
            rows.push(__alloyId20);
            var __alloyId21 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId20.add(__alloyId21);
            var __alloyId22 = Ti.UI.createImageView({
                height: 96,
                width: 72,
                left: 5,
                top: 5,
                bottom: 5,
                image: __alloyId18.__transform.img
            });
            __alloyId21.add(__alloyId22);
            var __alloyId23 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                layout: "vertical"
            });
            __alloyId21.add(__alloyId23);
            var __alloyId24 = Ti.UI.createLabel({
                top: 5,
                left: 5,
                text: __alloyId18.__transform.nome
            });
            __alloyId23.add(__alloyId24);
        }
        $.__views.myTable.setData(rows);
    }
    function showDetails(e) {
        var instituto = Alloy.Collections.institutos.get(e.rowData.identificador);
        var ctrl = Alloy.createController("institutoDetails", instituto);
        $.institutosTab.open(ctrl.getView());
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
    var __defers = {};
    $.__views.__alloyId17 = Ti.UI.createWindow({
        id: "__alloyId17"
    });
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable"
    });
    $.__views.__alloyId17.add($.__views.myTable);
    var __alloyId25 = Alloy.Collections["institutos"] || institutos;
    __alloyId25.on("fetch destroy change add remove reset", __alloyId26);
    showDetails ? $.addListener($.__views.myTable, "click", showDetails) : __defers["$.__views.myTable!click!showDetails"] = true;
    $.__views.institutosTab = Ti.UI.createTab({
        title: "Institutos",
        window: $.__views.__alloyId17,
        id: "institutosTab"
    });
    $.__views.institutosTab && $.addTopLevelView($.__views.institutosTab);
    exports.destroy = function() {
        __alloyId25 && __alloyId25.off("fetch destroy change add remove reset", __alloyId26);
    };
    _.extend($, $.__views);
    $.args;
    __defers["$.__views.myTable!click!showDetails"] && $.addListener($.__views.myTable, "click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;