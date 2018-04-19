var AmbienteDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.model = new Ambiente();
	},
	events: {
		"click #btnGuardarDetalleEvento": "guardarDetalleEvento",
    "click #buscar_file_ambiente_principal": "triggerFilePrincipal",
    "click #upload_file_ambiente_principal": "subirFilePrincipal",
    "click #buscar_file_ambiente_menu": "triggerFileMenu",
    //input_file_ambiente_principal
    //input_file_ambiente_menu
	},
  triggerFilePrincipal: function() {
    $("#input_file_ambiente_principal").trigger("click");
  },
  subirFilePrincipal: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_ambiente_principal").upload(
      BASE_URL + "ambiente/subir_princial",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_dni_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaImagenes").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaImagenes").removeClass("color-rojo");
          $("#txtMensajeRptaImagenes").addClass("color-success");
          $("#view_file_dni").removeClass("oculto");
          $("#view_file_dni").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaImagenes").removeClass("color-success");
          $("#txtMensajeRptaImagenes").addClass("color-rojo");
          $("#txtMensajeRptaImagenes").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  triggerFileMenu: function() {
    $("#input_file_ambiente_menu").trigger("click");
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
