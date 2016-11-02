import DS from 'ember-data';

export default DS.Model.extend({
name: DS.attr(),
price: DS.attr('number'),
description: DS.attr(),
image: DS.attr(),
feedbacks: DS.hasMany('feedback', { async: true }),
cart: DS.belongsTo('cart', { async: true })
});
