import Ember from 'ember';

export function averageRating(params) {

  var feedbacks = params[0];
  var total = feedbacks.get('length');
  var scores = 0;
  var test = feedbacks.toArray();

  console.log(test);


  // for (var i = 0; i < feedbacks.length; i++) {
  //   console.log("scores:   " + scores);
  //
  //   scores += feedbacks[i].ratings;
  // }
  // return scores/total;
}

export default Ember.Helper.helper(averageRating);
