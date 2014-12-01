AeroBnb.Views.ReservationsIndexItem = Backbone.View.extend({
  template: JST["reservations/index_item"],

  initialize: function (options) {
    this.reservation = options.reservation;
    this.$el = $('<li>').addClass('index-item');
    this.listenTo(this.reservation, 'sync', this.render);
  },

  events: {
    'click .index-container': 'showFlight'
  },

  render: function () {
    var content = this.template({ reservation: this.reservation });
    this.$el.html(content);
    return this;
  },

  showFlight: function (event) {
    Backbone.history.navigate('flights/' + this.reservation.flight.id, { trigger: true })
  }
});