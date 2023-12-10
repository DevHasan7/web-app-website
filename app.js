const express = require('express');
const app = express();
const port = 3000;

// Definiere den Ordner, in dem die statischen Dateien (wie HTML) liegen
app.use(express.static('public'));

// Routenbehandlung für die Wurzel-URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/turbo_thunders.html');
});

// Starte den Server
app.listen(port, () => {
  console.log(`Der Server ist gestartet und hört auf Port ${port}`);
});
