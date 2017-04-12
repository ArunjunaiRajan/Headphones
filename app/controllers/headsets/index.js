
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        let unfilterd=this.store.findAll('headset');
        console.log(unfilterd);
      }
      else {
        return this.store.findAll('headset');
      }
    }
  }
});
