var ConciertoDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		this.model = new Concierto();
	},
	events: {
    "click #buscar_file_concierto_menu": "triggerFileMenu",
    "click #upload_file_concierto_menu": "subirFileMenu",
    "click #buscar_file_concierto_detalle": "triggerFileDetalle",
    "click #upload_file_concierto_detalle": "subirFileDetalle",
    "click #btnGuardarDetalleConcierto": "guardarDetalle",
    "click #btnAsociarMenuConcierto": "asociarMenuConcierto",
    "click #btnAsociarDetalleConcierto": "asociarDetalleConcierto",
    "click #btnGuardarCalendario": "guardarCalendarioConcierto",
	},
  triggerFileMenu: function() {
    $("#input_file_concierto_menu").trigger("click");
  },
  subirFileMenu: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_concierto_menu").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_menu_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaConciertoDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarMenuConcierto").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
          $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
          $("#txtMensajeRptaConciertoDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  triggerFileDetalle: function() {
    $("#input_file_concierto_detalle").trigger("click");
  },
  subirFileDetalle: function(){
    $("#input_file_concierto_detalle").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        //console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_detalle_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaConciertoDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
          $("#view_file_detalle").removeClass("oculto");
          $("#btnAsociarDetalleConcierto").removeClass("oculto");
          $("#view_file_detalle").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
          $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
          $("#txtMensajeRptaConciertoDetalle").html(mensaje['mensaje'][0]);
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
       url: STATICS_URL + 'templates/concierto_detalle.html',
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
    var source = $("#concierto-detalle-template").html();
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
  renderEditar: function(concierto_id) {
    var concierto = this.model.id(concierto_id);
    if (concierto.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(concierto);
      context.id = concierto_id;
      context.titulo_modal = "Editar Concierto";
      context.ambientes = this.obtenerAmbientes();
      this.render(context);
      var datos = this.model.obtenerCalendario(concierto_id);
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
  renderVer: function(concierto_id) {
    var concierto = this.model.id(concierto_id);
    if (concierto.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(concierto);
      context.id = concierto_id;
      context.titulo_modal = "Ver Concierto";
      context.ambientes = this.obtenerAmbientes();
      context.disabled = true;
      this.render(context);
      var datos = this.model.obtenerCalendario(concierto_id);
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
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
      if ($("#lblIdConcierto").html() == "E"){
        $("#lblIdConcierto").html(rpta['mensaje'][1]);
        $(".modal-title").html("Editar Concierto");
      }
    }
  },
  asociarMenuConcierto: function(){
    var concierto_id = $("#lblIdConcierto").html();
    var imagen_menu_id = $("#imagen_menu_id").html();
    var rpta = JSON.parse(this.model.asociarMenuConcierto(concierto_id, imagen_menu_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }
  },
  asociarDetalleConcierto: function(){
    var concierto_id = $("#lblIdConcierto").html();
    var imagen_detalle_id = $("#imagen_detalle_id").html();
    var rpta = JSON.parse(this.model.asociarDetalleConcierto(concierto_id, imagen_detalle_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }
  },
  guardarCalendarioConcierto: function(){
    var concierto_id = $("#lblIdConcierto").html();
    var fechas = vanillaCalendar.getModelo();
    var rpta = JSON.parse(this.model.asociarCalendarioConcierto(concierto_id, fechas));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaConciertoDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaConciertoDetalle").addClass("color-success");
      $("#txtMensajeRptaConciertoDetalle").html(rpta['mensaje'][0]);
    }
  },
});
