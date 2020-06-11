'use strict';

const { validate, ValidationError } = require('express-superstruct');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/item', validate({ id: 'number', name: 'string', keywords: ['string'] }), (req, res) => {
    const uniqueValues = [...new Set(req.body.keywords)];
    let body = {
        "id": req.body.id,
        "name": req.body.name,
        "keywords": uniqueValues
    }
    console.log('Valid!');
    res.status(200).json(body);
});

app.use((err, req, res, next) => {

    if (err instanceof ValidationError) {
        return res
            .status(400)
            .json({
                "error": true,
                "message": "Invalid JSON"
            });
    }

});

module.exports = app;
