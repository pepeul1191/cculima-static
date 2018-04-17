var tabladStandUp = new Grid();

var StandUpView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/stand_up.html',
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
		tabladStandUp.BorrarTable();
   	var ajax_dao_alumno = new AjaxPython();
   	ajax_dao_alumno.Constructor("GET", BASE_URL + "alumno/listar", "", false);
   	tabladStandUp.SetTableId("tabladStandUp");
   	tabladStandUp.SetTableObj("tabladStandUp");
   	tabladStandUp.SetTableHeader(alumno_array_json_th);
   	tabladStandUp.SetTableBody(alumno_array_json_td, alumno_array_json_btn_td, ajax_dao_alumno);
   	tabladStandUp.SetTableFooter(alumno_array_json_btn, false);
   	tabladStandUp.SetLabelMensaje("#txtMensajeRpta");
   	tabladStandUp.SetURLGuardar(BASE_URL + "alumno/guardar");
   	tabladStandUp.MostrarTable();
    */
	}
});
