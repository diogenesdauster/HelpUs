// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function showDetails(e) {
	var instituto = Alloy.Collections.institutos.get(e.rowData.identificador);
	var ctrl = Alloy.createController('institutoDetails', instituto);
	$.institutosTab.open(ctrl.getView());
}
