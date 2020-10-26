'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/:filename', (req, res) => {
    const filename = req.params.filename
    const filePath = path.join(__dirname, `../file`);
    try {               
        const path = `${filePath}/${filename}`;
        if (!fs.existsSync(path)) {
            return res.status(404).send(`${filename} does not exist.`);
        }
        const streamFile = fs.createReadStream(path);
        streamFile.pipe(res);
    } catch(err) {
        res.status(400).json({
            "error": true,
            "message": "invalid file"
        });
    };
});

module.exports = app;
