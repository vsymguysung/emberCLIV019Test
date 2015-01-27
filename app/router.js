import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("dashboard", { path: 'dashboard' }, function() {
    this.route("news", { path: '/news/:news_id' });
    this.route("profile", { path: '/profile/:profile_id' });
  });
});

export default Router;
