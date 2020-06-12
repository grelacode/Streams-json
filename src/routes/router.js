'use strict';
const { validate, ValidationError } = require('express-superstruct');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const router = express();
const path = require('path');
const filePath = path.join(__dirname, `../file`);

router.get('/api/:filename', (req, res) => {
    const filename = req.params.filename
    try {
        const path = `${filePath}/${filename}`;
        if (!fs.existsSync(path)) {
            return res.status(404).send(`${filename} does not exist.`);
        }
        const streamFile = fs.createReadStream(path);
        streamFile.pipe(res);
    } catch {
        res.status(400).send();
    };
});

router.use(bodyParser.json());

router.post('/api/item', validate({ id: 'number', name: 'string', keywords: ['string'] }), (req, res) => {
    let body = {
        "id": req.body.id,
        "name": req.body.name,
        "keywords": [...new Set(req.body.keywords)]
    }
    res.status(200).json(body);
});

router.use((err, req, res, next) => {

    if (err) {
        next(err);
        return res
            .status(400)
            .json({
                "error": true,
                "message": "Invalid JSON"
            });
    }
});

module.exports = router;