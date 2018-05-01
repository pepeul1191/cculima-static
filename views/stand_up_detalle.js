var StandUpDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		this.model = new StandUp();
	},
	events: {
    "click #buscar_file_stand_up_menu": "triggerFileMenu",
    "click #upload_file_stand_up_menu": "subirFileMenu",
    "click #buscar_file_stand_up_detalle": "triggerFileDetalle",
    "click #upload_file_stand_up_detalle": "subirFileDetalle",
    "click #btnGuardarDetalleStandUp": "guardarDetalle",
    "click #btnAsociarMenuStandUp": "asociarMenuStandUp",
    "click #btnAsociarDetalleStandUp": "asociarDetalleStandUp",
    "click #btnGuardarCalendario": "guardarCalendarioStandUp",
	},
  triggerFileMenu: function() {
    $("#input_file_stand_up_menu").trigger("click");
  },
  subirFileMenu: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_stand_up_menu").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_menu_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaStandUpDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarMenuStandUp").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
          $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
          $("#txtMensajeRptaStandUpDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  triggerFileDetalle: function() {
    $("#input_file_stand_up_detalle").trigger("click");
  },
  subirFileDetalle: function(){
    $("#input_file_stand_up_detalle").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        //console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_detalle_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaStandUpDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
          $("#view_file_detalle").removeClass("oculto");
          $("#btnAsociarDetalleStandUp").removeClass("oculto");
          $("#view_file_detalle").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
          $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
          $("#txtMensajeRptaStandUpDetalle").html(mensaje['mensaje'][0]);
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
       url: STATICS_URL + 'templates/stand_up_detalle.html',
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
    var source = $("#stand_up-detalle-template").html();
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
			titulo_modal: "Crear StandUp",
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
  renderEditar: function(stand_up_id) {
    var stand_up = this.model.id(stand_up_id);
    if (stand_up.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(stand_up);
      context.id = stand_up_id;
      context.titulo_modal = "Editar StandUp";
      context.ambientes = this.obtenerAmbientes();
      this.render(context);
      var datos = this.model.obtenerCalendario(stand_up_id);
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
  renderVer: function(stand_up_id) {
    var teatro = this.model.id(stand_up_id);
    if (teatro.status == 500){
      alert("error en ajax");
    }else{
      var context = JSON.parse(teatro);
      context.id = stand_up_id;
      context.titulo_modal = "Ver StandUp";
      context.ambientes = this.obtenerAmbientes();
      context.disabled = true;
      this.render(context);
      var datos = this.model.obtenerCalendario(stand_up_id);
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
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
      if ($("#lblIdStandUp").html() == "E"){
        $("#lblIdStandUp").html(rpta['mensaje'][1]);
        $(".modal-title").html("Editar StandUp");
      }
    }
  },
  asociarMenuStandUp: function(){
    var stand_up_id = $("#lblIdStandUp").html();
    var imagen_menu_id = $("#imagen_menu_id").html();
    var rpta = JSON.parse(this.model.asociarMenuStandUp(stand_up_id, imagen_menu_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }
  },
  asociarDetalleStandUp: function(){
    var stand_up_id = $("#lblIdStandUp").html();
    var imagen_detalle_id = $("#imagen_detalle_id").html();
    var rpta = JSON.parse(this.model.asociarDetalleStandUp(stand_up_id, imagen_detalle_id));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }
  },
  guardarCalendarioStandUp: function(){
    var stand_up_id = $("#lblIdStandUp").html();
    var fechas = vanillaCalendar.getModelo();
    var rpta = JSON.parse(this.model.asociarCalendarioStandUp(stand_up_id, fechas));
    if(rpta['tipo_mensaje'] == "error"){
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }else{
      $("#txtMensajeRptaStandUpDetalle").removeClass("color-rojo");
      $("#txtMensajeRptaStandUpDetalle").addClass("color-success");
      $("#txtMensajeRptaStandUpDetalle").html(rpta['mensaje'][0]);
    }
  },
});
