AeroBnb.Views.Map = Backbone.View.extend({
  template: JST["maps/map"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})