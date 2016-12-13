var xhr = Ti.Network.createHTTPClient();
xhr.onerror = function(e){
	alert(e);
};
xhr.onload = function(e){
	var institutos = JSON.parse(this.responseText).instituicoes;
	
	for (var i=0; i < institutos.length; i++) {
		var instituto = Alloy.createModel('instituto', {
			nome:institutos[i].nome,
			img:institutos[i].img,
			necessidade:institutos[i].necessidade,
			endereco:institutos[i].endereco,
			contato:institutos[i].contato
		});
	
	instituto.save();
	Alloy.Collections.institutos.fetch();

	};
		 
};

Alloy.Collections.doacoes.fetch();
Alloy.Collections.institutos.fetch();
var institutosModel = Alloy.Collections.institutos.at(0);

if(institutosModel){
	
}else{
	xhr.open("GET","https://raw.githubusercontent.com/disias/HelpUs/master/Json/instituicoes.json");
	xhr.send();
}

$.index.open();
