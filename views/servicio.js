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
    /*
		tablaServicio.BorrarTable();
   	var ajax_dao_alumno = new AjaxPython();
   	ajax_dao_alumno.Constructor("GET", BASE_URL + "alumno/listar", "", false);
   	tablaServicio.SetTableId("tablaServicio");
   	tablaServicio.SetTableObj("tablaServicio");
   	tablaServicio.SetTableHeader(alumno_array_json_th);
   	tablaServicio.SetTableBody(alumno_array_json_td, alumno_array_json_btn_td, ajax_dao_alumno);
   	tablaServicio.SetTableFooter(alumno_array_json_btn, false);
   	tablaServicio.SetLabelMensaje("#txtMensajeRpta");
   	tablaServicio.SetURLGuardar(BASE_URL + "alumno/guardar");
   	tablaServicio.MostrarTable();
    */
	}
});
