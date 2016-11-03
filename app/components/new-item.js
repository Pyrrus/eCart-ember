import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    showItemForm() {
      this.set('addNewItem', true)
    },
    saveItem1() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem2', params);
    }
  }
});
