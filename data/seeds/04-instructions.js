
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'Slap the Beef in the Air_fryer'},
        {step: 'Turn on the Airfryer'},
        {step: 'Wait 12 minutes'},
        {step: 'Get some Mayo'},
        {step: "Get some eggs and stuff"},
        {step: "Bake it in the oven"}
      ]);
    });
};
