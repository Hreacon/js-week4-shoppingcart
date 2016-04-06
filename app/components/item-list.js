import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    addItem(item){
      this.get('cart').addItem(item);
    },
    removeItem(item){
      this.get('cart').removeItem(item);
    },
    viewItem(item) {
      console.log(item);
      this.sendAction('viewItem2', item);
    }
  }
});
