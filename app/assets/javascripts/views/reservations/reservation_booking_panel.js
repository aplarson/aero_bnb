AeroBnb.Views.ReservationsBooking = Backbone.View.extend({
  template: JST["reservations/booking"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});