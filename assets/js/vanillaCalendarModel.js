var VanillaCalendarModel = Backbone.Model.extend({
  initialize: function() {
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
  existe: function(fecha){
    var rpta = false;
    if(_.contains(this.fechas, fecha)){
      rpta = true;
    }
    return rpta;
  },
});
