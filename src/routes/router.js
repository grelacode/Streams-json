const express = require('express');
const router = express();

const readFiles = require('./readFiles');
const postItem = require('./postItem');

router.use('/api/', readFiles);
router.use('/api/item', postItem);

module.exports = router;