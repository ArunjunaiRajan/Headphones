define('headphones/routes/in-ear/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('inear', params.inear_id);
    }
  });
});