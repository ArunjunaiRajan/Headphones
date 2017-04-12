define('headphones/controllers/headsets/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      filterByName: function filterByName(param) {
        if (param !== '') {
          var unfilterd = this.store.findAll('headset');
          console.log(unfilterd);
        } else {
          return this.store.findAll('headset');
        }
      }
    }
  });
});