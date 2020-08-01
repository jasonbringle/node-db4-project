
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Mayonaise Cake'},
        {recipe_name: 'Really good Steak'},
      ]);
    });
};
