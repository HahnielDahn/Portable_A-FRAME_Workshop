@ECHO Starting NodeJS-Project: Girl's Day Academy
@ECHO The host is using the following IP-addresses
@ipconfig | findstr /R /C:"IPv4-Adresse"

@ECHO Press "CTRL + C" to exit Nodemon

@ECHO Running: npm start
@npm start

@REM @ECHO Running: NodeJS_Portable\npm start --scripts-prepend-node-path
@REM @NodeJS_Portable\npm start --scripts-prepend-node-path

PAUSE