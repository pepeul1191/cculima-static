var tablaExposicion = new Grid();

var ExposicionView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/exposicion.html',
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
		tablaExposicion.BorrarTable();
   	var ajax_dao_exposicion = new AjaxPython();
   	ajax_dao_exposicion.Constructor("GET", BASE_URL + "exposicion/listar", "", false);
   	tablaExposicion.SetTableId("tablaExposicion");
   	tablaExposicion.SetTableObj("tablaExposicion");
   	tablaExposicion.SetTableHeader(exposicion_array_json_th);
   	tablaExposicion.SetTableBody(exposicion_array_json_td, exposicion_array_json_btn_td, ajax_dao_exposicion);
   	tablaExposicion.SetTableFooter(exposicion_array_json_btn, false);
   	tablaExposicion.SetLabelMensaje("#txtMensajeRpta");
   	tablaExposicion.SetURLGuardar(BASE_URL + "exposicion/guardar");
   	tablaExposicion.MostrarTable();
	}
});
