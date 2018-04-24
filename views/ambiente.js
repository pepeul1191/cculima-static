var tablaAmbiente = new Grid();
var tablaAmbienteGaleria = new Grid();

var AmbienteView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/ambiente.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
		tablaAmbiente.BorrarTable();
   	var ajax_dao_ambiente = new AjaxPython();
   	ajax_dao_ambiente.Constructor("GET", BASE_URL + "ambiente/listar", "", false);
   	tablaAmbiente.SetTableId("tablaAmbiente");
   	tablaAmbiente.SetTableObj("tablaAmbiente");
   	tablaAmbiente.SetTableHeader(ambiente_array_json_th);
   	tablaAmbiente.SetTableBody(ambiente_array_json_td, ambiente_array_json_btn_td, ajax_dao_ambiente);
   	tablaAmbiente.SetTableFooter(ambiente_array_json_btn, false);
   	tablaAmbiente.SetLabelMensaje("#txtMensajeRpta");
   	tablaAmbiente.SetURLGuardar(BASE_URL + "ambiente/guardar");
   	tablaAmbiente.MostrarTable();
	},
});
