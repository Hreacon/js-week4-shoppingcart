import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  model(params){//params contain item id.
    return this.store.findRecord('item', params.item); //.item comes from router.js you noob
  },

  actions: {
    addItem(model){
      this.get('cart').addItem(model);
    }
  }

});
