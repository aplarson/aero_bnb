AeroBnb.Models.Flight = Backbone.Model.extend({
  urlRoot: '/api/flights',

  commentableType: "Flight",

  comments: function () {
    if (!this._comments) {
      this._comments = new AeroBnb.Collections.Comments();
    }
    return this._comments;
  },

  parse: function (response) {
    if (response.departure_airport) {
      this.departureAirport = new AeroBnb.Models.Airport(response.departure_airport);
      delete response.departure_airport;
    }
    if (response.owner) {
      this.owner = new AeroBnb.Models.User(response.owner);
      delete response.owner;
    }
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }
    return response;
  }
})