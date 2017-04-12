define('headphones/app', ['exports', 'ember', 'headphones/resolver', 'ember-load-initializers', 'headphones/config/environment'], function (exports, _ember, _headphonesResolver, _emberLoadInitializers, _headphonesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _headphonesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _headphonesConfigEnvironment['default'].podModulePrefix,
    Resolver: _headphonesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _headphonesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});