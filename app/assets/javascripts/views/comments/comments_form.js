AeroBnb.Views.CommentForm = Backbone.View.extend({
  template: JST["comments/form"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});