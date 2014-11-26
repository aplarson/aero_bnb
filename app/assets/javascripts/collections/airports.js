AeroBnb.Collections.Airports = Backbone.Collection.extend({
  url: '/api/airports',

  model: AeroBnb.Models.Airport
})