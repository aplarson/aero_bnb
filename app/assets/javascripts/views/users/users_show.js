AeroBnb.Views.UsersShow = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ user: this.user });
    this.$el.html(content);
    return this;
  }
});
