AeroBnb.Models.Flight = Backbone.Model.extend({
  urlRoot: '/api/flights',

  parse: function (response) {
    if (response.departure_airport) {
      this.departureAirport = new AeroBnb.Models.Airport(response.departure_airport);
      delete response.departure_airport;
    }
    if (response.owner) {
      this.owner = new AeroBnb.Models.User(response.owner);
      delete response.owner;
    }
    if (resonse.comments) {
      this.comments = new AeroBnb.Collections.Comments(response.comments);
      delete response.comments;
    }
    return response;
  }
})