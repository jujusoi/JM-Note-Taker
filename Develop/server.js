const express = require('express');
const path = require('path');
const database = require('./db/db.json');
const fs = require('fs');
const util = require('util');
const uuid = require('./public/assets/js/uuid');

const readFromFile = util.promisify(fs.readFile);

const app = express();
const port = 4023;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.delete('/api/notes/:id', (req, res) => {
    console.info(`Someone has sent a DELETE request!`);
    const idToDelete = req.params.id;
    if (idToDelete) {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const newData = JSON.parse(data);
                let index = -1;
                newData.forEach(object => {
                    index++
                    if (object.id === idToDelete) {
                        newData.splice(index, 1);
                        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => console.error(err));
                    }
                });
            }
        })
    }
    res.send(`${req.method} request sent!`);
})

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newObj = {
            title: title,
            text: text,
            id: uuid.makeId(),
        };
        console.log(newObj);
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                const newData = JSON.parse(data);
                newData.push(newObj);
                fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => console.error(err));
                const response = {
                    status: `success`,
                    body: newObj,
                };
                res.json(response);
            }
        })
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/404.html'));
})





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});