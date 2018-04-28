var ambienteDetalleView = new AmbienteDetalleView({});
var servicioDetalleView = new ServicioDetalleView({});
var teatroDetalleView = new TeatroDetalleView({});
var exposicionDetalleView = new ExposicionDetalleView({});

var Router = Marionette.AppRouter.extend({
    routes: {
      'email/:email': 'showEmail',
      "" : "index",
      "ambiente": "ambiente",
      "ambiente/crear": "ambienteCrear",
      "ambiente/editar/:ambiente_id": "ambienteEditar",
      "ambiente/ver/:ambiente_id": "ambienteVer",
      "servicio/crear": "servicioCrear",
      "servicio/ver/:servicio_id": "servicioVer",
      "servicio/editar/:servicio_id": "servicioEditar",
      "concierto": "concierto",
      "exposicion": "exposicion",
      "servicio": "servicio",
      "servicio": "servicio",
      "stand_up": "stand_up",
      "teatro": "teatro",
      "teatro/crear": "teatroCrear",
      "teatro/editar/:teatro_id": "teatroEditar",
      "teatro/ver/:teatro_id": "teatroVer",
      "exposicion/crear": "exposicionCrear",
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
    servicioVer: function(servicio_id) {
      servicioDetalleView.renderVer(servicio_id);
    },
    servicioEditar: function(servicio_id) {
      servicioDetalleView.renderEditar(servicio_id);
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
    teatroCrear: function() {
      teatroDetalleView.renderCrear();
      teatroDetalleView.mostrarTablaElencoTeatro('E');
      teatroDetalleView.mostrarTablaEquipoTeatro('E');
    },
    teatroEditar: function(teatro_id) {
      teatroDetalleView.renderEditar(teatro_id);
      teatroDetalleView.mostrarTablaElencoTeatro(teatro_id);
      teatroDetalleView.mostrarTablaEquipoTeatro(teatro_id);
    },
    teatroVer: function(teatro_id) {
      teatroDetalleView.renderVer(teatro_id);
      teatroDetalleView.mostrarTablaElencoTeatroVer(teatro_id);
      teatroDetalleView.mostrarTablaEquipoTeatroVer(teatro_id);
    },
    exposicionCrear: function() {
      exposicionDetalleView.renderCrear();
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
