AeroBnb.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST["comments/index"],

  initialize: function (options) {
    this.comments = options.comments;
    this.owner = options.owner;
    this.comments.each(function (comment) {
      this.addComment(comment);
    }.bind(this));
    var formView = new AeroBnb.Views.CommentForm();
    this.addSubview('#comment-form', formView);
    listenTo(this.comments, 'add', addComment);
  },

  events: {
    'submit #new-comment-form': 'saveComment'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addComment: function (comment) {
    var view = new AeroBnb.Views.CommentIndexItem({ comment: comment });
    this.addSubview('#comment-list', view);
  },

  saveComment: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    params["comment"]["commentable_id"] = owner.id;
    params["comment"]["commentable_type"] = "Flight";
    var comment = new AeroBnb.Models.Comment(params["comment"]);
    debugger
    comment.save([], {
      success: function (response) {
        this.comments.add(comment);
      }.bind(this)
    })
  }
});