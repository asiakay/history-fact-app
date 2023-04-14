const express = require('express');
const app = express();
const port = 3001;
const facts = require('./src/data/facts.json');

app.get('/api/facts', (req, res) => {
    res.json(facts);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})