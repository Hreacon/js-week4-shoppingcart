import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  rating: DS.attr(),
  item: DS.belongsTo('item')
});
