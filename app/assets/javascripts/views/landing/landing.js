AeroBnb.Views.LandingView = Backbone.View.extend({
  template: JST["landing/landing"],

  events: {
    'submit #landing-search-form': 'showFlights'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var searchBar = new AeroBnb.Views.LandingSearch();
    this.$('#landing-search-bar').html(searchBar.render().$el);
    return this;
  },

  showFlights: function (event) {
    event.preventDefault();
    Backbone.history.navigate('flights', { trigger: true })
  }
});