@ECHO Starting NodeJS-Project: Girl's Day Academy
@ECHO The host is using the following IP-addresses
@ipconfig | findstr /R /C:"IPv4-Adresse"

@ECHO Press "CTRL + C" to exit Nodemon

@ECHO Running: npm install
@CALL npm install

@REM ECHO Running: NodeJS_Portable\npm install --scripts-prepend-node-path
@REM CALL NodeJS_Portable\npm install --scripts-prepend-node-path

@ECHO Bei einer Ersteinrichtung muessen die Puzzle Dateien aus den Backup-Dateien neu erstellt werden.
@ECHO Bitte bestaetigen Sie daher die folgende Anfrage mit Enter
@CALL views\puzzles\ResetEigeneBearbeitung.bat

PAUSE