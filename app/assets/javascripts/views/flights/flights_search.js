AeroBnb.Views.FlightsSearch = Backbone.View.extend({
  template: JST["flights/search"],

  initialize: function (options) {
    this.flights = options.flights;
    this.listenTo(this.flights, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.addFlights();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this._flights).each(function (flightView) {
      flightView.remove();
    })
  },

  addFlights: function () {
    this._flights = [];
    this.$('#listings').empty();
    this.flights.each(function (flight) {
      var view = new AeroBnb.Views.FlightsSearchItem({ flight: flight });
      this.$('#listings').append(view.render().$el);
      this._flights.push(view);
    }.bind(this))
  }
})