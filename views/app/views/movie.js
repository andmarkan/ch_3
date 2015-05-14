var Backbone = require('backbone');
var $ = require('jquery-untouched');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %></h1><hr>',

  events: {
    'click': 'selectMovie'
  },

  selectMovie: function(ev) {
    ev.preventDefault();
    console.log('event on ' + this.model.id);
    var selected = this.model.get('selected');
    this.model.collection.resetSelected();
    if (!selected) {
      this.model.collection.selectByID(this.model.id);
    }
  },
 
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },
  initialize: function() {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  }
});
module.exports = MovieView;
