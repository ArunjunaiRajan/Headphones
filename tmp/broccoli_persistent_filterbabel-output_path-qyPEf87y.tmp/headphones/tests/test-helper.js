define('headphones/tests/test-helper', ['exports', 'headphones/tests/helpers/resolver', 'ember-qunit'], function (exports, _headphonesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_headphonesTestsHelpersResolver['default']);
});