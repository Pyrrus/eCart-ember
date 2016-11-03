import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('item', params.product_id);
  },
  actions: {
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var item = params.item;
      item.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return item.save();
      });
    },
    deleteFeedback(comment) {
      comment.destroyRecord();
    },
    addToCart(item, cost) {
      this.get('shoppingCart').add(item, cost);
    }
  }
});
