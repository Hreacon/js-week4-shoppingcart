import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  model(params){//params contain item id.
    return this.store.findRecord('item', params.item); //.item comes from router.js you noob
  },

  actions: {
    addItem(model){
      this.get('cart').addItem(model);
    },
    saveReview3(params){
      var newReview = this.store.createRecord('review', params);
      var item = params.item;
      item.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        item.save();
      });
    }
  }
});
