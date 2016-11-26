var express = require('express');
var router = express.Router();
var waterDB = require('../db/data')


router.get('/', function (req, res) {
  waterDB.getWaterData()
    .then(function (data) {
      res.json({data}).status(200)
    })
    .catch(function(err) {
      console.log(err);
      res.status(500)
    })
})


router.get('/location/:location', function (req, res) {
  waterDB.filterByLocation(req.params.location)
    .then(function(location) {
      res.json({location}).status(200)
    })
    .catch(function(err) {
      console.log(err)
      res.status(500)
    })
})

router.get('/date/:date', function(req, res) {
  waterDB.filterByDate(req.params.date)
    .then(function(date) {
      res.json({date}).status(200)
    })
    .catch(function (err){
      console.log(err)
      res.status(500)
    })
})


router.post('/', function(req, res){
    waterDB.addNewData(userData)
    .then(function(userData){
      res.json({userData}).status(201)
    })
    .catch(function(err){
      console.log(err)
      res.status(404)
    })
})
