var express = require('express');
var router = express.Router();

const fs = require('fs');
const dir = './views/puzzles/EigeneBearbeitung/';

  
router.get('/index', function(req, res, next) {
  res.render('anleitung/index');
});
  
router.get('/:puzzletype', function(req, res, next) {
  //console.log('query: %c', req.query);
  var puzzletype = req.params.puzzletype;
  //console.log('type: %c', puzzletype);
  var nummer = +req.query.nummer;
  //console.log('nummer: %s', nummer);
  if(isNaN(nummer)){
    res.status(404).send('Tut mir leid, dieses Puzzle konnte ich nicht finden, da der Index keine Zahl ist sondern "'+nummer+ '". <br> <a href="http://localhost:3000/anleitung">Zurück zur Anleitung</a>');
  }
  else if(nummer < 1 || nummer > 8){
    res.status(404).send('Du bist am Ende dieser Puzzlereihe angekommen. <br> <a href="http://localhost:3000/anleitung">Kehre zurück zur Anleitung</a>');
  }
  else{
    if (fs.existsSync(__dirname+'/../views/puzzles/Loesung/'+puzzletype+nummer+'.ejs')
        && fs.existsSync(__dirname+'/../views/puzzles/'+puzzletype+nummer+'.ejs')){
      console.log('Puzzle gefunden!');
      fileBearbeitung = puzzletype+nummer+'.ejs';
      fileLoesung = 'Loesung/'+puzzletype+nummer+'.ejs';
      nummerplus = +nummer + 1;
      nummerminus = +nummer - 1;
      res.render('puzzles/backbone', {
                    puzzlename:puzzletype,
                    nummer:nummer,
                    nummerplus:nummerplus,
                    nummerminus:nummerminus,
                    var_fileWork:fileBearbeitung,
                    var_fileSolution:fileLoesung});
    }
    else{
      res.status(404).send('Tut mir leid, dieses Puzzle konnte ich nicht finden. <br> Vielleicht kann das Ausführen von "./GDA/views/puzzles/ResetEigeneBearbeitung.bat" diesen Fehler beheben. <br> <a href="http://localhost:3000/anleitung">Zurück zur Anleitung</a>');
    }
  }
});

module.exports = router;
