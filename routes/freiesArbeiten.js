var express = require('express');
var router = express.Router();

  const fs = require('fs');
  const dir = './views/freiesArbeiten/';

router.get('/:freieArbeit', function(req, res, next) {
  var freieArbeit = req.params.freieArbeit;
  if (fs.existsSync(__dirname+'/../views/freiesArbeiten/'+freieArbeit+'.ejs')) {
    res.render('freiesArbeiten/'+freieArbeit);
  }
  else{
    res.status(404).send('Tut mir leid, diese Datei konnte ich nicht finden. <br> <a href="http://localhost:3000/anleitung">Zurück zur Anleitung</a>');
  }
});

module.exports = router;
