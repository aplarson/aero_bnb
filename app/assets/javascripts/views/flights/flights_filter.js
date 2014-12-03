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
    var maxPrice = this.queryParams["max_price"] || 5000;
    var minPrice = this.queryParams["min_price"] || 0;
    this.$('#price-filter').slider({
      range: true,
      min: 0,
      max: 5000,
      values: [minPrice, maxPrice],
      slide: this.updatePrice.bind(this),
      stop: function () {
        $("#filter-form").trigger('change');
      }
    })
    this.attachSubviews();
    return this;
  },

  updatePrice: function (event, ui) {
    this.$('#min-price').val(ui.values[0]);
    this.$('#max-price').val(ui.values[1]);
  }
})