AeroBnb.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'landing',
    'flights/search/:params': 'searchFlights',
    'flights/new': 'newFlight',
    'flights/:id': 'showFlight'
  },

  swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  landing: function () {
    var view = new AeroBnb.Views.LandingView();
    this.swapView(view);
  },

  searchFlights: function () {
    var flights = new AeroBnb.Collections.Flights();
    var view = new AeroBnb.Views.FlightsSearch({ flights: flights });
    this.swapView(view);
  },

  showFlight: function (id) {
    var flight = new AeroBnb.Models.Flight({ id: id });
    flight.fetch();
    var view = new AeroBnb.Views.FlightsShow({ flight: flight });
    this.swapView(view);
  },

  newFlight: function () {
    var view = new AeroBnb.Views.FlightsNew()
    this.swapView(view);
  }
});