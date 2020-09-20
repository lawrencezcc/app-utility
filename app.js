'use strict';

const express = require('express');
const app = express();

const tfnRouter = require('./src/router/tfnRouter');

const port = 8000;

app.use('/app', tfnRouter);

app.use('/', (req, res) => {
    // TO DO home page
    return res.send({test:'test'});
});

app.listen(port, () => {
    console.log(`Server start listening on Port ${port}`);
});