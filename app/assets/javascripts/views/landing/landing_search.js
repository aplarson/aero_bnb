AeroBnb.Views.LandingSearch = Backbone.View.extend({
  template: JST["landing/landing_search"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
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