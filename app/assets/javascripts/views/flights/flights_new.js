AeroBnb.Views.FlightsNew = Backbone.CompositeView.extend({
  template: JST["flights/new"],

  initialize: function () {
    var airports = new AeroBnb.Collections.Airports();
    airports.fetch();
    var airportSelect = new AeroBnb.Views.AirportSelect({airports: airports});
    this.addSubview('#airport-select', airportSelect);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  events: {
    'submit #new-flight': 'newFlight'
  },

  newFlight: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    alert(params);
  }
})