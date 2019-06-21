var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logos');
  //res.render('index', { title: 'Girl\'s Day Academy', year: '2018'});
});
router.get('/go', function(req, res, next) {
  res.redirect('/aframe/welcome');
  //res.render('index', { title: 'Girl\'s Day Academy', year: '2018'});
});
router.get('/aufgabe', function(req, res, next) {
  res.redirect('/anleitung/aufgabe?a='+req.query.a);
});

module.exports = router;
