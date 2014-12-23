var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  // partials = require('./routes/partials'),
  // expose = require('./routes/expose'),
  // api = {};
  http = require('http'),
  path = require('path');

  api.beers = require('./routes/api/beers');


var api = {};
api.app = require('./routes/api'),
api.beers = require('./routes/api/beers');

var app = module.exports = express();
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index / view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/expose/:dir/:name', routes.expose);

// JSON API
app.get('/api/name', routes.partials);
app.use('/api/beers', api.beers);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


//start server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server is listening on port: ' + app.get('port'));
});