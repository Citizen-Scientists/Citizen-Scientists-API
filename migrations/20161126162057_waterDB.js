
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('waterData', function(table) {
    table.increments('id').primary
    table.string('location')
    table.string('collector')
    table.string('date')
    table.string('dissolvedOxygen')
    table.string('BOD')
    table.string('coliformBacteria')
    table.integer('pH')
    table.string('temperatureChange')
    table.string('nitrate')
    table.string('phosphate')
    table.string('turbidity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('waterData')
};
