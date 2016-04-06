import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveReview(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        rating: this.get('rating'),
        item: this.get('item')
      };
      this.sendAction('saveReview2', params)
    }
  }
});
