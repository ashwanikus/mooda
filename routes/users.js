const express = require('express');
let router = express.Router();
let Admin = require('../schema/admin');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});


router.post('/authenticate', function (req, res, next) {
  // let adminPromise = new Promise(function (resolve, reject) {
  //   Admin.find({ username: req.body.username, password: req.body.password }, function (err, result) {
  //     console.log(err, result);
  //     if (err) {
  //       reject(err);
  //     } else {
  //       if (result.length >= 1) {
  //         resolve(result);
  //       } else {
  //         console.log(new Error("user is not found!"));          
  //         reject("user is not found!");
  //       }
  //     }
  //   });
  // });

  //adminPromise.then(function (data) {
    res.redirect("/reports");
  //}, function (err) {
    //res.end(JSON.stringify(err));
  //});
});

module.exports = router;
