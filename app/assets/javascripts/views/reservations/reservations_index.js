AeroBnb.Views.ReservationsIndex = Backbone.View.extend({
  template: JST["reservations/index"],

  initialize: function (options) {
    this.reservations = options.reservations;
    this.listenTo(this.reservations, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ reservations: this.reservations });
    this.$el.html(content);
    return this;
  }
});