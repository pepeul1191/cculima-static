var Servicio = Backbone.Model.extend({
  initialize: function() {
  },
  events: {

	},
  guardar: function(){
    var externo = {
      _id: $("#lblIdServicio").html(),
      titulo: $("#txtNombre").val(),
      descripcion: CKEDITOR.instances.txtDescripcion.getData(),
      telefono: $("#txtTelefono").val(),
      direccion: $("#txtDireccion").val(),
      latitud: $("#txtLatitud").val(),
      longitud: $("#txtLongitud").val(),
    };
    var rpta = null;
		$.ajax({
   		type: "POST",
   		url: BASE_URL + "servicio/guardar_detalle",
   		data: {data: JSON.stringify(externo), csrfmiddlewaretoken: CSRF},
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
  asociarFoto: function(servicio_id, foto_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "servicio/asociar_foto",
      data: {servicio_id: servicio_id, foto_id: foto_id ,csrfmiddlewaretoken: CSRF},
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
  id: function(servicio_id){
    var rpta = null;
    $.ajax({
      type: "GET",
      url: BASE_URL + "servicio/obtener/" + servicio_id,
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
