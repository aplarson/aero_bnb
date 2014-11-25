AeroBnb.Views.FlightsShow = Backbone.View.extend({
  template: JST["flights/show"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})