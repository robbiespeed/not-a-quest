import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create');
  this.route('play', { path: '/play/:player_id' });
  this.route('edit', { path: '/edit/:player_id' });
});

export default Router;
