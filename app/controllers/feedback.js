import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  name:'',
  isDisabled: Ember.computed.empty('email','name'),
  actions: {
   saveresponse() {
     const email = this.get('email');
     const name=this.get('name');

      const newFeedback = this.store.createRecord('feedback', { email: email, name:name });
      newFeedback.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your feedback for the email address: ${response.get('email')}`);
        this.set('email', '');
        this.set('name','');
        this.transitionTo('/');
      });

   }
 }
});
