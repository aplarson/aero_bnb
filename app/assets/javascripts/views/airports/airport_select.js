AeroBnb.Views.AirportSelect = Backbone.View.extend({
  template: JST["airports/select"],

  initialize: function (options) {
    this.airports = options.airports;
  },

  render: function () {
    var content = this.template({ airports: this.airports });
    this.$el.html(content);
    return this;
  }
})