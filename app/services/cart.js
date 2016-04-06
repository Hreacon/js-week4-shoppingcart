import Ember from 'ember';



export default Ember.Service.extend({
    items: [],
    addItem(item) {
      this.get('items').pushObject(item);
    },
    removeItem(item){
      this.get('items').removeObject(item);
    }
});
