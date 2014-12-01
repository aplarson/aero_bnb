AeroBnb.Views.UsersEdit = Backbone.View.extend({
  template: JST["users/edit"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render)
  },

  events: {
    "submit #edit-user-form": "updateUser"
  },

  render: function () {
    var content = this.template({ user: this.user });
    this.$el.html(content);
    return this;
  },

  updateUser: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    this.user.save(params["user"], {
      success: function () {
        Backbone.history.navigate("users/" + this.user.id, { trigger: true })
      }.bind(this)
    })
  }
});