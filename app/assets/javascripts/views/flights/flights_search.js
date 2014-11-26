AeroBnb.Views.FlightsSearch = Backbone.CompositeView.extend({
  template: JST["flights/search"],

  initialize: function (options) {
    this.flights = options.flights;
    this.listenTo(this.flights, 'add', this.addFlight);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this._flights).each(function (flightView) {
      flightView.remove();
    })
  },

  addFlight: function (flight) {
    var view = new AeroBnb.Views.FlightsSearchItem({ flight: flight });
    this.addSubview('#listings', view)
  },

  addFlights: function () {
    this.flights.each(function (flight) {
      this.addFlight(flight);
    }.bind(this))
  }
})