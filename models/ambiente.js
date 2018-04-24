var Ambiente = Backbone.Model.extend({
  initialize: function() {
    /*
    this.usuario_valido = false;
    this.usuario_lleno = false;
    this.correo_valido = false;
    this.contrasenia_valido = false;
    this.datos_generales_valido = false;
    this.datos_contrasenias_valido = false;
    */
  },
  events: {
	},
  validarDatosGenerales: function() {
    /*
    if(this.get("usuario_valido") == true && this.get("correo_valido") == true && this.get("usuario_lleno") == true){
      this.set({datos_generales_valido : true});
    }else{
      this.set({datos_generales_valido : false});
    }
    */
  },
  validarContrasenias: function() {
    /*
    if(this.get("contrasenia_valido") == true){
        this.set({datos_contrasenias_valido : true});
    }else{
        this.set({datos_contrasenias_valido : false});
    }
    */
  },
  datosGeneralesToJSON: function() {
    /*
    var usuario = new Object();
    usuario.id = $("#idUsuario").html();
    usuario.usuario = $("#txtUsuario").val();
    usuario.correo = $("#txtCorreo").val();
    return usuario;
    */
  },
  datosContraseniasToJSON: function() {
    /*
    var usuario = new Object();
    usuario.id = $("#idUsuario").html();
    usuario.contrasenia = $("#txtContraseniaNueva").val();
    return usuario;
    */
  },
  id: function(evento_id){
    /*
    var rpta = null;
		$.ajax({
   		type: "GET",
   		url: BASE_URL + "evento/_id?",
   		data: {_id: evento_id, csrfmiddlewaretoken: CSRF},
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
    */
  },
  guardar: function(){
    var externo = {
      _id: $("#lblIdAmbiente").html(),
      nombre: $("#txtNombre").val(),
      subtitulo: $("#txtSubtitulo").val(),
      parrafo_izq: CKEDITOR.instances.txtParrafoIzquierdo.getData(),
      parrafo_der: CKEDITOR.instances.txtParrafoDerecho.getData(),
      telefono: $("#txtTelefono").val(),
      direccion: $("#txtDireccion").val(),
      latitud: $("#txtLatitud").val(),
      longitud: $("#txtLongitud").val(),
    };
    var rpta = null;
		$.ajax({
   		type: "POST",
   		url: BASE_URL + "ambiente/guardar_detalle",
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
  asociarPrincipalAmbiente: function(ambiente_id, imagen_principal_id){
    var rpta = null;
    $.ajax({
      type: "POST",
      url: BASE_URL + "ambiente/asociar_imagen_princial",
      data: {ambiente_id: ambiente_id, imagen_principal_id: imagen_principal_id ,csrfmiddlewaretoken: CSRF},
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
