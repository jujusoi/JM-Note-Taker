const notes = require('express').Router();
const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);
const uuid = require('../assets/js/uuid');

notes.get('/', (req, res) => {
    console.info(`Someone has sent a ${req.method} request!`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))).catch((err) => (console.error(`${err}, could not read from database`)));
});

notes.get('/:id', (req, res) => {
    console.info(`Someone has sent an individual ${req.method} request!`);
    const idToUse = req.params.id;
    if (idToUse) {
        readFromFile('./db/db.json').then((data) => {
            const parsedData = JSON.parse(data);
            let index = 0;
            parsedData.forEach(object => {
                index++
                if (object.id === idToUse) {
                    res.json(object);
                }
                if (index == parsedData.length && object.id !== idToUse) {
                    res.json(`Note id does not exist!`);
                }
            });
        }).catch(() => console.error(`Could not read from database`));
    }
});

notes.delete('/:id', (req, res) => {
    console.info(`Someone has sent a ${req.method} request!`);
    const idToDelete = req.params.id;
    if (idToDelete) {
        readFromFile('./db/db.json').then((data) => {
                const newData = JSON.parse(data);
                let index = -1;
                newData.forEach(object => {
                    index++
                    if (object.id === idToDelete) {
                        newData.splice(index, 1);
                        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => console.error(err));
                    }
                });
            }).catch((err) => {
                console.error(err);
                res.json(`Could not read from database!`);
            });
        }
    res.send(`${req.method} request sent!`);
})

notes.post('/', (req, res) => {
    console.info(`Someone has sent a ${req.method} request!`);
    const { title, text } = req.body;
    if (title && text) {
        const newObj = {
            title: title,
            text: text,
            id: uuid.makeId(),
        };
        readFromFile('./db/db.json').then((data) => {
            const newData = JSON.parse(data);
            newData.push(newObj);
            fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => console.error(err));
            const response = {
                status: `success`,
                body: newObj,
            };
            res.json(response);
        }).catch((err) => {
            console.error(err);
            res.json(`Could not read from database`);
        })
    }
});

module.exports = notes;