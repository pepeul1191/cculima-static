var ambienteDetalleView = new AmbienteDetalleView({});
var servicioDetalleView = new ServicioDetalleView({});
var teatroDetalleView = new TeatroDetalleView({});
var exposicionDetalleView = new ExposicionDetalleView({});
var conciertoDetalleView = new ConciertoDetalleView({});
var stand_upDetalleView = new StandUpDetalleView({});

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
      "exposicion/editar/:exposicion_id": "exposicionEditar",
      "exposicion/ver/:exposicion_id": "exposicionVer",
      "concierto/crear": "conciertoCrear",
      "concierto/editar/:concierto_id": "conciertoEditar",
      "concierto/ver/:concierto_id": "conciertoVer",
      "stand_up/crear": "stand_upCrear",
      "stand_up/editar/:stand_up_id": "stand_upEditar",
      "stand_up/ver/:stand_up_id": "stand_upVer",
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
    exposicionEditar: function(exposicion_id) {
      exposicionDetalleView.renderEditar(exposicion_id);
    },
    exposicionVer: function(exposicion_id) {
      exposicionDetalleView.renderVer(exposicion_id);
    },
    conciertoCrear: function() {
      conciertoDetalleView.renderCrear();
    },
    conciertoEditar: function(concierto_id) {
      conciertoDetalleView.renderEditar(concierto_id);
    },
    conciertoVer: function(concierto_id) {
      conciertoDetalleView.renderVer(concierto_id);
    },
    stand_upCrear: function() {
      stand_upDetalleView.renderCrear();
    },
    stand_upEditar: function(stand_up_id) {
      stand_upDetalleView.renderEditar(stand_up_id);
    },
    stand_upVer: function(stand_up_id) {
      stand_upDetalleView.renderVer(stand_up_id);
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
