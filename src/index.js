'use strict';

const express = require('express');
const app = express();



process.env.PORT = process.env.PORT || 4005;


app.use(require('./routes/items'));
app.use(require('./routes/files'));







app.listen(process.env.PORT, () => console.log(`app listening at http://localhost:${process.env.PORT}`))