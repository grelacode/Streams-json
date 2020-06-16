'use strict';
const express = require('express');
const app = express();
const { validate, ValidationError } = require('express-superstruct');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', validate({ id: 'number', name: 'string', keywords: ['string'] }), (req, res) => {
    const body = {
        "id": req.body.id,
        "name": req.body.name,
        "keywords": [...new Set(req.body.keywords)]
    }
    res.status(200).json(body);
});

app.use((err, req, res, next) => {

    if (err) {
        return res
            .status(400)
            .json({
                "error": true,
                "message": "Invalid JSON"
            });
    }
    next();
});

module.exports = app;