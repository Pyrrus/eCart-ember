import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  length: 0,
  price: 0,
  add(item, cost) {
    var holder = this.get('length');
    holder++;
    var priceHolder = this.get('price');
    console.log(cost);
    priceHolder += cost;
    this.get('items').pushObject(item);
    this.set('length', holder);
    this.set('price', priceHolder);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.get('items').splice(index, 1);
    var newTotal = this.get('price') - parseInt(item.get('price'));
    this.set("price", newTotal);
    var length = this.get('length');
    length--;
    this.set('length', length);
  }
});
