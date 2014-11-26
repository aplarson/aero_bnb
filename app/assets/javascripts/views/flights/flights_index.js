AeroBnb.Views.FlightsIndex = Backbone.View.extend({
  template: JST["flights/index"],

  initialize: function () {
    this.flights = new AeroBnb.Collections.Flights();
    this.flights.fetch();
    this.listenTo(this.flights, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});