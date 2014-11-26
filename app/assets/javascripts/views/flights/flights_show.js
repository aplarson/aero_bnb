AeroBnb.Views.FlightsShow = Backbone.View.extend({
  template: JST["flights/show"],

  initialize: function (options) {
    this.flight = options.flight;
  }
})