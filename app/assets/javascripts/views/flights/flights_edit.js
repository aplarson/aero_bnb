AeroBnb.Views.FlightsEdit = Backbone.View.extend({
  template: JST["flights/form"],

  events: {
    'click #submit-button': 'updateFlight',
    'click #filepicker': 'uploadImage'
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
});