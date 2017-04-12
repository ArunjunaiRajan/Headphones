define('headphones/controllers/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    email: '',
    name: '',
    isDisabled: _ember['default'].computed.empty('email', 'name'),
    actions: {
      saveresponse: function saveresponse() {
        var email = this.get('email');
        var name = this.get('name');

        var newFeedback = this.store.createRecord('feedback', { email: email, name: name });
        newFeedback.save();
        this.set('responseMessage', 'Thank you! We\'ve just saved your details');
        this.set('email', '');
        this.set('name', '');
      }
    }
  });
});