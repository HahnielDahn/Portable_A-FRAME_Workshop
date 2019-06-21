var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ballgame', function(req, res, next) {
  res.render('aFrame/ballgame.ejs');
});
router.get('/beispiel-gltf', function(req, res, next) {
  res.render('aFrame/beispiel-gltf.ejs');
});
router.get('/bspFloatComments', function(req, res, next) {
  res.render('aFrame/bspFloatComments.ejs');
});
router.get('/welcome', function(req, res, next) {
  res.render('aFrame/welcome.ejs');
});

module.exports = router;
