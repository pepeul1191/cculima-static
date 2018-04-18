var tablaStandUp = new Grid();

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
		tablaStandUp.BorrarTable();
   	var ajax_dao_stand_up = new AjaxPython();
   	ajax_dao_stand_up.Constructor("GET", BASE_URL + "stand_up/listar", "", false);
   	tablaStandUp.SetTableId("tablaStandUp");
   	tablaStandUp.SetTableObj("tablaStandUp");
   	tablaStandUp.SetTableHeader(stand_up_array_json_th);
   	tablaStandUp.SetTableBody(stand_up_array_json_td, stand_up_array_json_btn_td, ajax_dao_stand_up);
   	tablaStandUp.SetTableFooter(stand_up_array_json_btn, false);
   	tablaStandUp.SetLabelMensaje("#txtMensajeRpta");
   	tablaStandUp.SetURLGuardar(BASE_URL + "stand_up/guardar");
   	tablaStandUp.MostrarTable();
	}
});
