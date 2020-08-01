
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: "mayo", amount: '1.2 Cups'},
        {ingredient: "salt", amount: '1 Teaspoon'},
      ]);
    });
};
