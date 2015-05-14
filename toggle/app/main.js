var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

// model
var Movie = require('models/movie');
var movie = new Movie({title: 'The Artist'});

// views
var MovieView = require('views/movie');
var movieView;

$(document).ready(function() {
  movieView = new MovieView({el: $('.movie'), model: movie});
  movieView.render()
});

module.exports = {model: movie};
