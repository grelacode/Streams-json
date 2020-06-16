'use strict';

const express = require('express');
const app = express();
const router = require('./routes/router'); 

const port = process.env.PORT || 4005;

app.use('/', router);

app.listen(port);