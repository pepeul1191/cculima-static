var AmbienteDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.model = new Ambiente();
	},
	events: {
		"click #btnGuardarDetalleEvento": "guardarDetalleEvento"
	},
	render: function(context) {
		$("#btnModal").click();
		this.$el.html(this.getTemplate());
		var source = $("#ambiente-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
    CKEDITOR.replace('txtParrafoIzquierdo');
    CKEDITOR.replace('txtParrafoDerecho');
  },
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/ambiente_detalle.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
  renderCrear: function() {
    var context = {
			id: "E",
			titulo_modal: "Crear Ambiente",
		};
    this.render(context);
	},
	renderEditar: function(evento_id) {
		var evento = this.model.id(evento_id);
		if (evento.status == 500){
			alert("error en ajax");
		}else{
			var context = JSON.parse(evento);
			context.id = evento_id;
			context.titulo_modal = "Editar Evento";
	    this.render(context);
		}
	},
});
