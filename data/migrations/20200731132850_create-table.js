
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl =>{
            tbl.increments();
            tbl.text('recipe_name', 128)
              .notNullable()
              .unique()
        })
        .createTable('ingredients', tbl =>{
            tbl.increments()
            tbl.text('ingredient', 128)
              .notNullable()
              .unique()
            tbl.float('amount')
              .notNullable()
        })
        .createTable("instructions", tbl => {
            tbl.increments()
            tbl.text('step', 128)
                .notNullable()
                .unique()
        })
        .createTable('recipe-ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE'); 
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.primary(['recipe_id', 'ingredients_id'])
        })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipe-ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };       
  