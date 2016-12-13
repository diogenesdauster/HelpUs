// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var doacao = $.args;


var Map = require('ti.map');


var doacaoAnnotation = Map.createAnnotation({
	latitude:doacao.get('latitude'),
	longitude:doacao.get('longitude'),
	title:"Busca Doação Aqui",
	pincolor:Map.ANNOTATION_RED
});



var map = Map.createView({
	mapType:Map.NORMAL_TYPE,
	region:{
		latitude:doacao.get('latitude'),
		longitude:doacao.get('longitude'),
		latitudeDelta:0.01,
		longitudeDelta:0.01,
	},
	animate:true,
	annotations:[doacaoAnnotation]
});

$.map.add(map);
