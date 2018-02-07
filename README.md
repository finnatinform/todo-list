# todo-list
Heute verknüpfen wir die Todoliste aus dem Flux-Tutorial mit dem Server aus dem NodeJS-Tutorial.

## Zusammenführen der Verzeichnisse
Als erstes kopieren wir den Inhalt der Todoliste in unser Verzeichnis.
Anschließend kopieren wir auch den Server in das gleiche Verzeichnis.
Die package.json müssen wir natürlich mergen. Dazu kopieren wir einfach alle Dependencies zusammen.
Als letztes passen wir noch die webpack Konfiguration an, denn wir brauchen nun nicht nur zwei Entry-Points sondern auch zwei targets.
Je nach Namenskonvention müssen wir natürlich auch noch den Skriptlink in der index.html anpassen.

## 