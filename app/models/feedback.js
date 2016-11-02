import DS from 'ember-data';

export default DS.Model.extend({
user: DS.attr(),
rating: DS.attr(),
details: DS.attr(),
item: DS.belongsTo('item', { async: true })
});
