// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var doacao = $.args;

if(doacao.get('foto')){
	$.fotoImageView.image = doacao.get('foto');	
}else{
	$.fotoImageView.image = "/placeholder/caixadoacoes.jpg";
}

$.descricaoLabel.text = doacao.get('descricao');

Alloy.Collections.institutos.fetch({
        query: {
            statement: 'SELECT * FROM institutos WHERE alloy_id = ?',
            params: [doacao.get('instituto')]
        }
    });

instituto = Alloy.Collections.institutos.at(0);

if(instituto){
	$.institutoLabel.text = instituto.get('nome'); 
}else{
	$.institutoLabel.text = "Instituto HelpUs";
}

Alloy.Collections.institutos.fetch();

function showMapDoacao(){
	var ctrl = Alloy.createController('map', doacao);
	ctrl.getView().open();
}
