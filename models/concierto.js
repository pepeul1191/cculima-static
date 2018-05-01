var Concierto = Backbone.Model.extend({
  initialize: function() {
  },
  events: {

	},
  guardar: function(){
    var concierto = {
      _id: $("#lblIdConcierto").html(),
      nombre: $("#txtNombre").val(),
      titulo: $("#txtTtitulo").val(),
      descripcion: CKEDITOR.instances.txtDescripcion.getData(),
      organizador: $("#txtOrganizador").val(),
      comienza: $("#txtComienza").val(),
      finaliza: $("#txtFinaliza").val(),
      lugar: $("#cbmAmbientes").val(),
    };
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "concierto/guardar_detalle",
      data: {data: JSON.stringify(concierto), csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = data;
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  asociarMenuConcierto: function(concierto_id, imagen_menu_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "concierto/asociar_imagen_menu",
      data: {concierto_id: concierto_id, imagen_menu_id: imagen_menu_id ,csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = data;
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  asociarDetalleConcierto: function(concierto_id, imagen_detalle_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "concierto/asociar_imagen_detalle",
      data: {concierto_id: concierto_id, imagen_detalle_id: imagen_detalle_id ,csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = data;
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  asociarCalendarioConcierto: function(concierto_id, fechas){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "concierto/asociar_calendario",
      data: {concierto_id: concierto_id, fechas: JSON.stringify(fechas) ,csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = data;
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  obtenerCalendario: function(concierto_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "concierto/obtener_calendario/" + concierto_id,
      data: {csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = JSON.parse(data);
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  id: function(concierto_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "concierto/obtener/" + concierto_id,
      data: {csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = data;
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
});
