define('headphones/routes/in-ear/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('in-ear', params.inear_id);
    }
  });
});