var StandUp = Backbone.Model.extend({
  initialize: function() {
  },
  events: {

	},
  guardar: function(){
    var stand_up = {
      _id: $("#lblIdStandUp").html(),
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
      url: BASE_URL + "stand_up/guardar_detalle",
      data: {data: JSON.stringify(stand_up), csrfmiddlewaretoken: CSRF},
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
  asociarMenuStandUp: function(stand_up_id, imagen_menu_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "stand_up/asociar_imagen_menu",
      data: {stand_up_id: stand_up_id, imagen_menu_id: imagen_menu_id ,csrfmiddlewaretoken: CSRF},
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
  asociarDetalleStandUp: function(stand_up_id, imagen_detalle_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "stand_up/asociar_imagen_detalle",
      data: {stand_up_id: stand_up_id, imagen_detalle_id: imagen_detalle_id ,csrfmiddlewaretoken: CSRF},
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
  asociarCalendarioStandUp: function(stand_up_id, fechas){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "stand_up/asociar_calendario",
      data: {stand_up_id: stand_up_id, fechas: JSON.stringify(fechas) ,csrfmiddlewaretoken: CSRF},
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
  obtenerCalendario: function(stand_up_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "stand_up/obtener_calendario/" + stand_up_id,
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
  id: function(stand_up_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "stand_up/obtener/" + stand_up_id,
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
