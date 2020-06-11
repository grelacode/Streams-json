'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const filePath = path.join(__dirname, `../file`);



app.get('/api/:filename', (req, res) => {
  let filename = req.params.filename
  try {
    const path = `${filePath}/${filename}`;
    if (!fs.existsSync(path)) return res.status(404).send(`${filename} does not exist.`);
    const streamFile = fs.createReadStream(path);
    streamFile.pipe(res);
  } catch {
    res.status(500).send();
  };
});


module.exports = app;



