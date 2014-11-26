AeroBnb.Models.Flight = Backbone.Model.extend({
  urlRoot: '/api/flights',

  parse: function (response) {
    if (response.departure_airport) {
      this.departureAirport = new AeroBnb.Models.Airport(response.departure_airport);
      delete response.departure_airport;
    }

    return response;
  }
})