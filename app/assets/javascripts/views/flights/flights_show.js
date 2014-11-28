AeroBnb.Views.FlightsShow = Backbone.CompositeView.extend({
  template: JST["flights/show"],

  initialize: function (options) {
    this.flight = options.flight;
    this.flight.fetch();
    this.listenTo(this.flight, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    var bookingView = new AeroBnb.Views.ReservationsBooking({ flight: this.flight });
    this.addSubview("#booking-panel", bookingView)
    return this;
  }
})