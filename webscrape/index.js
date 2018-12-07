const express = require('express')
const getConjugation = require('./webscrape');
const app = express()
const port = 3001

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/conj', function(req, res){
    // res.send('id: ' + req.query.verb);
    if (!req.query || !req.query.verb) {
        return res.send({
            tenses: [],
            data: {}
        });
    }
    getConjugation(req.query.verb)
    .then(function(response) {
        res.send(response);
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))