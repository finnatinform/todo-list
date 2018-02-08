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

Als Vorbereitung installieren wir uns außerdem jQuery für das Laden der Daten.
```
npm install --save jquery @types/jquery
```

### Laden von Daten
Den Server können wir nun wie folgt anfunken:
```javascript
import * as $ from "jquery";

// ...

$.getJSON( /* Url */ )
    .done( /* Handler */ )
    .fail ( /* Handler */ );
```

Um auf localhost zugreifen zu können, müssen wir zudem cors installieren und unser Application Objekt ergänzen.
```
npm install --save cors @types/cors
```

```javascript
import Cors = require('cors');

// ...

Application.use(Cors());
```

### Löschen von Daten
Auch beim Löschen können wir gut von der Frage ausgehen, welche ActionTypen wir brauchen.
Darauf basierend können wir nun die Applikation anpassen.

Die Syntax um einen DELETE-Call mit jQuery abzusetzen ist ein wenig komplexer als ein GET-Call.
Wir benutzen dazu die gemeingültige ajax-Funktion.

```javascript
$.ajax({
    url : /* Url */ ,
    type : 'DELETE',
    contentType : 'application/json' ,
    data : JSON.stringify( /* Daten */ )
})
    .done( /* Handler */ )
    .fail( /* Handler */ );
```

### Hinzufügen von Daten
Wir gehen analog zu den anderen Schritten vor und starten mit der Implementierung der ActionTypen.
Achtet dabei darauf, dass es schon ein AddRequest gibt!

Für einen POST-Call verwenden wir ebenfalls die ajax-Routine, übergeben als type den Parameter 'POST'. 

### Editieren von Daten
Das Editieren der Daten ergibt sich aus den vorherigen Schritten.