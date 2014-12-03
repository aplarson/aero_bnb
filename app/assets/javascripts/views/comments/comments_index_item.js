AeroBnb.Views.CommentIndexItem = Backbone.View.extend({
  template: JST["comments/index_item"],

  initialize: function (options) {
    this.comment = options.comment;
  },

  render: function () {
    var content = this.template({ comment: this.comment });
    this.$el.html(content);
    return this;
  }
});