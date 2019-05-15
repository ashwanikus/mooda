var express = require('express');
var router = express.Router();

let MoodType = require('../schema/moodtype');

/* GET home page. */
router.get('/', function (req, res, next) {   
  MoodType.find({}, function (err, moodtypes) {
    console.log(moodtypes);    
    if (err) {
      res.render('error', { message: err, error: { status: "error", stack: "stack" } });
    } else {
      res.render('index', { title: 'Express', moodtypes: moodtypes });
    }
  });
});

module.exports = router;
