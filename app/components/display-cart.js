import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeCart(item) {
      this.get('shoppingCart').remove(item);
      this.set('shoppingCart', null);
      this.set('shoppingCart', Ember.inject.service());
    }
  }
});
