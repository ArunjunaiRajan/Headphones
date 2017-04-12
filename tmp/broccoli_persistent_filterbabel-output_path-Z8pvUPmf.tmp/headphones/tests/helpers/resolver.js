define('headphones/tests/helpers/resolver', ['exports', 'headphones/resolver', 'headphones/config/environment'], function (exports, _headphonesResolver, _headphonesConfigEnvironment) {

  var resolver = _headphonesResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _headphonesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _headphonesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});