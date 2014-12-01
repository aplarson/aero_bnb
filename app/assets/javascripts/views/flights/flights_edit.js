AeroBnb.Views.FlightsEdit = Backbone.View.extend({
  template: JST["flights/form"],

  events: {
    'submit .flight-form': 'updateFlight'
  },

  initialize: function (options) {
    this.flight = options.flight;
    this.listenTo(this.flight, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  },

  updateFlight: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    this.flight.save(params["flight"], {
      success: function (response) {
        Backbone.history.navigate('flights/' + response.id, { trigger: true });
      }
    })
  }
});