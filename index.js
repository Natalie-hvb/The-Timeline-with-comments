const express = require('express');
require('./config/mongo');
require('dotenv').config()

// express app
const app = express();

const route = require('./config/route');

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));

// register view engine
app.set('view engine', 'ejs');

app.use(route);

app.listen(3500, console.log('Local host is on 3500'));