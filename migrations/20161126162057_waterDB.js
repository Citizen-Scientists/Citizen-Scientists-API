
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('waterData', function(table) {
    table.increments('id').primary
    table.string('location')
    table.string('date')
    table.string('image')
    table.string('comment')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('waterData')

};
