AeroBnb.Views.FlightsEdit = Backbone.View.extend({
  template: JST["flights/form"],

  events: {
    'click #submit-button': 'updateFlight',
    'click #filepicker': 'uploadImage',
    'click #new-airport-link': 'newAirport'
  },

  initialize: function (options) {
    this.flight = options.flight;
    this.listenTo(this.flight, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);
    this.$('#airport-name').autocomplete({ 
      source: '/api/airports/names',
      select: this.selectAirport.bind(this)
    });
    return this;
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


  updateFlight: function (event) {
    event.preventDefault();
    var params = this.$('.flight-form').serializeJSON();

    this.flight.save(params["flight"], {
      success: function (response) {
        Backbone.history.navigate('flights/' + response.id, { trigger: true });
      },
      error: function (model, response) {
        this.displayErrors(response);
      }.bind(this)
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
});