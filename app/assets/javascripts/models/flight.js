AeroBnb.Models.Flight = Backbone.Model.extend({
  urlRoot: '/api/flights',

  parse: function (response) {
    if (response.departure_airport) {
      this.departureAirport = new AeroBnb.Models.Airport({ id: response.departure_airport.id });
      this.departureAirport.fetch();
      delete response.departure_airport;
    }

    return response;
  }
})