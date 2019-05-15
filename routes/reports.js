var express = require('express');
var router = express.Router();
let Employee = require('../schema/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  //Employee.find({}, function (err, result) {
    //if (err) {
      //res.end(JSON.stringify(err));
    //} else {
      //if (result.length >= 1) {
        //res.end(JSON.stringify(result));
        res.render('reports', { title: 'Reports', data: result });
      //} else {
        //res.end(JSON.stringify(new Error("user is not found!")));
      //}
   // }
  //});
});

module.exports = router;
