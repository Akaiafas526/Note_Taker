const express = require('express');

const app = express();

const notesRouter = require('./notes.js');

app.use('/notes', notesRouter);

module.exports = app;

