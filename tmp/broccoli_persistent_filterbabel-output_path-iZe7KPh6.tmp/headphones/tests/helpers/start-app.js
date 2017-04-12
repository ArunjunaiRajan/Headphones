define('headphones/tests/helpers/start-app', ['exports', 'ember', 'headphones/app', 'headphones/config/environment'], function (exports, _ember, _headphonesApp, _headphonesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _headphonesConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _headphonesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});