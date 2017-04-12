define('ember-cli-mirage/utils/is-association', ['exports', 'lodash/lang/isPlainObject'], function (exports, _lodashLangIsPlainObject) {
  'use strict';

  exports['default'] = function (object) {
    return (0, _lodashLangIsPlainObject['default'])(object) && object.__isAssociation__ === true;
  };
});