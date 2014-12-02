AeroBnb.Views.LandingSearch = Backbone.CompositeView.extend({
  template: JST["landing/landing_search"],

  initialize: function (options) {
    this.airports = options.airports;
    // var airportSelect = new AeroBnb.Views.AirportSelect({ airports: this.airports, name: "airport" });
    // this.addSubview('#airport-select', airportSelect);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.attachSubviews();
    this.$('#airport-name').autocomplete({ 
        source: '/api/airports/names',
        select: this.selectAirport.bind(this)
      });
    return this;
  },

  events: {
    'submit #landing-search-form': 'showResults',
    'keyup #airport-select': 'getAirportOptions'
  },

  showResults: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    var queryEls = [];
    _(params).each(function (val, key) {
      if (key != 'airport_name') {
        queryEls.push(key + '=' + val)
      }
    })
    var query = queryEls.join('&');
    Backbone.history.navigate('flights/search/' + query, { trigger: true })
  },

  selectAirport: function (event, ui) {
    var name = ui.item.value;
    var view = this;
    $.ajax({
      url: '/api/airports/name_search',
      dataType: 'json',
      data: { 'airport': { 'name': name } },
      success: function (response) {
        view.$('#airport-id').val(response);
      }
    })
  }
});