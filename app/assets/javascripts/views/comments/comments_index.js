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
    this.listenTo(this.comments, 'add', this.addComment);
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
    params["comment"]["commentable_id"] = this.owner.id;
    params["comment"]["commentable_type"] = this.owner.commentableType;
    var comment = new AeroBnb.Models.Comment(params["comment"]);
    comment.save([], {
      success: function (response) {
        this.comments.add(comment);
        this.$('textarea').val('');
      }.bind(this)
    })
  }
});