define('headphones/models/feedback', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    email: _emberData['default'].attr(),
    comment: _emberData['default'].attr()
  });
});