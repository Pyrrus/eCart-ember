import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveFeedback(item) {
    var d = new Date();
     var test = d.toISOString();
     var params = {
       user: this.get('user') ? this.get('user') : "You for got something!!",
       rating: this.get('rating') ? this.get('rating') : 1,
       details: this.get('details') ? this.get('details') : "You for got something!!",
       time: test,
       item: item
     };
     this.sendAction('saveFeedback', params);
   }
  }
});
