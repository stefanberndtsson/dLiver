import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login');
  this.resource('package', function() {
  	this.route('index');
  	this.route('show', {path: '/:name'});
  });
});

export default Router;
