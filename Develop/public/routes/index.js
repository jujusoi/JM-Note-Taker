const express = require('express');

const noteRouter = require('./notes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/notes', noteRouter);

module.exports = app;