AeroBnb.Views.AirportsNew = Backbone.View.extend({
  template: JST["airports/new"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});