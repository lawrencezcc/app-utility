'use strict';

const express = require('express');
const app = express();

const tfnRouter = require('./router/tfnRouter');

const port = 8000;

app.use('/', tfnRouter);

app.use('/', (req, res) => {
    // TO DO home page
    return res.status(200).json(null);
});

app.listen(port, () => {
    console.log(`Server start listening on Port ${port}`);
});