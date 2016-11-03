import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.product_id);
  },
  actions: {
    update(item) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
      };

      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('/admin');
    }
  }
});
