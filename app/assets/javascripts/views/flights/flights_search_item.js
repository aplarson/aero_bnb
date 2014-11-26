AeroBnb.Views.FlightsSearchItem = Backbone.View.extend({
  template: JST["flights/search_item"],

  initialize: function (options) {
    this.flight = options.flight;
    this.listenTo(this.flight, 'sync', this.render)
  },

  events: {
    'click .search-item': 'showFlight'
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  },

  showFlight: function (event) {
    Backbone.history.navigate("flights/" + this.flight.id, { trigger: true })
  }
})