define('headphones/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'headphones/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _headphonesConfigEnvironment) {
  var _config$APP = _headphonesConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});