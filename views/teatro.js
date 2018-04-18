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
		tablaTeatro.BorrarTable();
   	var ajax_dao_teatro = new AjaxPython();
   	ajax_dao_teatro.Constructor("GET", BASE_URL + "teatro/listar", "", false);
   	tablaTeatro.SetTableId("tablaTeatro");
   	tablaTeatro.SetTableObj("tablaTeatro");
   	tablaTeatro.SetTableHeader(teatro_array_json_th);
   	tablaTeatro.SetTableBody(teatro_array_json_td, teatro_array_json_btn_td, ajax_dao_teatro);
   	tablaTeatro.SetTableFooter(teatro_array_json_btn, false);
   	tablaTeatro.SetLabelMensaje("#txtMensajeRpta");
   	tablaTeatro.SetURLGuardar(BASE_URL + "teatro/guardar");
   	tablaTeatro.MostrarTable();
	}
});
