var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.LOCAL_URI);
var peopleCollection = db.get('peoples');
var validation = require('../lib/validation');

router.get('/people', function (req, res, next) {
  peopleCollection.find({}, function (err, data) {
    res.render('people/index', { allPeople: data });
  });
});

router.get('/people/new', function (req, res, next) {
  res.render('people/new');
});

router.post('/people/new', function (req, res, next) {
  var pName = req.body.personName;
  var pHobby = req.body.personHobby;
  var peopleObj = {people: req.body};
  var errorArray = validation(pName, pHobby, peopleObj);
  if (errorArray.length === 0) {
      peopleCollection.insert({ persName: req.body.personName, persHobby: req.body.personHobby});
      res.redirect('/people');
  } else {
    res.render('people/new', {errors: errorArray});
  }
});

module.exports = router;
