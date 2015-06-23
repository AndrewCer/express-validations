var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/puppy');
var puppyCollection = db.get('puppies');
var validation = require('../lib/validation');

router.get('/puppies', function (req, res, next) {
  puppyCollection.find({}, function (err, data) {
    res.render('puppies/index', { allPups: data });
  });
});

router.get('/puppies/new', function (req, res, next) {
  res.render('puppies/new');
});

router.post('/puppies/new', function (req, res, next) {
  puppyCollection.find({}, function (err, data) {
    var pName = req.body.puppyName;
    var pID = req.body.puppyIdent;
    var puppyObj = { puppy: req.body};
    puppyObj.puppyData = data;
    var errorArray = validation(pName, pID, puppyObj);
    if (errorArray.length === 0) {
        puppyCollection.insert({ pupName: req.body.puppyName, pupIdent: req.body.puppyIdent});
        res.redirect('/puppies');
    } else {
      res.render('puppies/new', {errors: errorArray});
    }
  });

});

module.exports = router;
