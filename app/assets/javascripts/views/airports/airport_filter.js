AeroBnb.Views.AirportsFilter = Backbone.View.extend({
  template: JST["airports/filter"],

  initialize: function (options) {
    this.airports = options.airports;
    this.selected = _.map(options.selected, function (el) {
      return parseInt(el);
    });
    this.listenTo(this.airports, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ airports: this.airports, selected: this.selected });
    this.$el.html(content);
    return this;
  }
})