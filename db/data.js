var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)


function getWaterData() {
  return knex('waterData')
}

function filterByLocation(location) {
  return knex('waterData').where('location', location)
}

function filterByDate(date) {
  return knex('waterData').where('date', date)
}

function addNewData() {
  return knex('waterData').insert()
}
