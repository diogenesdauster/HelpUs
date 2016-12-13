// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var instituto = $.args;

$.NomeLabel.text        = instituto.get('nome');
$.imgImageView.image    = instituto.get('img');
$.necessidadeLabel.text = instituto.get('necessidade');
$.enderecoLabel.text    = instituto.get('endereco');
$.contatoLabel.text     = instituto.get('contato');

function doar(){
	var ctrl = Alloy.createController('doar', instituto);
	ctrl.getView().open();
}
