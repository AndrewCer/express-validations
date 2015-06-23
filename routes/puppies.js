var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/puppy');
var puppyCollection = db.get('puppies');
var validation = require('../lib/validation')

router.get('/puppies', function (req, res, next) {
  puppyCollection.find({}, function (err, data) {
    res.render('puppies/index', { allPups: data });
  });
});

router.get('/puppies/new', function (req, res, next) {
  res.render('puppies/new');
});

router.post('/puppies/new', function (req, res, next) {
  puppyCollection.insert({ pupName: req.body.puppyName, pupIdent: req.body.puppyIdent});
  res.redirect('/puppies')
});

module.exports = router;
