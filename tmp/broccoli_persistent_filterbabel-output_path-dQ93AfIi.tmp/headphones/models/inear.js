define('headphones/models/inear', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    type: _emberData['default'].attr(),
    rate: _emberData['default'].attr(),
    image: _emberData['default'].attr(),
    description: _emberData['default'].attr()
  });
});