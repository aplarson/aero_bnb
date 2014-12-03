AeroBnb.Views.FlightsShow = Backbone.CompositeView.extend({
  template: JST["flights/show"],

  initialize: function (options) {
    this.flight = options.flight;
    this.flight.fetch({
      success: function () {
        this.populateSubviews();
      }.bind(this)
    });
    this.listenTo(this.flight, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ flight: this.flight });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  populateSubviews: function () {
    var commentsView = new AeroBnb.Views.CommentsIndex({
      comments: this.flight.comments().sort(), 
      owner: this.flight
    });
    this.addSubview("#comments", commentsView);
    var bookingView = new AeroBnb.Views.ReservationsBooking({ flight: this.flight });
    this.addSubview("#booking-panel", bookingView)
  }
})