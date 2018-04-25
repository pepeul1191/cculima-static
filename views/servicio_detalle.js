var ServicioDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		this.model = new Servicio();
	},
	events: {
    "click #btnGuardarDetalleServicio": "guardarDetalle",
    "click #buscar_file_foto": "triggerFileFoto",
    "click #upload_file_foto": "subirFileFoto",
    "click #btnAsociarFoto": "asociarFoto",
	},
  getTemplate: function(data) {
    var template = null;
    $.ajax({
       url: STATICS_URL + 'templates/servicio_detalle.html',
       type: "GET",
       async: false,
       success: function(source) {
         template = source
       }
    });
    return template;
  },
  triggerFileFoto: function() {
    $("#input_file_foto").trigger("click");
  },
  subirFileFoto: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_foto").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#foto_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaServicioDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaServicioDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaServicioDetalle").addClass("color-success");
          $("#btnAsociarFoto").removeClass("oculto");
          $("#view_file_foto").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaServicioDetalle").removeClass("color-success");
          $("#txtMensajeRptaServicioDetalle").addClass("color-rojo");
          $("#txtMensajeRptaServicioDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#foto_id")
    );
    event.preventDefault();
  },
  render: function(context) {
    $("#btnModal").click();
    this.$el.html(this.getTemplate());
    var source = $("#servicio-detelle-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    this.$el.html(html);
    CKEDITOR.replace('txtDescripcion',{
      toolbar : 'Basic',
      removeButtons: 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord,Link,Table,Image,Scayt,Unlink,PasteText,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,RemoveFormat,Source,About',
    });
  },
  renderCrear: function() {
    var context = {
			id: "E",
			titulo_modal: "Crear Servicio",
		};
    this.render(context);
	},
  renderVer: function(servicio_id) {
    var servicio = this.model.id(servicio_id);
    if (servicio.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(servicio);
      context.id = servicio_id;
      context.titulo_modal = "Ver Servicio";
      context.disabled = true;
      this.render(context);
    }
  },
  guardarDetalle: function(){
    var rpta = this.model.guardar();
    rpta = JSON.parse(rpta);
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaServicioDetalle").removeClass("color-success");
      $("#txtMensajeRptaServicioDetalle").addClass("color-rojo");
      $("#txtMensajeRptaServicioDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaServicioDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaServicioDetalle").addClass("color-success");
      $("#txtMensajeRptaServicioDetalle").html(rpta['mensaje'][0]);
      if ($("#lblIdServicio").html() == "E"){
        $("#lblIdServicio").html(rpta['mensaje'][1]);
        $(".modal-title").html("Editar Servicio");
      }
    }
  },
  asociarFoto: function(){
    var servicio_id = $("#lblIdServicio").html();
    var foto_id = $("#foto_id").html();
    var rpta = JSON.parse(this.model.asociarFoto(servicio_id, foto_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaServicioDetalle").removeClass("color-success");
      $("#txtMensajeRptaServicioDetalle").addClass("color-rojo");
      $("#txtMensajeRptaServicioDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaServicioDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaServicioDetalle").addClass("color-success");
      $("#txtMensajeRptaServicioDetalle").html(rpta['mensaje'][0]);
    }
  },
});
