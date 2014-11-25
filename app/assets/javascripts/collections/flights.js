AeroBnb.Collections.Flights = Backbone.Collection.extend({
  model: AeroBnb.Models.Flight,
  url: '/api/flights'
})