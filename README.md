# todo-list
Heute verknüpfen wir die Todoliste aus dem Flux-Tutorial mit dem Server aus dem NodeJS-Tutorial.

## Zusammenführen der Verzeichnisse
Als erstes kopieren wir den Inhalt der Todoliste in unser Verzeichnis.
Anschließend kopieren wir auch den Server in das gleiche Verzeichnis.
Die package.json müssen wir natürlich mergen. Dazu kopieren wir einfach alle Dependencies zusammen.
Als letztes passen wir noch die webpack Konfiguration an, denn wir brauchen nun nicht nur zwei Entry-Points sondern auch zwei targets.
Je nach Namenskonvention müssen wir natürlich auch noch den Skriptlink in der index.html anpassen.

## Anpassen des Servers
Nun passen wir als erstes den Server für unsere Bedarfe an.
Folgende Funktionalitäten sollen funktionieren:
- Einträge hinzufügen
- Einträge löschen
- Einträge auflisten

## Anpassen des Clients
Beim Anpassen des Clients kann man sich sehr gut an den notwendigen ActionTypen orientieren.
Welche/Wieviele brauchen wir für eine Serverkommunikation?

Als Vorbereitung installieren wir uns außerdem jQuery.
```
npm install --save jquery @types/jquery
```
### Laden von Daten

### Löschen von Daten
### Editieren von Daten