AeroBnb.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',

  model: AeroBnb.Models.Comment,

  comparator: "created_at"
});