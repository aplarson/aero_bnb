AeroBnb.Views.LandingSearch = Backbone.CompositeView.extend({
  template: JST["landing/landing_search"],

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
    if (this.airport) {
      var airport_location = [this.airport.escape('latitude'), this.airport.escape('longitude')]
      queryEls.push("map_center=" + airport_location);
    }
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
        view.airport = new AeroBnb.Models.Airport(response);
        view.$('#airport-id').val(view.airport.id);
      }
    })
  }
});