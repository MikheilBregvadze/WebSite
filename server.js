const express = require('express');
const app = express();
require('dotenv/config');


app.get('/', (req, res) => {
    res.send('Api is runnings!');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);