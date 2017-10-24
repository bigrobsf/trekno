var adjectives = [
  {id: 1, word: 'artificial'},
  {id: 2, word: 'flux'},
  {id: 3, word: 'gravimetric'},
  {id: 4, word: 'alternating'},
  {id: 5, word: 'spatial'},
  {id: 6, word: 'space-time'},
  {id: 7, word: 'dampening'},
  {id: 8, word: 'electromagnetic'},
  {id: 9, word: 'EM'},
  {id: 10, word: 'nano'},
  {id: 11, word: 'microscopic'},
  {id: 12, word: 'photonic'},
  {id: 13, word: 'linear'},
  {id: 14, word: 'sonic'},
  {id: 15, word: 'auxiliary'},
  {id: 16, word: 'nucleonic'},
  {id: 17, word: 'transwarp'},
  {id: 18, word: 'ambient'},
  {id: 19, word: 'anomalous'},
  {id: 20, word: 'modulated'},
  {id: 21, word: 'inverted'},
  {id: 22, word: 'temporal'},
  {id: 23, word: 'asymmetrical'},
  {id: 24, word: 'atmospheric'},
  {id: 25, word: 'magnetic'},
  {id: 26, word: 'phased'},
  {id: 27, word: 'ionic'},
  {id: 28, word: 'gravometric'},
  {id: 29, word: 'anterior'},
  {id: 30, word: 'primary'},
  {id: 31, word: 'secondary'},
  {id: 32, word: 'tertiary'},
  {id: 33, word: 'triaxial'},
  {id: 34, word: 'backup'},
  {id: 35, word: 'master'},
  {id: 36, word: 'emergency'},
  {id: 37, word: 'positronic'},
  {id: 38, word: 'thermal'},
  {id: 39, word: 'sythetic'},
  {id: 40, word: 'subspace'},
  {id: 41, word: 'nadion', is_particle: true},
  {id: 42, word: 'baryon', is_particle: true},
  {id: 43, word: 'tetryon', is_particle: true},
  {id: 44, word: 'neutrino', is_particle: true},
  {id: 45, word: 'polaron', is_particle: true},
  {id: 46, word: 'positron', is_particle: true},
  {id: 47, word: 'tachyon', is_particle: true},
  {id: 48, word: 'proton', is_particle: true},
  {id: 49, word: 'electron', is_particle: true},
  {id: 50, word: 'verteron', is_particle: true},
  {id: 51, word: 'critical', is_status: true},
  {id: 52, word: 'nominal', is_status: true},
  {id: 53, word: 'marginal', is_status: true},
  {id: 54, word: 'in flux', is_status: true}
];

exports.seed = function(knex, Promise) {
  var seedPromises = [];

  for (var index in adjectives) {
      seedPromises.push(knex('adjectives').insert(adjectives[index]));
  }
    // Delete all, then run the updates
    return knex('adjectives').del().then(function() {
        return Promise.all(seedPromises);
    });
};
