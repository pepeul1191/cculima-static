var tablaConcierto = new Grid();

var ConciertoView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/concierto.html',
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
		tablaConcierto.BorrarTable();
   	var ajax_dao_concierto = new AjaxPython();
   	ajax_dao_concierto.Constructor("GET", BASE_URL + "concierto/listar", "", false);
   	tablaConcierto.SetTableId("tablaConcierto");
   	tablaConcierto.SetTableObj("tablaConcierto");
   	tablaConcierto.SetTableHeader(concierto_array_json_th);
   	tablaConcierto.SetTableBody(concierto_array_json_td, concierto_array_json_btn_td, ajax_dao_concierto);
   	tablaConcierto.SetTableFooter(concierto_array_json_btn, false);
   	tablaConcierto.SetLabelMensaje("#txtMensajeRpta");
   	tablaConcierto.SetURLGuardar(BASE_URL + "concierto/guardar");
   	tablaConcierto.MostrarTable();
	}
});
