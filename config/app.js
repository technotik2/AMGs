
//3rd party modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("mydb").collection("userdata");
  // perform actions on the collection object
  
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//module for authentication
let session = require('express-session');
let passport = require('passport');

let passportlocal = require('passport-local');
let localStrategy = passportlocal.Strategy;
let flash = require('connect-flash');



//point mongoos eto database url

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
//added static path to node_modules
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

//setup express session
app.use(session({
secret :"SomeSecret",
saveUninitialized : false,
resave : false
}));

app.use(passport.initialize());
app.use(passport.session());




// Registering user data in DB
app.post('/api/register', async (req, res)=> {
  const{username, password: plainTextPassword}=req.body
  if(!username || typeof username!=='string'){
    return res.json({status: 'error', error:'Invalid username'})
  }
  


  if(plainTextPassword.length<5){
    return res.json({status: 'error', error:'Password should be longer than 5 chars'})
  }


  console.log(req.body)
  // Hashing password. Salt=10
  password = await bcrypt.hash(plainTextPassword, 10)
  
  try{
    const response = await User.create({
      username,
      password
    })
    console.log('user created successfully. ', response)


  } 
  catch(error){
    if(error.code ===11000){
    return res.json({status:'username in use', error:'Username already in use'})


    }
    throw error

  }


});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(express.static("public"));
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

// connect to db
const db = require('../models/db');
db.connect();
module.exports = app;
