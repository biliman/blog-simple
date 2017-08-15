const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const log = require('morgan');

const index = require('./routes/index')

app.use(cors());
require('dotenv').config();

mongoose.connect('mongodb://localhost/blog-simple');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));

app.use(log('dev'))

app.use('/', index)

app.listen(3000, () => {
  console.log('We are alive at port : 3000');
})
