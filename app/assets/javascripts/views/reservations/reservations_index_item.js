AeroBnb.Views.ReservationsIndexItem = Backbone.View.extend({
  template: JST["reservations/index_item"],

  initialize: function (options) {
    this.reservation = options.reservation;
    this.$el = $('<li>').addClass('index-item');
    this.listenTo(this.reservation, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ reservation: this.reservation });
    this.$el.html(content);
    return this;
  }
});