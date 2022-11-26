var express = require('express');
const { listen } = require('../config/app');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var router = express.Router();
const routes= require('./users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose')

const cors = require("cors")
const { data } = require('jquery');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use('/api', routes)
router.use(cors({
  credentials: true,
  origin:['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))
router.use(cookieParser())
router.use(bodyParser.json())
/* GET home page. */
router.get('/', function (req, res) {
  res.render('Landing', { title: 'Home' });
});

router.get('/appointment', function (req, res) {
  res.render('appointment', { title: 'Appointment' });
});

router.get('/home', function (req, res) {
  res.render('Landing', { title: 'Home' });
});
// ---------------------------------

router.get('/profile', function (req, res) {
  res.render('profile', { title: 'Car Profile' });
});

router.get('/cred', function (req, res) {
  res.render('cred', { title: 'Login or Sign up' });
});

router.get('/register', function (req, res) {
  res.render('register', { title: 'Sign up' });
});





client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
});


//saving data in the database and redircting to home page
router.post('/post-data1', function (req, res) {
  var dbo = client.db("mydb");
  
  nameJ= JSON.stringify(req.body)
  console.log(nameJ)
  var myobj = { Fullname: req.body.name, Date: req.body.date, time:req.body.time, Diagnostic:req.body.diag, Other:req.body.other };
  MongoClient.connect(url, function(err, db) {
    dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 DATA RECIEVED");
    
    
  });

  });
  res.render('Landing', { title: 'Home' });

});








module.exports = router;
