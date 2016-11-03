import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    saveItem3(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
    },
    remove(item) {
      if (confirm('Are you sure you want to delete this review?')) {
        var feedback_deletions = item.get('feedbacks').map(function(feedback) {
        return feedback.destroyRecord();
      });
      Ember.RSVP.all(feedback_deletions).then(function() {
        return item.destroyRecord();
      });
      }
    }
  }
});
