AeroBnb.Views.LandingView = Backbone.View.extend({
  template: JST["landing/landing"],

  initialize: function (options) {
    this.airports = options.airports;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var searchBar = new AeroBnb.Views.LandingSearch({ airports: this.airports });
    this.$('#landing-search-bar').html(searchBar.render().$el);
    return this;
  }
});