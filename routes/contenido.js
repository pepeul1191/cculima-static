var ambienteDetalleView = new AmbienteDetalleView({});

var Router = Marionette.AppRouter.extend({
    routes: {
      'email/:email': 'showEmail',
      "" : "index",
      "ambiente": "ambiente",
      "ambiente/crear": "ambienteCrear",
      "concierto": "concierto",
      "exposicion": "exposicion",
      "servicio": "servicio",
      "servicio": "servicio",
      "stand_up": "stand_up",
      "teatro": "teatro",
      "*actions" : "index"
    },
    showEmail: function(email) {
        // show the email
      alert(email);
    },
    index: function() {
        // show the email
    },
    ambiente: function() {
      var ambienteView = new AmbienteView({});
      ambienteView.render();
      ambienteView.mostrarTabla();
    },
    ambienteCrear: function() {
      ambienteDetalleView.renderCrear();
      ambienteDetalleView.mostrarTablaGaleria();
    },
    concierto: function() {
      var conciertoView = new ConciertoView({});
      conciertoView.render();
      conciertoView.mostrarTabla();
    },
    exposicion: function() {
      var exposicionView = new ExposicionView({});
      exposicionView.render();
      exposicionView.mostrarTabla();
    },
    servicio: function() {
      var servicioView = new ServicioView({});
      servicioView.render();
      servicioView.mostrarTabla();
    },
    stand_up: function() {
      var standUpView = new StandUpView({});
      standUpView.render();
      standUpView.mostrarTabla();
    },
    teatro: function() {
      var teatroView = new TeatroView({});
      teatroView.render();
      teatroView.mostrarTabla();
    },
});

var App = Marionette.Application.extend({
  region: '#body-app',
  onStart() {
    var router = new Router();
    Backbone.history.start();
  }
});

var myApp = new App();
myApp.start();
