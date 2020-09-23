'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const tfnRouter = require('./src/router/tfnRouter');

const port = process.env.PORT || 8000;

app.use(cors());

app.use((req, res, next) => {
  // const protocol = req.get('X-Forwarded-Proto') || req.protocol;
  const protocol = req.get('X-Forwarded-Proto');
  if (protocol === 'http') {
    res.redirect(`${protocol}s://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
});

app.use('/', tfnRouter);

app.use('/', express.static('public'));

app.listen(port, () => {
  console.log(`Server start listening on Port ${port}`);
});
