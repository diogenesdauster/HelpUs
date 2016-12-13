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
                alert("Agora já sabemos onde buscar sua doação ,por favor confirme novamente para doar !!");
                return;
            }
            alert("Por favor precisamos da sua permissão , para saber onde buscar a doação!!");
            return;
        });
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
        Ti.Geolocation.getCurrentPosition(function(e) {
            Ti.API.info(e.coords);
            if (e.error) alert("Não foi possivel utilizar o GPS , por favor inicie o aplicativo do Google Maps e tente novamente  !!"); else {
                Ti.API.info(e.coords);
                doacao.set("latitude", e.coords.latitude);
                doacao.set("longitude", e.coords.longitude);
                doacao.set("descricao", $.DescricaoTextField.value);
                if (null != file) {
                    file.write(image);
                    doacao.set("foto", file.getNativePath());
                } else doacao.set("foto", "/placeholder/caixadoacoes.jpg");
                doacao.save();
                alert("Obrigado por Help Us");
                Alloy.Collections.doacoes.fetch();
                $.viewDados.close();
            }
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
    $.__views.viewDados = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewDados"
    });
    $.__views.viewDados && $.addTopLevelView($.__views.viewDados);
    $.__views.imgImageView = Ti.UI.createImageView({
        height: 150,
        width: 150,
        top: 5,
        image: "/placeholder/caixadoacoes.jpg",
        id: "imgImageView"
    });
    $.__views.viewDados.add($.__views.imgImageView);
    $.__views.DescricaoTextField = Ti.UI.createTextField({
        id: "DescricaoTextField",
        hintText: "Descrição da sua doação"
    });
    $.__views.viewDados.add($.__views.DescricaoTextField);
    $.__views.imgButton = Ti.UI.createButton({
        title: "Adicionar Imagem",
        id: "imgButton"
    });
    $.__views.viewDados.add($.__views.imgButton);
    addimg ? $.addListener($.__views.imgButton, "click", addimg) : __defers["$.__views.imgButton!click!addimg"] = true;
    $.__views.addButton = Ti.UI.createButton({
        title: "Confirma Doação",
        id: "addButton"
    });
    $.__views.viewDados.add($.__views.addButton);
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