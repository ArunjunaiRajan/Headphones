define('headphones/router', ['exports', 'ember', 'headphones/config/environment'], function (exports, _ember, _headphonesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _headphonesConfigEnvironment['default'].locationType,
    rootURL: _headphonesConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('author');
    this.route('contact');
    this.route('in-ear', function () {
      this.route('show', { path: '/:inear_id' });
    });
    this.route('on-ear', function () {
      this.route('show', { path: '/:onear_id' });
    });
    this.route('feedback');
    this.route('headsets', function () {
      this.route('show', { path: '/:headsets_id' });
    });
  });

  exports['default'] = Router;
});