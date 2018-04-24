var ambienteDetalleView = new AmbienteDetalleView({});
var servicioDetalleView = new ServicioDetalleView({});

var Router = Marionette.AppRouter.extend({
    routes: {
      'email/:email': 'showEmail',
      "" : "index",
      "ambiente": "ambiente",
      "ambiente/crear": "ambienteCrear",
      "ambiente/editar/:ambiente_id": "ambienteEditar",
      "ambiente/ver/:ambiente_id": "ambienteVer",
      "servicio/crear": "servicioCrear",
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
      ambienteDetalleView.mostrarTablaGaleria('E');
    },
    ambienteEditar: function(ambiente_id) {
      ambienteDetalleView.renderEditar(ambiente_id);
      ambienteDetalleView.mostrarTablaGaleria(ambiente_id);
    },
    ambienteVer: function(ambiente_id) {
      ambienteDetalleView.renderVer(ambiente_id);
      ambienteDetalleView.mostrarTablaGaleriaVer(ambiente_id);
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
    servicioCrear: function() {
      servicioDetalleView.renderCrear();
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
