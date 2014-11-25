AeroBnb.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'landing',
    'flights': 'searchFlights'
  },

  swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  },

  landing: function () {
    var view = new AeroBnb.Views.LandingView();
    this.swapView(view);
  },

  searchFlights: function () {
    var flights = new AeroBnb.Collections.Flights();
    flights.fetch();
    var view = new AeroBnb.Views.FlightsSearch({ flights: flights });
    this.swapView(view);
  }
});