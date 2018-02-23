const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const localSignin = require('./passport/local-signin');
const localSignup = require('./passport/local-signup');

//connect mongo db
mongoose.connect('mongodb://127.0.0.1:27017/blog');
const User = require('./model/UserSchema');

// import routes
const index = require('./routes/index');
const posts = require('./routes/posts');
const poetries = require('./routes/poetries');
const signup = require('./routes/signup');
const signin = require('./routes/signin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'beingtowardsdeatch',
    resave: true,
    saveUninitialized: true,
    name: 'leonard',
    cookie: { secure: true }
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use('local-signin', localSignin);
passport.use('local-signup', localSignup);
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// app.use(cors());

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Origin', req.headers.origin);
  res.set(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  );
  next();
});
app.use('/', index);
app.use('/posts', posts);
app.use('/poetries', poetries);
app.use('/signup', signup);
app.use('/signin', signin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
