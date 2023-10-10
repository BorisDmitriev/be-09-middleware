# BE-Middleware

## Einführung

In dieser Übungsaufgabe wirst du Middleware in Express kennenlernen und anwenden. Du wirst lernen, wie Middleware zwischen einer empfangenen Anfrage und einer gesendeten Antwort ausgeführt wird und wie du verschiedene Middleware-Funktionen in deinem Express-Projekt verwenden kannst.

## Aufgabenstellung

Erstelle ein Express-Projekt und füge die folgenden Aufgaben hinzu:

### Task 1 - Middleware verwenden

Erstelle eine neue Express-Anwendung und verwende eine `logger()`-Middleware, um die Details jeder eingehenden Anfrage in der Konsole zu protokollieren. (Tipp: Morgan bietet einen solide Logger-Lösung.)

### Task 2 - JSON-Parsing-Middleware

Füge der Express-Anwendung die Middleware `express.json()` hinzu, um JSON-Daten aus eingehenden Anfragen automatisch zu parsen. Verwende anschließend eine Route, um POST-Anfragen mit JSON-Daten entgegenzunehmen und die geparsen Daten als Response zurück.

### Task 3 - Benutzerdefinierte Middleware

Erstelle eine benutzerdefinierte Middleware-Funktion, die eine Nachricht an den Client sendet, bevor die eigentliche Route verarbeitet wird. Die Nachricht sollte die Anfrage-Methode und den angeforderten Pfad enthalten. Verwende diese benutzerdefinierte Middleware-Funktion in einer Route deiner Wahl.

## Hinweise

-   Informationen zur Verwendung von Middleware findest du in der [Express-Dokumentation](https://expressjs.com/).
-   Experimentiere mit verschiedenen Middleware-Reihenfolgen, um das Verhalten der Anwendung zu verstehen und zu analysieren.
-   Nutze das Middleware-Verzeichnis, um deine benutzerdefinierte Middleware-Funktion zu organisieren und wiederverwendbaren Code zu erstellen.

Viel Spaß beim Erkunden von Middleware in Express!
