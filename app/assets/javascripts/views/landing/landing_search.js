AeroBnb.Views.LandingSearch = Backbone.CompositeView.extend({
  template: JST["landing/landing_search"],

  initialize: function () {
    this.airports = new AeroBnb.Collections.Airports();
    this.airports.fetch();
    var airportSelect = new AeroBnb.Views.AirportSelect({ airports: this.airports, name: "airport" });
    this.addSubview('#airport-select', airportSelect);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  events: {
    'submit #landing-search-form': 'showResults'
  },

  showResults: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    var queryEls = [];
    _(params).each(function (val, key) {
      queryEls.push(key + '=' + val)
    })
    var query = queryEls.join('&');
    Backbone.history.navigate('flights/search/' + query, { trigger: true })
  }
});