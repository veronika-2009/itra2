const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express();

var port = process.env.PORT || 4000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


let Users = require('./routes/Users');
app.use('/', Users)


app.listen(port, function () {
  console.log('Example app listening on port 4000!');
 });