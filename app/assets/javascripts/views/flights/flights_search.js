AeroBnb.Views.FlightsSearch = Backbone.CompositeView.extend({
  template: JST["flights/search"],

  initialize: function (options) {
    var queryParams = this.parseQueryString(options.queryString);
    $.ajax({
      data: queryParams,
      dataType: 'json',
      url: '/api/flights/search',
      success: function (response) {
        console.log(response);
      }
    })
    
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var filterView = new AeroBnb.Views.FlightsFilter();
    this.addSubview('#filters', filterView)
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this._flights).each(function (flightView) {
      flightView.remove();
    })
  },

  addFlight: function (flight) {
    var view = new AeroBnb.Views.FlightsSearchItem({ flight: flight });
    this.addSubview('#listings', view);
  },

  addFlights: function () {
    this.flights.each(function (flight) {
      this.addFlight(flight);
    }.bind(this))
  },

  parseQueryString: function (string) {
    var params = {};
    var pairStrings = string.split('&');
    _.each(pairStrings, function (pairString) {
      var pair = pairString.split('=')
      if (pair[1]) {
        params[pair[0]] = pair[1];
      }
    })
    return params;
  }
})