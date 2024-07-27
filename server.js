const express = require('express');
const cors = require('cors');

const facts = require('./src/data/facts.json');

const app = express();
const port = 3003;

app.use(cors());


app.get('/api/facts', (req, res) => {
    res.json(facts);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


