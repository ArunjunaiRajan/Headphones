import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author');
  this.route('contact');
  this.route('in-ear', function() {
    this.route('show',{path: '/:inear_id'});
  });
  this.route('on-ear', function() {
    this.route('show',{path: '/:onear_id'});
  });
  this.route('feedback');
  this.route('headsets', function() {
    this.route('show',{path: '/:headsets_id'});
  });
});

export default Router;
