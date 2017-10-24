var phrases = [
  {id: 1, word: 'warp drive'},
  {id: 2, word: 'impulse drive', singular_only: true},
  {id: 3, word: 'Heisenberg compensator'},
  {id: 4, word: 'tractor beam'},
  {id: 5, word: 'photon torpedo'},
  {id: 6, word: 'quantum torpedo'},
  {id: 7, word: 'subspace domain', singular_only: true},
  {id: 8, word: 'plasma relay'},
  {id: 9, word: 'level 1 diagnostic'},
  {id: 10, word: 'level 2 diagnostic'},
  {id: 11, word: 'level 3 diagnostic'},
  {id: 12, word: 'level 4 diagnostic'},
  {id: 13, word: 'level 5 diagnostic'},
  {id: 14, word: 'asymmetrical peristaltic field manipulation', singular_only: true},
  {id: 15, word: 'matter reactant injector'},
  {id: 16, word: 'antimatter reactant injector'},
  {id: 17, word: 'deuterium storage', singular_only: true},
  {id: 18, word: 'main deflector', singular_only: true},
  {id: 19, word: 'matter reaction assembly', singular_only: true},
  {id: 20, word: 'antimatter reaction assembly', singular_only: true},
  {id: 21, word: 'main viewer', singular_only: true},
  {id: 22, word: 'impulse reaction chamber', singular_only: true},
  {id: 23, word: 'navigational deflector', singular_only: true},
  {id: 24, word: 'pattern buffer', singular_only: true},
  {id: 25, word: 'dilithium crystal articulation frame', singular_only: true},
  {id: 26, word: 'saucer separation', singular_only: true},
  {id: 27, word: 'FTL processor'},
  {id: 28, word: 'Jeffries Tube'},
  {id: 29, word: 'isolinear optical chip'},
  {id: 30, word: 'plasma injection system', singular_only: true},
  {id: 31, word: 'plasma distribution manifold', singular_only: true},
  {id: 32, word: 'power transfer conduit'},
  {id: 33, word: 'structural integrity field', singular_only: true},
  {id: 34, word: 'warp field geometry', singular_only: true},
  {id: 35, word: 'warp field coil'},
  {id: 36, word: 'inertial damping field', singular_only: true},
  {id: 37, word: 'annular confinement beam', singular_only: true},
  {id: 38, word: 'Ten Forward', singular_only: true, is_place: true},
  {id: 39, word: 'observation lounge', singular_only: true, is_place: true},
  {id: 40, word: 'ready room', singular_only: true, is_place: true},
  {id: 41, word: 'shuttle bay', singular_only: true, is_place: true}
];

exports.seed = function(knex, Promise) {
  var seedPromises = [];

  for (var index in phrases) {
      seedPromises.push(knex('phrases').insert(phrases[index]));
  }
    // Delete all, then run the updates
    return knex('phrases').del().then(function() {
        return Promise.all(seedPromises);
    });
};
