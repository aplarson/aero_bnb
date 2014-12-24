AeroBnb.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.currentUser = new AeroBnb.Models.User({ id: window.currentUser });
  },

  routes: {
    '': 'landing',
    'flights/search/:params': 'searchFlights',
    'flights/new': 'newFlight',
    'flights/:id/edit': 'editFlight',
    'flights/:id': 'showFlight',
    'flights': 'flightIndex',
    'reservations': 'reservationsIndex',
    'users/edit': 'editUser',
    'users/:id': 'showUser'
  },

  swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  editFlight: function (id) {
    var flight = new AeroBnb.Models.Flight({ id: id });
    flight.fetch();
    var view = new AeroBnb.Views.FlightsEdit({ flight: flight });
    this.swapView(view);
  },

  editUser: function () {
    this.currentUser.fetch();
    var view = new AeroBnb.Views.UsersEdit({ user: this.currentUser });
    this.swapView(view);
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
    var view = new AeroBnb.Views.FlightsSearch({ queryString: params, airports: this.airports });
    this.swapView(view);
    view.createMap();
  },

  showFlight: function (id) {
    var flight = new AeroBnb.Models.Flight({ id: id });
    flight.fetch();
    var view = new AeroBnb.Views.FlightsShow({ flight: flight });
    this.swapView(view);
  },

  showUser : function (id) {
    var user = new AeroBnb.Models.User({ id: id });
    user.fetch();
    var view = new AeroBnb.Views.UsersShow({ user: user });
    this.swapView(view);
  }
});
