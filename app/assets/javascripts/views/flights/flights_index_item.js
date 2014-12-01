AeroBnb.Views.FlightsIndexItem = Backbone.View.extend({
  template: JST["flights/index_item"],

  events: {
    'click .index-container': 'showFlight',
    'click .btn-danger': 'deleteFlight'
  },

  initialize: function (options) {
    this.flight = options.flight;
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  },

  deleteFlight: function (event) {
    this.flight.destroy({
      success: function () {
        this.remove();
      }.bind(this)
    });
  },

  showFlight: function (event) {
    if (!($(event.target).hasClass('btn'))) {
      Backbone.history.navigate('flights/' + this.flight.id, { trigger: true })
    }
  }
})