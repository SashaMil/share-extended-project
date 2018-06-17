// Instantiate Express Server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create routes
const movieRouter = require('./routes/movie.router');
// const power = require('./routes/power.router');
// const universe = require('./routes/universe.router');

// Direct routes
app.use('/movie', movieRouter);

// Require body parser and use


// Determine server scope
app.use(express.static('server/public'));

// Define and listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('listening on port', PORT);
})
