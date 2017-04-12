define('headphones/routes/on-ear/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('on-ear', params.onear_id);
    }
  });
});