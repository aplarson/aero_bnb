AeroBnb.Views.FlightsSearch = Backbone.CompositeView.extend({
  template: JST["flights/search"],

  events: {
    'change #filter-form': 'newSearch'
  },

  initialize: function (options) {
    this.airports = options.airports;
    this.queryParams = this.parseQueryString(options.queryString);
    this.search(this.queryParams);
  },

  render: function () {
    var content = this.template({ view: this });
    this.$el.html(content);
    var filterView = new AeroBnb.Views.FlightsFilter({ queryParams: this.queryParams,
          airports: this.airports });
    this.addSubview('#filters', filterView);
    this.centerMap();
    return this;
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

  centerMap: function () {
    var airport = this.queryParams.airport
    if (airport) {
      airport = new AeroBnb.Models.Airport({ id: airport });
      airport.fetch({
        success: function () {
          this.map = window.map;
          var airportLoc = this.locateAirport(airport);
          this.map.setCenter(airportLoc);
          this.markAirports();
          google.maps.event.addListener(this.map, 'bounds_changed', this.markAirports.bind(this));
        }.bind(this)
      })
    }
  },

  getAirports: function (event) {
    console.log(this.map.getBounds());
  },

  locateAirport: function (airport) {
    var latitude = airport.get('latitude');
    var longitude = airport.get('longitude');
    var airportLoc = new google.maps.LatLng(latitude, longitude);
    return airportLoc;
  },

  markAirports: function () {
    var bounds = this.map.getBounds();
    if (bounds) {
      var coords = bounds.toUrlValue().split(',');
      var namedCoords = {
        south: coords[0],
        west: coords[1],
        north: coords[2],
        east: coords[3]
      }
      var view = this;
      $.ajax({
        data: namedCoords,
        dataType: 'json',
        url: '/api/airports/search',
        success: function (response) {
          view.airports = new AeroBnb.Collections.Airports(response);
          view.placeMarks();
        }
      })
    }
  },

  newSearch: function (event) {
    var params = $(event.currentTarget).serializeJSON();
    this.search(params);
    var queryEls = [];
    _(params).each(function (val, key) {
      queryEls.push(key + '=' + val)
    })
    var query = queryEls.join('&');
    Backbone.history.navigate('flights/search/' + query, { replace: true });
  },

  placeMarks: function () {
    this.airports.each(function (airport) {
      var airportLoc = this.locateAirport(airport);
      var marker = new google.maps.Marker({
        position: airportLoc,
        map: this.map,
        title: airport.escape('name')
      });
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
    this.removeSubviews('#listings');
  },

  search: function (queryParams) {
    var view = this;
    this.queryParams = queryParams;
    $.ajax({
      data: queryParams,
      dataType: 'json',
      url: '/api/flights/search',
      success: function (response) {
        view.populateResults(response);
        view.centerMap();
      }
    })
  }
})