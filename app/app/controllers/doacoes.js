// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function showDetails(e) {
	var doacao = Alloy.Collections.doacoes.get(e.rowData.identificador);
	var ctrl = Alloy.createController('doacaoDetails', doacao);
	$.doacoesTab.open(ctrl.getView());
}
