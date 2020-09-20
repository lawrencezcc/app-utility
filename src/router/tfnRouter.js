'use strict';

const express = require('express');

const tfnUtility = require('../util/tfn');

const router = express.Router();

router.use('/tfn', (req, res) => {
    return res.json({tfn: tfnUtility.getTFN()});
});

module.exports = router;