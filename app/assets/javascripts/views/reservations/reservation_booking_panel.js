AeroBnb.Views.ReservationsBooking = Backbone.View.extend({
  template: JST["reservations/booking"],

  initialize: function (options) {
    this.flight = options.flight;
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  }
});