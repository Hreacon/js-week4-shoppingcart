import DS from 'ember-data';

export default DS.Model.extend({
  thing: DS.attr(),
  price: DS.attr(),
  reviews: DS.hasMany('review')

});
