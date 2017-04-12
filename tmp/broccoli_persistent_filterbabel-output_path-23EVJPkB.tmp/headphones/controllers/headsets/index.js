define('headphones/controllers/headsets/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      filterByName: function filterByName(param) {
        if (param !== '') {
          return this.get('store').query('headset', { title: param });
        } else {
          return this.get('store').findAll('headset');
        }
      }
    }
  });
});