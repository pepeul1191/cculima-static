var Exposicion = Backbone.Model.extend({
  initialize: function() {
  },
  events: {

	},
  guardar: function(){
    var exposicion = {
      _id: $("#lblIdExposicion").html(),
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
      url: BASE_URL + "exposicion/guardar_detalle",
      data: {data: JSON.stringify(exposicion), csrfmiddlewaretoken: CSRF},
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
  asociarMenuExposicion: function(exposicion_id, imagen_menu_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "exposicion/asociar_imagen_menu",
      data: {exposicion_id: exposicion_id, imagen_menu_id: imagen_menu_id ,csrfmiddlewaretoken: CSRF},
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
  asociarDetalleExposicion: function(exposicion_id, imagen_detalle_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "exposicion/asociar_imagen_detalle",
      data: {exposicion_id: exposicion_id, imagen_detalle_id: imagen_detalle_id ,csrfmiddlewaretoken: CSRF},
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
  asociarCalendarioExposicion: function(exposicion_id, fechas){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "exposicion/asociar_calendario",
      data: {exposicion_id: exposicion_id, fechas: JSON.stringify(fechas) ,csrfmiddlewaretoken: CSRF},
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
  obtenerCalendario: function(exposicion_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "exposicion/obtener_calendario/" + exposicion_id,
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
  id: function(exposicion_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "exposicion/obtener/" + exposicion_id,
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
