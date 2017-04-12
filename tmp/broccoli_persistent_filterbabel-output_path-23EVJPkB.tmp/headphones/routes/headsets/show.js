define('headphones/routes/headsets/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('headset', params.headsets_id);
    }
  });
});