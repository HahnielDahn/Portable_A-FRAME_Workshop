## Ultrakurzanleitung zu 2018-GDA-Workshop with A-Frame

Dieses Repository wurde für die Girl's Day Academy 2018 erstellt.
Das Projekt bassiert auf der Node-JS Technologie und beschäftigt sich mit der A-Frame Javascript-Library.
Bei der Planung des Workshops wurde von einem Windows Betriebsystemen ausgegangen, er kann aber auch auf Linux und anderen Systemen durchgeführt werden.

## Installation

Um den Workshop auszuführen wird eine Internetverbindung und eine installierte Version von Node-JS mit gesetzter Umgebungsvariable für npm vorausgesetzt.

Vor dem ersten Ausführen des Workshops muss **Load_NodeJS_Modules.bat** ausgeführt werden, um die benötigten Node-JS Module zu laden.
Dieses Batch-Script führt auch die Datei **views/puzzles/ResetEigeneBearbeitung.bat** aus, welches die von den Teilnehmern zu bearbeitenden Puzzle-Dateien aus den **BackupAngaben** erzeugt.

Der Workshop verwendet 3D-Modelle im **gltf** Format aus dem folgenden Git-Repository: https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0
Damit der Workshop auf diese zugreifen kann, muss im Ordner **public** ein Unterordner **gltf** angelegt werden und die Verzeichnisse aus dem Link eingefügt werden.

## Umbau zum Portablen Workshop

Der A-FRAME Workshop lässt sich mit einigen wenigen Handgriffen in ein portables Projekt umwandeln, welches auf z.B. auf einem USB abgelegt werden kann.
Nach dem Umbau auf die portable Version ist es nicht mehr notwendig Node-JS installiert zu haben, ebenso wird keine Internetverbindung mehr benötigt.

Führe hierzu alle Schritte aus dem Kapitel __Installation__ aus.
Lade im Anschluss eine portable Version von Node-JS herunter, https://nodejs.org/en/download/ , und kopiere sie in das Root-Verzeichnis des Workshops.
Das Projekt wurde mit Node-JS Version 8.11.3 erstellt, mit anderen Versionen kann es eventuell zu Kompatibilitätsproblemem kommen.
Jetzt muss in der **Start_Server.bat** der Datei-Pfad angepasst werden, sodass er auf die portable Version verweist.
Lösche dafür die Zeilen
```
@ECHO Running: npm start
@npm start
```
oder kommentiere sie mit 
```
@REM
```
aus. Lösche aus den Zeilen
```
@REM @ECHO Running: NodeJS_Portable\npm start --scripts-prepend-node-path
@REM @NodeJS_Portable\npm start --scripts-prepend-node-path
```
die Zeichen 
```
@REM
```
und passe den Pfad zur portablen Version von npm an.

Um offline-fähig zu sein, wird eine lokale Kopie von A-Frame benötigt.
Diese kann von https://aframe.io/docs/0.8.0/introduction/installation.html heruntergeladen werden und in **/public/javascripts** eingefügt werden. Das Projekt wurde mit A-Frame Version 0.8.0 erstellt, mit anderen Versionen kann es eventuell zu Kompatibilitätsproblemem kommen.
Alle Seiten des Workshops, die auf A-FRAME zugreifen, verwenden die Datei **\views\includes\aFrame_engine.ejs**, welche auf die online-Version von A-FRAME verweist. Lösche diese Datei oder benennen sie um. Im selben Verzeichnis befindet sich auch die Datei **aFrame_engine_local.ejs**, welche auf die unter **\public\javascripts** abgelegte Version von A-Frame verweißt. Benennen diese Datei in **aFrame_engine.ejs** um. Eventuell muss in dieser Datei der Pfad angepasst werden.

## Starten des Servers

Um den Server zu starten wird die Datei **Start_Server.bat** ausgeführt.
Der Server kann über einen Browser über die Addresse http://localhost:3000/ zugegriffen werden.