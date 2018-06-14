// Instantiate Express Server
const express = require('express');
const app = express();

// Create routes
// const hero = require('./routes/hero.router');
// const power = require('./routes/power.router');
// const universe = require('./routes/universe.router');

// Direct routes


// Require body parser and use
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Determine server scope
app.use(express.static('server/public'));

// Define and listen on port
const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on port', port);
})
