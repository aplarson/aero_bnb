AeroBnb.Views.FlightsFilter = Backbone.CompositeView.extend({
  template: JST["flights/filter"],

  initialize: function (options) {
    this.queryParams = options.queryParams;

    var airportSelect = new AeroBnb.Views.AirportSelect({ 
                                      airports: options.airports, 
                                      name: "airport",
                                      selected: this.queryParams.airport
                                    });
    this.addSubview('#airport-select', airportSelect);
  },

  render: function () {
    var content = this.template({ params: this.queryParams });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})