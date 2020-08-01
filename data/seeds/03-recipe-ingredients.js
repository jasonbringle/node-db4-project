
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        {recipe_id: 1, ingredients_id: 1},
        {recipe_id: 2, ingredients_id: 2}
      ]);
    });
};
