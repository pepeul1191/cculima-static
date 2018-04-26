var VanillaCalendarModel = Backbone.Model.extend({
  initialize: function() {
    /*
    this.usuario_valido = false;
    this.usuario_lleno = false;
    this.correo_valido = false;
    this.contrasenia_valido = false;
    this.datos_generales_valido = false;
    this.datos_contrasenias_valido = false;
    */
    this.fechas = [];
  },
  events: {
	},
  agregar: function(fecha){
    if(!_.contains(this.fechas, fecha)){
      this.fechas.push(fecha);
    }
  },
  quitar: function(fecha){
    if(_.contains(this.fechas, fecha)){
      this.fechas = _.without(this.fechas, fecha);
    }
  },
  mostrar: function(){
    console.log(this.fechas);
  },
});
