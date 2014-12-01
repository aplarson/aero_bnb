AeroBnb.Views.FlightsIndexItem = Backbone.View.extend({
  template: JST["flights/index_item"],

  events: {
    'click .index-container': 'showFlight',
    'click .btn-danger': 'deleteFlight',
    'click .btn-success': 'editFlight'
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

  editFlight: function (event) {
    Backbone.history.navigate('flights/' + this.flight.id + '/edit', { trigger: true })
  },

  showFlight: function (event) {
    if (!($(event.target).hasClass('btn'))) {
      Backbone.history.navigate('flights/' + this.flight.id, { trigger: true })
    }
  }
})