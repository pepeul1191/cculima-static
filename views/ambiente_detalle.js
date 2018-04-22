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
    "click #upload_file_ambiente_menu": "subirFileMenu",
    //input_file_ambiente_menu
	},
  triggerFilePrincipal: function() {
    $("#input_file_ambiente_principal").trigger("click");
  },
  subirFilePrincipal: function() {
    //$("#view_file_dni").addClass("oculto");
    $("#input_file_ambiente_principal").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_principal_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaAmbienteDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaAmbienteDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaAmbienteDetalle").addClass("color-success");
          $("#view_file_principal").removeClass("oculto");
          $("#btnAsociarPrincipalAmbiente").removeClass("oculto");
          $("#view_file_principal").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaAmbienteDetalle").removeClass("color-success");
          $("#txtMensajeRptaAmbienteDetalle").addClass("color-rojo");
          $("#txtMensajeRptaAmbienteDetalle").html(mensaje['mensaje'][0]);
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
  subirFileMenu: function(){
    $("#input_file_ambiente_menu").upload(
      BASE_URL + "archivo/subir",
      {
       nombre : "Imagen 1 nombre",
       descripcion : "Imagen 1 descripcion"
      },
      function(mensaje){
        console.log(mensaje);
        if(mensaje['tipo_mensaje'] == 'success'){
          $("#imagen_menu_id").html(mensaje['mensaje'][1]);
          $("#txtMensajeRptaAmbienteDetalle").html(mensaje['mensaje'][0]);
          $("#txtMensajeRptaAmbienteDetalle").removeClass("color-rojo");
          $("#txtMensajeRptaAmbienteDetalle").addClass("color-success");
          $("#view_file_menu").removeClass("oculto");
          $("#btnAsociarMenuAmbiente").removeClass("oculto");
          $("#view_file_menu").attr("href", mensaje['mensaje'][2]);
        }else{
          $("#txtMensajeRptaAmbienteDetalle").removeClass("color-success");
          $("#txtMensajeRptaAmbienteDetalle").addClass("color-rojo");
          $("#txtMensajeRptaAmbienteDetalle").html(mensaje['mensaje'][0]);
        }
        event.preventDefault();
      },
      $("#progbar_dni"),
      $("#upload_file_dni")
    );
    event.preventDefault();
  },
	render: function(context) {
		$("#btnModal").click();
		this.$el.html(this.getTemplate());
		var source = $("#ambiente-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
    CKEDITOR.replace('txtParrafoIzquierdo',{
      toolbar : 'Basic',
      removeButtons: 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord,Link,Table,Image,Scayt,Unlink,PasteText,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,RemoveFormat,Source,About',
    });
    CKEDITOR.replace('txtParrafoDerecho',{
      toolbar : 'Basic',
      removeButtons: 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord,Link,Table,Image,Scayt,Unlink,PasteText,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,RemoveFormat,Source,About',
    });
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
  mostrarTablaGaleria: function(){
    tablaAmbienteGaleria.BorrarTable();
    var ajax_dao_ambiente_galeria = new AjaxPython();
    ajax_dao_ambiente_galeria.Constructor("GET", BASE_URL + "ambiente/galeria/listar", "", false);
    tablaAmbienteGaleria.SetTableId("tablaAmbienteGaleria");
    tablaAmbienteGaleria.SetTableObj("tablaAmbienteGaleria");
    tablaAmbienteGaleria.SetTableHeader(ambiente_galeria_array_json_th);
    tablaAmbienteGaleria.SetTableBody(ambiente_galeria_array_json_td, ambiente_galeria_array_json_btn_td, ajax_dao_ambiente_galeria);
    tablaAmbienteGaleria.SetTableFooter(ambiente_galeria_array_json_btn, false);
    tablaAmbienteGaleria.SetLabelMensaje("#txtMensajeRpta");
    tablaAmbienteGaleria.SetURLGuardar(BASE_URL + "ambiente/guardar");
    tablaAmbienteGaleria.MostrarTable();
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
