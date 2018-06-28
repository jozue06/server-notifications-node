import { join } from 'path';
import express, {Router}  from 'express';
import { urlencoded } from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import morgan from 'morgan';
import csurf from 'csurf';
// app.use(express.static('./public'));

import { secret as _secret } from './config';
import {notifyOn} from './middleware/twilioNotifications';

// Create Express web app
var app = express();

// Use morgan for HTTP request logging in dev and prod
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

// Serve static assets
app.use(express.static(join(__dirname, 'public')));

// Parse incoming form-encoded HTTP bodies
app.use(urlencoded({
  extended: true,
}));

// Create and manage HTTP sessions for all requests
app.use(session({
  secret: _secret,
  resave: true,
  saveUninitialized: true,
}));

// Use connect-flash to persist informational messages across redirects
app.use(flash());

// Configure application routes
import routes from './controllers/router';
var router = Router();

// Add CSRF protection for web routes
if (process.env.NODE_ENV !== 'test') {
  app.use(csurf());
  app.use(function(request, response, next) {
    response.locals.csrftoken = request.csrfToken();
    next();
  });
}

routes(router);
app.use(router);

// Handle 404
app.use(function(request, response, next) {
  response.status(404);
  response.sendFile(join(__dirname, 'public', '404.html'));
});

// Mount middleware to notify Twilio of errors
app.use(notifyOn);

// Handle Errors
app.use(function(err, request, response, next) {
  console.error('An application error has occurred:');
  console.error(err.stack);
  response.status(500);
  response.sendFile(join(__dirname, 'public', '500.html'));
});

// Export Express app
module.exports = app;
