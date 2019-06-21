var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('anleitung/index');
});
  
router.get('/index', function(req, res, next) {
  res.render('anleitung/index');
});
  
router.get('/aufgabe', function(req, res, next) {
  console.log('count: %c', req.query);
  var count = +req.query.a;
  console.log('count: %s', count);
  if(count < 0 || count > 9){
	res.redirect('/anleitung');
  } else {
	file = 'includes/aufgabe'+count+'.ejs';
	fileshort = 'includes/aTabelle'+count+'.ejs';
	countplus = +count + 1;
	countminus = +count - 1;
    res.render('anleitung/aufgabe', {count:count,
									 countplus:countplus,
									 countminus:countminus,
									 var_file:file,
									 var_fileshort:fileshort});
}});

module.exports = router;
