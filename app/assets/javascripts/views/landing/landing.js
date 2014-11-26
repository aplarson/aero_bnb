AeroBnb.Views.LandingView = Backbone.View.extend({
  template: JST["landing/landing"],

  events: {
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var searchBar = new AeroBnb.Views.LandingSearch();
    this.$('#landing-search-bar').html(searchBar.render().$el);
    return this;
  }
});