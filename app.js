'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const tfnRouter = require('./src/router/tfnRouter');

const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.static('public'));

app.use((req, res, next) => {
  const protocol = req.get('X-Forwarded-Proto') || req.protocol;
  console.log(req.get('X-Forwarded-Proto'), req.protocol);
  if (protocol === 'http') {
    res.redirect(`${protocol}s://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
});

app.use('/', tfnRouter);

app.use('/', (req, res) => {
  // TO DO home page
  return res.status(200).send(null);
});

app.listen(port, () => {
  console.log(`Server start listening on Port ${port}`);
});
