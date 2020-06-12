'use strict';

const express = require('express');
const app = express();
const router = require('./routes/router');

process.env.PORT = process.env.PORT || 4005;

app.use('/', router);

app.listen(process.env.PORT, () => console.log(`app listening at http://localhost:${process.env.PORT}`))