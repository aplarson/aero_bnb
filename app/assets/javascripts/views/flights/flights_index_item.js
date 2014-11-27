AeroBnb.Views.FlightsIndexItem = Backbone.View.extend({
  template: JST["flights/index_item"],

  initialize: function (options) {
    this.flight = options.flight;
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  }
})