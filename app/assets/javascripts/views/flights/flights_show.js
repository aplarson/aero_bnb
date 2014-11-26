AeroBnb.Views.FlightsShow = Backbone.View.extend({
  template: JST["flights/show"],

  initialize: function (options) {
    this.flight = options.flight;
    this.flight.fetch();
    this.listenTo(this.flight, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  }
})