const express = require('express');
const path = require('path');
const index = require('./public/routes/index.js');
const app = express();
const port = 4023;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/notes.html'))
});

app.use('/api', index);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

