AeroBnb.Views.FlightsNew = Backbone.CompositeView.extend({
  template: JST["flights/new"],

  initialize: function () {
    this.airports = new AeroBnb.Collections.Airports();
    this.airports.fetch();
    var airportSelect = new AeroBnb.Views.AirportSelect({ airports: this.airports });
    this.addSubview('#airport-select', airportSelect);
    this.listenTo(this.airports, 'add', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  events: {
    'submit #new-flight': 'newFlight',
    'click #new-airport-link': 'newAirport'
  },

  newAirport: function (event) {
    var view = new 
  },

  newFlight: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    var flight = new AeroBnb.Models.Flight(params["flight"]);
    flight.save([], {
      success: function (response) {
        Backbone.history.navigate('flights/' + response.id, { trigger: true });
      }
    })
  }
})