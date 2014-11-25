window.AeroBnb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#main');
    var router = new AeroBnb.Routers.Router($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  AeroBnb.initialize();
});
