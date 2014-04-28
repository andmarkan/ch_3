var Backbone = require("backbone");
  var Movie = Backbone.Model.extend({
    defaults: {
      title: "default",
      year: 0,
      description: "empty",
      selected: false
    },

    toggleSelected: function() {
      this.set('selected', !this.get('selected'));
    }
  });
  module.exports = Movie;
