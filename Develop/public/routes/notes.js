const notes = require('express').Router();
const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);
const database = require('../../db/db.json');
const uuid = require('../assets/js/uuid');

notes.get('/', (req, res) => {
    readFromFile('../Develop/db/db.json').then((data) => res.json(JSON.parse(data))).catch((err) => (console.error(`${err}, could not read from database`)));
});

notes.get('/:id', (req, res) => {
    const idToUse = req.params.id;
    if (idToUse) {
        readFromFile('../Develop/db/db.json').then((data) => {
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
    console.info(`Someone has sent a DELETE request!`);
    const idToDelete = req.params.id;
    if (idToDelete) {
        fs.readFile('../Develop/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const newData = JSON.parse(data);
                let index = -1;
                newData.forEach(object => {
                    index++
                    if (object.id === idToDelete) {
                        newData.splice(index, 1);
                        fs.writeFile('../Develop/db/db.json', JSON.stringify(newData), (err) => console.error(err));
                    }
                });
            }
        })
    }
    res.send(`${req.method} request sent!`);
})

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newObj = {
            title: title,
            text: text,
            id: uuid.makeId(),
        };
        console.log(newObj);
        fs.readFile('../Develop/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                const newData = JSON.parse(data);
                newData.push(newObj);
                fs.writeFile('../Develop/db/db.json', JSON.stringify(newData), (err) => console.error(err));
                const response = {
                    status: `success`,
                    body: newObj,
                };
                res.json(response);
            }
        })
    }
});

module.exports = notes;