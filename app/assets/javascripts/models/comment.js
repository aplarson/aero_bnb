AeroBnb.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (response) {
    if (response.author) {
      this.author = new AeroBnb.Models.User(response.author);
      delete response.author;
    }
    return response;
  }
});