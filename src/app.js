const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.status(200).send({
        message: 'Welcome to the User Products API'
    });
    
});

app.use('/api/v1/', require('./routers/index'));

module.exports = app;