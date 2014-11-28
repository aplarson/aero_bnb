AeroBnb.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'landing',
    'flights/search/:params': 'searchFlights',
    'flights/new': 'newFlight',
    'flights/:id': 'showFlight',
    'flights': 'flightIndex',
    'reservations': 'reservationsIndex'
  },

  swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  flightIndex: function () {
    var view = new AeroBnb.Views.FlightsIndex();
    this.swapView(view);
  },

  landing: function () {
    var view = new AeroBnb.Views.LandingView();
    this.swapView(view);
  },

  newFlight: function () {
    var view = new AeroBnb.Views.FlightsNew()
    this.swapView(view);
  },

  reservationsIndex: function () {
    var reservations = new AeroBnb.Collections.Reservations();
    reservations.fetch();
    var view = new AeroBnb.Views.ReservationsIndex({ reservations: reservations });
    this.swapView(view);
  },

  searchFlights: function (params) {
    var view = new AeroBnb.Views.FlightsSearch({ queryString: params });
    this.swapView(view);
  },

  showFlight: function (id) {
    var flight = new AeroBnb.Models.Flight({ id: id });
    flight.fetch();
    var view = new AeroBnb.Views.FlightsShow({ flight: flight });
    this.swapView(view);
  }
});