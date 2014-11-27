AeroBnb.Views.FlightsIndex = Backbone.CompositeView.extend({
  template: JST["flights/index"],

  initialize: function () {
    this.flights = new AeroBnb.Collections.Flights();
    this.flights.fetch();
    this.listenTo(this.flights, 'add', this.addFlight);
    this.listenTo(this.flights, 'sync', this.addFlights)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addFlight: function (flight) {
    var view = new AeroBnb.Views.FlightsIndexItem({ flight: flight })
    this.addSubview('#flights-index', view);
  },

  addFlights: function () {
    this.flights.each(function (flight) {
      this.addFlight(flight);
    }.bind(this))
  }
});