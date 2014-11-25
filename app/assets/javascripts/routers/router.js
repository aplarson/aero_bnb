AeroBnb.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'landing',
    'flights': 'showFlights'
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

  showFlights: function () {
    var view = new AeroBnb.Views.FlightsShow();
    this.swapView(view);
  }
});