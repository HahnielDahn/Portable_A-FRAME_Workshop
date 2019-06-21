@ECHO.
@ECHO Durch das Ausfuehren dieser Datei werden alle Puzzle-Dateien geloescht und aus den BackupAngaben wieder neu erstellt.
@ECHO Dein Bearbeitungsstand der Puzzles geht dabei verloren.
@ECHO Bist du dir sicher, dass du das willst?
@set /p id=Zum Abbrechen Fenster schliessen, Fortsetzen mit Enter

robocopy BackupAngaben\ ..\puzzles\ /e /it /is
pause