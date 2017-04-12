define('headphones/helpers/app-version', ['exports', 'ember', 'headphones/config/environment'], function (exports, _ember, _headphonesConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _headphonesConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});