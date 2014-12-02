AeroBnb.Views.UsersEdit = Backbone.View.extend({
  template: JST["users/edit"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render)
  },

  events: {
    "click #edit-user-button": "updateUser",
    "click #filepicker": "uploadImage"
  },

  render: function () {
    var content = this.template({ user: this.user });
    this.$el.html(content);
    return this;
  },

  updateUser: function (event) {
    event.preventDefault();
    var params = this.$('#edit-user-form').serializeJSON();
    this.user.save(params["user"], {
      success: function () {
        Backbone.history.navigate("users/" + this.user.id, { trigger: true })
      }.bind(this)
    })
  },

  uploadImage: function (event) {
    event.preventDefault();
    filepicker.pick({
        mimetype: 'image/*'
      },
      function (Blob) {
       this.user.set('photo_url', Blob.url); 
      }.bind(this)
    );
  }
});