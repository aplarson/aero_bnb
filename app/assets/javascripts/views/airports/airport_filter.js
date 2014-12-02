AeroBnb.Views.AirportsFilter = Backbone.View.extend({
  template: JST["airports/filter"],

  initialize: function (options) {
    this.airports = options.airports;
    this.listenTo(this.airports, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ airports: this.airports });
    this.$el.html(content);
    return this;
  }
})