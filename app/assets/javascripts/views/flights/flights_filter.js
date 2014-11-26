AeroBnb.Views.FlightsFilter = Backbone.CompositeView.extend({
  template: JST["flights/filter"],

  initialize: function (options) {
    this.queryParams = options.queryParams;
  },

  render: function () {
    var content = this.template({ params: this.queryParams });
    this.$el.html(content);
    return this;
  }
})