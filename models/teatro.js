var Teatro = Backbone.Model.extend({
  initialize: function() {
  },
  events: {

	},
  guardar: function(){
    var teatro = {
      _id: $("#lblIdTeatro").html(),
      nombre: $("#txtNombre").val(),
      titulo: $("#txtTtitulo").val(),
      descripcion: CKEDITOR.instances.txtDescripcion.getData(),
      programacion: CKEDITOR.instances.txtProgramacion.getData(),
      organizador: $("#txtOrganizador").val(),
      comienza: $("#txtComienza").val(),
      finaliza: $("#txtFinaliza").val(),
      lugar: $("#cbmAmbientes").val(),
    };
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "teatro/guardar_detalle",
      data: {data: JSON.stringify(teatro), csrfmiddlewaretoken: CSRF},
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
  asociarMenuTeatro: function(teatro_id, imagen_menu_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "teatro/asociar_imagen_menu",
      data: {teatro_id: teatro_id, imagen_menu_id: imagen_menu_id ,csrfmiddlewaretoken: CSRF},
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
  asociarDetalleTeatro: function(teatro_id, imagen_detalle_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "teatro/asociar_imagen_detalle",
      data: {teatro_id: teatro_id, imagen_detalle_id: imagen_detalle_id ,csrfmiddlewaretoken: CSRF},
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
  asociarCalendarioTeatro: function(teatro_id, fechas){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "teatro/asociar_calendario",
      data: {teatro_id: teatro_id, fechas: JSON.stringify(fechas) ,csrfmiddlewaretoken: CSRF},
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
  obtenerCalendario: function(teatro_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "teatro/obtener_calendario/" + teatro_id,
      data: {csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        rpta = JSON.parse(data);
        console.log(rpta);
      },
      error: function(data){
        console.log("error");
        rpta = data;
      }
    });
    return rpta;
  },
  id: function(teatro_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "teatro/obtener/" + teatro_id,
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
    console.log(JSON.parse(rpta));
    return rpta;
  },
});
