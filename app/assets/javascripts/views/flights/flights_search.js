AeroBnb.Views.FlightsSearch = Backbone.CompositeView.extend({
  template: JST["flights/search"],

  initialize: function (options) {
    var queryParams = this.parseQueryString(options.queryString);
    this.search(queryParams);
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
    this.flights.forEach(function (flight) {
      this.addFlight(flight);
    }.bind(this))
  },

  populateResults: function (responseObjects) {
    this.removeFlights();
    this.flights = new AeroBnb.Collections.Flights(responseObjects, { parse: true });
    this.addFlights();
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
  },

  removeFlights: function () {
    this.subviews('#listings').forEach(function (subview) {
      this.removeSubview('#listings', subview);
    }.bind(this))
  },

  search: function (queryParams) {
    var view = this;
    $.ajax({
      data: queryParams,
      dataType: 'json',
      url: '/api/flights/search',
      success: function (response) {
        view.populateResults(response);
      }
    })
  }
})