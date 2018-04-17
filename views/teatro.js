var tablaTeatro = new Grid();

var TeatroView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/teatro.html',
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
		tablaTeatro.BorrarTable();
   	var ajax_dao_alumno = new AjaxPython();
   	ajax_dao_alumno.Constructor("GET", BASE_URL + "alumno/listar", "", false);
   	tablaTeatro.SetTableId("tablaTeatro");
   	tablaTeatro.SetTableObj("tablaTeatro");
   	tablaTeatro.SetTableHeader(alumno_array_json_th);
   	tablaTeatro.SetTableBody(alumno_array_json_td, alumno_array_json_btn_td, ajax_dao_alumno);
   	tablaTeatro.SetTableFooter(alumno_array_json_btn, false);
   	tablaTeatro.SetLabelMensaje("#txtMensajeRpta");
   	tablaTeatro.SetURLGuardar(BASE_URL + "alumno/guardar");
   	tablaTeatro.MostrarTable();
    */
	}
});
