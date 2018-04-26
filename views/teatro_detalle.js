var tablaTeatroElenco = new Grid();
var tablaTeatroEquipo = new Grid();

var TeatroDetalleView = Backbone.View.extend({
  el: '#modal-container',
	initialize: function(){
		this.model = new Servicio();
	},
	events: {
    "click #buscar_file_teatro_menu": "triggerFileMenu",
    "click #upload_file_teatro_menu": "subirFileMenu",
    "click #buscar_file_teatro_detalle": "triggerFileDetalle",
    "click #upload_file_teatro_detalle": "subirFileDetalle",
	},
  triggerFileMenu: function() {
    $("#input_file_teatro_menu").trigger("click");
  },
  subirFileMenu: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_teatro_menu").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_menu_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaTeatroDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaTeatroDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaTeatroDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarPrincipalAmbiente").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaTeatroDetalle").removeClass("color-success");
          $("#txtMensajeRptaTeatroDetalle").addClass("color-rojo");
          $("#txtMensajeRptaTeatroDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
  triggerFileDetalle: function() {
    $("#input_file_teatro_detalle").trigger("click");
  },
  subirFileDetalle: function(){
    $("#input_file_teatro_detalle").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_detalle_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaTeatroDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaTeatroDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaTeatroDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarDetalleTeatro").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaTeatroDetalle").removeClass("color-success");
          $("#txtMensajeRptaTeatroDetalle").addClass("color-rojo");
          $("#txtMensajeRptaTeatroDetalle").html(mensaje['mensaje'][0]);
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
       url: STATICS_URL + 'templates/teatro_detalle.html',
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
    var source = $("#teatro-detalle-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    this.$el.html(html);
    CKEDITOR.replace('txtDescripcion',{
      toolbar : 'Basic',
      removeButtons: 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord,Link,Table,Image,Scayt,Unlink,PasteText,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,RemoveFormat,Source,About',
    });
    CKEDITOR.replace('txtProgramacion',{
      toolbar : 'Basic',
      removeButtons: 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord,Link,Table,Image,Scayt,Unlink,PasteText,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,RemoveFormat,Source,About',
    });
  },
  renderCrear: function() {
    var context = {
			id: "E",
			titulo_modal: "Crear Teatro",
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
    });
	},
  mostrarTablaElencoTeatro: function(teatro_id){
    var array_extra_data = [
      {tipo: "label", llave: "teatro_id", id : "lblIdTeatro"}
    ];
    tablaTeatroElenco.BorrarTable();
    var ajax_dao_teatro_elenco = new AjaxPython();
    ajax_dao_teatro_elenco.Constructor("GET", BASE_URL + "teatro/elenco/listar/" + teatro_id, "", false);
    tablaTeatroElenco.SetTableId("tablaTeatroElenco");
    tablaTeatroElenco.SetTableObj("tablaTeatroElenco");
    tablaTeatroElenco.SetTableHeader(teatro_elenco_array_json_th);
    tablaTeatroElenco.SetTableBody(teatro_elenco_array_json_td, teatro_elenco_array_json_btn_td, ajax_dao_teatro_elenco);
    tablaTeatroElenco.SetTableFooter(teatro_elenco_array_json_btn, false);
    tablaTeatroElenco.SetLabelMensaje("#txtMensajeRptaTeatroDetalle");
    tablaTeatroElenco.SetURLGuardar(BASE_URL + "teatro/elenco/guardar");
    tablaTeatroElenco.SetExtraData(array_extra_data);
    tablaTeatroElenco.MostrarTable();
  },
  mostrarTablaEquipoTeatro: function(teatro_id){
    var array_extra_data = [
      {tipo: "label", llave: "teatro_id", id : "lblIdTeatro"}
    ];
    tablaTeatroEquipo.BorrarTable();
    var ajax_dao_teatro_equipo = new AjaxPython();
    ajax_dao_teatro_equipo.Constructor("GET", BASE_URL + "teatro/equipo/listar/" + teatro_id, "", false);
    tablaTeatroEquipo.SetTableId("tablaTeatroEquipo");
    tablaTeatroEquipo.SetTableObj("tablaTeatroEquipo");
    tablaTeatroEquipo.SetTableHeader(teatro_equipo_array_json_th);
    tablaTeatroEquipo.SetTableBody(teatro_equipo_array_json_td, teatro_equipo_array_json_btn_td, ajax_dao_teatro_equipo);
    tablaTeatroEquipo.SetTableFooter(teatro_equipo_array_json_btn, false);
    tablaTeatroEquipo.SetLabelMensaje("#txtMensajeRptaTeatroDetalle");
    tablaTeatroEquipo.SetURLGuardar(BASE_URL + "teatro/equipo/guardar");
    tablaTeatroEquipo.SetExtraData(array_extra_data);
    tablaTeatroEquipo.MostrarTable();
  },
});
