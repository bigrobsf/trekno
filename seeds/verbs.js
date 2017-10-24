var verbs = [
  {id: 1, word: 'increase'},
  {id: 2, word: 'decrease'},
  {id: 3, word: 'focus'},
  {id: 4, word: 'amplify'},
  {id: 5, word: 'reverse'},
  {id: 6, word: 'agitate'},
  {id: 7, word: 'pacify'},
  {id: 8, word: 'invert'},
  {id: 9, word: 'boost'},
  {id: 10, word: 'nullify'},
  {id: 11, word: 'intensify'},
  {id: 12, word: 'electrify'},
  {id: 13, word: 'eliminate'},
  {id: 14, word: 'oscillate'},
  {id: 15, word: 'modulate'},
  {id: 16, word: 'monitor'},
  {id: 17, word: 'restrict'},
  {id: 18, word: 'connect'},
  {id: 19, word: 'convert'},
  {id: 20, word: 'modify'},
  {id: 21, word: 'counteract'},
  {id: 22, word: 'balance'},
  {id: 23, word: 'reset'},
  {id: 24, word: 'recalibrate'},
  {id: 25, word: 'reroute'},
  {id: 26, word: 'overload'},
  {id: 27, word: 'fluctuate'},
  {id: 28, word: 'concentrate'},
  {id: 29, word: 'extend'},
  {id: 30, word: 'redirect'},
  {id: 31, word: 'correlate'},
  {id: 32, word: 'collimate'},
  {id: 33, word: 'override'},
  {id: 34, word: 'access'},
  {id: 35, word: 'charge'},
  {id: 36, word: 'triaxialate'},
  {id: 37, word: 'energize'},
  {id: 38, word: 'harmonize'},
  {id: 39, word: 'pressurize'},
  {id: 40, word: 'synchronize'},
  {id: 41, word: 'fail'},
  {id: 42, word: 'compromise'}
];

exports.seed = function(knex, Promise) {
  var seedPromises = [];

  for (var index in verbs) {
      seedPromises.push(knex('verbs').insert(verbs[index]));
  }
    // Delete all, then run the updates
    return knex('verbs').del().then(function() {
        return Promise.all(seedPromises);
    });
};
