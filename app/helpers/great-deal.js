import Ember from 'ember';

export function greatDeal(params) {
  if (params >= 250) {
    return "Great Deal";
  }
}

export default Ember.Helper.helper(greatDeal);
