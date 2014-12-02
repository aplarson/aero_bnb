AeroBnb.Views.FlightsFilter = Backbone.CompositeView.extend({
  template: JST["flights/filter"],

  initialize: function (options) {
    this.queryParams = options.queryParams;
    var airportFilter = new AeroBnb.Views.AirportsFilter({ 
                                      airports: options.airports,
                                      selected: this.queryParams["airport"]
                                    });
    this.addSubview('#airport-select', airportFilter);
  },

  render: function () {
    var content = this.template({ params: this.queryParams });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})