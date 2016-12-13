// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var instituto = $.args;

$.NomeLabel.value        = instituto.get('nome');
$.imgImageView.image     = instituto.get('img');
$.necessidadeLabel.value = instituto.get('necessidade');
$.enderecoLabel.value    = instituto.get('endereco');
$.contatoLabel.value     = instituto.get('contato');

function doar(){
	var ctrl = Alloy.createController('doar', instituto);
	ctrl.getView().open();
}
