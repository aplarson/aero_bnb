AeroBnb.Models.Reservation = Backbone.Model.extend({
  urlRoot: "/api/reservations",

  parse: function (response) {
    if (response.flight) {
      this.flight = new AeroBnb.Models.Flight(response.flight);
      delete response.flight;
    }
    return response;
  }
})