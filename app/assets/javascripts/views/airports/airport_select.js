AeroBnb.Views.AirportSelect = Backbone.View.extend({
  template: JST["airports/airport_select"],

  initialize: function (options) {
    this.airports = options.airports;
    this.listenTo(this.airports, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ airports: this.airports });
    this.$el.html(content);
    return this;
  }
})