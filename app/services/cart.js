import Ember from 'ember';




export default Ember.Service.extend({
    items: [],
    total: Ember.computed('items.[]', function() {
      var items = this.get('items');
      console.log("COMPUTING");
      var total = 0;
      items.forEach(function(item) {
        total = total + parseInt(item.get('price'));
      });
      return total;
    }),
    addItem(item) {
      this.get('items').pushObject(item);
    },
    removeItem(item){
      this.get('items').removeObject(item);
    }
});
