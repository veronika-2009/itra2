const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express();

var port = process.env.PORT || 4000

app.options('http://localhost:3000/register', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


let Users = require('./routes/Users');
app.use('/', Users)


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
 });