AeroBnb.Collections.Reservations = Backbone.Collection.extend({
  url: "/api/reservations",

  model: AeroBnb.Models.Reservation
})