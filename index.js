require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const app = express();

const port = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.error(`Error in running the server: ${err}`);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
