import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortRating: Ember.computed.sort('feedbacks', 'sortBy'),
  actions: {
    high() {
      this.set('sortBy', ['rating:desc']);
    },
    low() {
      this.set('sortBy', ['rating']);
    }
  }
});
