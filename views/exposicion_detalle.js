var ExposicionDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		this.model = new Exposicion();
	},
	events: {
    "click #buscar_file_exposicion_menu": "triggerFileMenu",
    "click #upload_file_exposicion_menu": "subirFileMenu",
    "click #buscar_file_exposicion_detalle": "triggerFileDetalle",
    "click #upload_file_exposicion_detalle": "subirFileDetalle",
    "click #btnGuardarDetalleExposicion": "guardarDetalle",
    "click #btnAsociarMenuExposicion": "asociarMenuExposicion",
    "click #btnAsociarDetalleExposicion": "asociarDetalleExposicion",
    "click #btnGuardarCalendario": "guardarCalendarioExposicion",
	},
  triggerFileMenu: function() {
    $("#input_file_exposicion_menu").trigger("click");
  },
  subirFileMenu: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_exposicion_menu").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_menu_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaExposicionDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarMenuExposicion").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
          $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
          $("#txtMensajeRptaExposicionDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  triggerFileDetalle: function() {
    $("#input_file_exposicion_detalle").trigger("click");
  },
  subirFileDetalle: function(){
    $("#input_file_exposicion_detalle").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        //console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_detalle_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaExposicionDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
          $("#view_file_detalle").removeClass("oculto");
          $("#btnAsociarDetalleExposicion").removeClass("oculto");
          $("#view_file_detalle").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
          $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
          $("#txtMensajeRptaExposicionDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  getTemplate: function(data) {
    var template = null;
    $.ajax({
       url: STATICS_URL + 'templates/exposicion_detalle.html',
       type: "GET",
       async: false,
       success: function(source) {
         template = source
       }
    });
    return template;
  },
  render: function(context) {
    $("#btnModal").click();
    this.$el.html(this.getTemplate());
    var source = $("#exposicion-detalle-template").html();
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
			titulo_modal: "Crear Exposición",
      ambientes: this.obtenerAmbientes(),
      foto_menu: "",
      foto_detalle: "",
		};
    this.render(context);
    var datos = [];
    vanillaCalendar.init({
      disablePastDays: false,
      data: datos,
      month: "bodyCadelndario",
      next: "btnAdelante",
      previous: "btnAtras",
      label: "lblMes",
      meses: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Deciembre'
      ],
      disabled: false,
    });
	},
  renderEditar: function(exposicion_id) {
    var exposicion = this.model.id(exposicion_id);
    if (exposicion.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(exposicion);
      context.id = exposicion_id;
      context.titulo_modal = "Editar Exposicion";
      context.ambientes = this.obtenerAmbientes();
      this.render(context);
      var datos = this.model.obtenerCalendario(exposicion_id);
      vanillaCalendar.init({
        disablePastDays: false,
        data: datos,
        month: "bodyCadelndario",
        next: "btnAdelante",
        previous: "btnAtras",
        label: "lblMes",
        meses: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Deciembre'
        ],
        disabled: false,
      });
    }
  },
  renderVer: function(exposicion_id) {
    var teatro = this.model.id(exposicion_id);
    if (teatro.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(teatro);
      context.id = exposicion_id;
      context.titulo_modal = "Ver Exposicion";
      context.ambientes = this.obtenerAmbientes();
      context.disabled = true;
      this.render(context);
      var datos = this.model.obtenerCalendario(exposicion_id);
      vanillaCalendar.init({
        disablePastDays: false,
        data: datos,
        month: "bodyCadelndario",
        next: "btnAdelante",
        previous: "btnAtras",
        label: "lblMes",
        meses: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Deciembre'
        ],
        disabled: true,
      });
    }
  },
  obtenerAmbientes: function(){
    var ambientesSelect;
    $.ajax({
	   url: BASE_URL + 'ambiente/listar_select',
	   type: "GET",
	   async: false,
	   success: function(data) {
   		if (data == "null"){
   			ambinetesSelect = null;
   		}else{
   			ambinetesSelect = JSON.parse(data);
   		}
	   }
		});
    return ambinetesSelect;
  },
  guardarDetalle: function(){
    var rpta = this.model.guardar();
    rpta = JSON.parse(rpta);
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
      if ($("#lblIdExposicion").html() == "E"){
        $("#lblIdExposicion").html(rpta['mensaje'][1]);
        $(".modal-title").html("Editar Exposicion");
      }
    }
  },
  asociarMenuExposicion: function(){
    var exposicion_id = $("#lblIdExposicion").html();
    var imagen_menu_id = $("#imagen_menu_id").html();
    var rpta = JSON.parse(this.model.asociarMenuExposicion(exposicion_id, imagen_menu_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }
  },
  asociarDetalleExposicion: function(){
    var exposicion_id = $("#lblIdExposicion").html();
    var imagen_detalle_id = $("#imagen_detalle_id").html();
    var rpta = JSON.parse(this.model.asociarDetalleExposicion(exposicion_id, imagen_detalle_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }
  },
  guardarCalendarioExposicion: function(){
    var exposicion_id = $("#lblIdExposicion").html();
    var fechas = vanillaCalendar.getModelo();
    var rpta = JSON.parse(this.model.asociarCalendarioExposicion(exposicion_id, fechas));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaExposicionDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaExposicionDetalle").addClass("color-success");
      $("#txtMensajeRptaExposicionDetalle").html(rpta['mensaje'][0]);
    }
  },
});
