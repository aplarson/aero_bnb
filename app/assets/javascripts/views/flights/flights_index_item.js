AeroBnb.Views.FlightsIndexItem = Backbone.View.extend({
  template: JST["flights/index_item"],

  events: {
    'click .index-container': 'showFlight'
  },

  initialize: function (options) {
    this.flight = options.flight;
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  },

  showFlight: function (event) {
    Backbone.history.navigate('flights/' + this.flight.id, { trigger: true })
  }
})