define('headphones/routes/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('feedback');
    },
    actions: {
      new_record: function new_record() {
        var review = this.modelFor(this.routeName);
        var self = this;
        self.set(review);
        self.save().then(function () {
          self.transitionTo('/feedback');
        })['catch'](function () {});
      }
    }
  });
});