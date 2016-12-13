var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            descricao: "string",
            foto: "string",
            latitude: "real",
            longitude: "real",
            instituto: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "doacoes"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("doacao", exports.definition, []);

collection = Alloy.C("doacao", exports.definition, model);

exports.Model = model;

exports.Collection = collection;