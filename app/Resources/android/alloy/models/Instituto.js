var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            nome: "string",
            img: "string",
            necessidade: "string",
            endereco: "string",
            contato: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "institutos"
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

model = Alloy.M("instituto", exports.definition, []);

collection = Alloy.C("instituto", exports.definition, model);

exports.Model = model;

exports.Collection = collection;