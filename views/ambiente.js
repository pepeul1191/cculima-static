var tablaAmbiente = new Grid();

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
    /*
		tablaAmbiente.BorrarTable();
   	var ajax_dao_alumno = new AjaxPython();
   	ajax_dao_alumno.Constructor("GET", BASE_URL + "alumno/listar", "", false);
   	tablaAmbiente.SetTableId("tablaAmbiente");
   	tablaAmbiente.SetTableObj("tablaAmbiente");
   	tablaAmbiente.SetTableHeader(alumno_array_json_th);
   	tablaAmbiente.SetTableBody(alumno_array_json_td, alumno_array_json_btn_td, ajax_dao_alumno);
   	tablaAmbiente.SetTableFooter(alumno_array_json_btn, false);
   	tablaAmbiente.SetLabelMensaje("#txtMensajeRpta");
   	tablaAmbiente.SetURLGuardar(BASE_URL + "alumno/guardar");
   	tablaAmbiente.MostrarTable();
    */
	}
});
