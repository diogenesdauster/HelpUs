function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function add() {
        Ti.Geolocation.hasLocationPermissions() || Ti.Geolocation.requestLocationPermissions(function(e) {
            if (e.success) {
                capture();
                return;
            }
            alert("É preciso dar permissão !!");
            return;
        });
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
        Ti.Geolocation.getCurrentPosition(function(e) {
            doacao.set("latitude", e.coords.latitude);
            doacao.set("longitude", e.coords.longitude);
            null != file && file.write(image);
            doacao.save();
            $.doar.close();
        });
    }
    function addimg() {
        Ti.Media.openPhotoGallery({
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ],
            error: function(e) {
                alert(e.message);
            },
            success: savePhoto
        });
    }
    function savePhoto(e) {
        image = e.media;
        file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, doacao.get("alloy_id") + ".jpg");
        $.imgImageView.image = image;
        doacao.set("img", file.getNativePath());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "doar";
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
    $.__views.doar = Ti.UI.createWindow({
        id: "doar"
    });
    $.__views.doar && $.addTopLevelView($.__views.doar);
    $.__views.imgImageView = Ti.UI.createImageView({
        id: "imgImageView"
    });
    $.__views.doar.add($.__views.imgImageView);
    $.__views.DescricaoTextField = Ti.UI.createTextField({
        id: "DescricaoTextField"
    });
    $.__views.doar.add($.__views.DescricaoTextField);
    $.__views.imgButton = Ti.UI.createButton({
        id: "imgButton"
    });
    $.__views.doar.add($.__views.imgButton);
    addimg ? $.addListener($.__views.imgButton, "click", addimg) : __defers["$.__views.imgButton!click!addimg"] = true;
    $.__views.addButton = Ti.UI.createButton({
        id: "addButton"
    });
    $.__views.doar.add($.__views.addButton);
    add ? $.addListener($.__views.addButton, "click", add) : __defers["$.__views.addButton!click!add"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var instituto_ = $.args;
    var doacao = Alloy.createModel("doacao", {
        descricao: "",
        img: "/placeholder/caixadoacoes.jpg",
        latitude: 0,
        longitude: 0,
        instituto: instituto_.get("alloy_id")
    });
    var file = null;
    var image = null;
    __defers["$.__views.imgButton!click!addimg"] && $.addListener($.__views.imgButton, "click", addimg);
    __defers["$.__views.addButton!click!add"] && $.addListener($.__views.addButton, "click", add);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;