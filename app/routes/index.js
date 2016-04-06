import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('item');
  },
  actions: {
    viewItem3(item){
      console.log(item);
      this.transitionTo('view-item', item.id);
    }
  }
});
