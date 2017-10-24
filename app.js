const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3009;

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const index = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));
app.use('/', index);


// =============================================================================
// spin up the FTL
app.listen(PORT, () => {
  console.log(`TradeTrack server is running on port ${PORT}`);
});

module.exports = {
  app: app
};