define('headphones/controllers/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    email: '',
    name: '',
    isDisabled: _ember['default'].computed.empty('email', 'name'),
    actions: {
      saveresponse: function saveresponse() {
        var _this = this;

        var email = this.get('email');
        var name = this.get('name');

        var newFeedback = this.store.createRecord('feedback', { email: email, name: name });
        newFeedback.save().then(function (response) {
          _this.set('responseMessage', 'Thank you! We saved your feedback for the email address: ' + response.get('email'));
          _this.set('email', '');
          _this.set('name', '');
          _this.transitionTo('/');
        });
      }
    }
  });
});