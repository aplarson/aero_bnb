AeroBnb.Views.ReservationsBooking = Backbone.View.extend({
  template: JST["reservations/booking"],

  initialize: function (options) {
    this.flight = options.flight;
  },

  events: {
    "submit #flight-booking-form": "makeReservation"
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    return this;
  },

  makeReservation: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    var reservation = new AeroBnb.Models.Reservation(params["reservation"]);
    reservation.save([], {
      success: function () {
        alert("Reservation created!")
      }
    });
  }
});