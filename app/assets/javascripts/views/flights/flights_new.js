AeroBnb.Views.FlightsNew = Backbone.View.extend({
  template: JST["flights/new"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'submit #new-flight': 'newFlight'
  },

  newFlight: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    alert(params);
  }
})