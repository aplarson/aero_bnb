AeroBnb.Views.FlightsNew = Backbone.View.extend({
  template: JST["flights/form"],

  render: function () {
    var content = this.template({ flight: new AeroBnb.Models.Flight() });
    this.$el.html(content);

    this.$('#airport-name').autocomplete({ 
      source: '/api/airports/names',
      select: this.selectAirport.bind(this)
    });
    return this;
  },

  events: {
    'click #submit-button': 'newFlight',
    'click #new-airport-link': 'newAirport',
    'click #filepicker': 'uploadImage'
  },

  displayErrors: function (response) {
    var errorList = $('<ul>').addClass("error-list")
    _(response.responseJSON).each(function (error) {
      var errorText = $('<li>').html(error);
      errorList.append(errorText);
    })
    $('#errors').html(errorList);
  },

  newAirport: function (event) {
    var view = new AeroBnb.Views.AirportsNew({ airports: this.airports });
    this.$('#airport-creation').html(view.render().$el);
  },

  newFlight: function (event) {
    event.preventDefault();
    var params = this.$('.flight-form').serializeJSON();
    var flight = new AeroBnb.Models.Flight(params["flight"]);
    flight.save([], {
      success: function (response) {
        Backbone.history.navigate('flights/' + response.id, { trigger: true });
      },
      error: function (model, response) {
        this.displayErrors(response);
      }.bind(this)
    })
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
  },

  uploadImage: function (event) {
    event.preventDefault();
    filepicker.pick({
        mimetype: 'image/*'
      },
      function (Blob) {
       this.flight.set('photo_url', Blob.url); 
      }.bind(this)
    );
  }
})