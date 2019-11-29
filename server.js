const express = require('express');
const app = express();
const routes = require('./routes');

// port for heroku and default port
const port = process.env.PORT || 5000;

// now we can use public and data folders
app.use(express.static(__dirname + '/app/public'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json({ type: 'application/*+json' }));

//routes
app.use(routes);

// use html and api files instead of putting them here
require('./routes');

// listener for console
app.listen(port, () => console.log(`listening on port ${port}!`));