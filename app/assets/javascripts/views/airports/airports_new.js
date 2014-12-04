AeroBnb.Views.AirportsNew = Backbone.View.extend({
  template: JST["airports/new"],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'submit #new-airport-form': 'createAirport'
  },

  createAirport: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    var airport = new AeroBnb.Models.Airport(params["airport"]);
    airport.save({}, {
      success: function () {
        this.remove();
      }.bind(this),

      error: function (model, response) {
        this.displayErrors(response);
      }.bind(this)
    })
  },

  displayErrors: function (response) {
    var view = this;
    _(response.responseJSON).each(function (errors, field) {
      _(errors).each(function (error) {
        var errorText = $('<li>').html(error);
        view.$('#' + field + '-errors').append(errorText);
      })
    })
  }
});