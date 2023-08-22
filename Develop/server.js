const express = require('express');
const path = require('path');
const database = require('./db/db.json');

const app = express();
const port = 4023;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.json(database);
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});