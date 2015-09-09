var express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');

module.exports = function() {
	var app = express();
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	db: 'mongodb://localhost/mean-book',
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(express.static('./public'));
	
	app.set('views', './views');
	app.set('view engine', 'ejs');
	
	require('../routes/index.server.routes.js')(app);
	return app;
};