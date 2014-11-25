AeroBnb.Views.FlightsSearchItem = Backbone.View.extend({
  template: JST["flights/search_item"],

  initialize: function (options) {
    this.flight = options.flight;
    this.$el.addClass('search-item');
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  }
})