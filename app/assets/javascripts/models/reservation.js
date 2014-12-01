AeroBnb.Models.Reservation = Backbone.Model.extend({
  urlRoot: "/api/reservations",

  parse: function (response) {
    if (response.flight) {
      this.flight = new AeroBnb.Models.Flight(response.flight);
      delete response.flight;
    }
    if (response.departure_airport) {
      this.departureAirport = new AeroBnb.Models.Airport(response.departure_airport);
      delete response.departure_airport;
    }
    return response;
  }
})