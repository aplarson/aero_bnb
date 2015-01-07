AeroBnb.Views.ReservationsIndex = Backbone.CompositeView.extend({
  template: JST["reservations/index"],

  initialize: function (options) {
    this.reservations = options.reservations;
    this.listenTo(this.reservations, 'sync', this.render);
    this.listenTo(this.reservations, 'add', this.addReservation);
  },

  render: function () {
    var content = this.template({ reservations: this.reservations });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addReservation: function (reservation) {
    if (reservation.get('user_id') === window.currentUser) {
      var ownedFlight = false;
      var targetEl = '#reservation-index';
    } else {
      var ownedFlight = true;
      var targetEl = '#reserved-flights-index';
    }
    var view = new AeroBnb.Views.ReservationsIndexItem({
        reservation: reservation,
        ownedFlight: ownedFlight
      });
    this.addSubview(targetEl, view)
  }
});
