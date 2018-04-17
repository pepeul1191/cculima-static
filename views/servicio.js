var tablaServicio = new Grid();

var ServicioView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/servicio.html',
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
		tablaServicio.BorrarTable();
   	var ajax_dao_servicio = new AjaxPython();
   	ajax_dao_servicio.Constructor("GET", BASE_URL + "servicio/listar", "", false);
   	tablaServicio.SetTableId("tablaServicio");
   	tablaServicio.SetTableObj("tablaServicio");
   	tablaServicio.SetTableHeader(servicio_array_json_th);
   	tablaServicio.SetTableBody(servicio_array_json_td, servicio_array_json_btn_td, ajax_dao_servicio);
   	tablaServicio.SetTableFooter(servicio_array_json_btn, false);
   	tablaServicio.SetLabelMensaje("#txtMensajeRpta");
   	tablaServicio.SetURLGuardar(BASE_URL + "servicio/guardar");
   	tablaServicio.MostrarTable();
	}
});
