AeroBnb.Views.FlightsFilter = Backbone.CompositeView.extend({
  template: JST["flights/filter"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})