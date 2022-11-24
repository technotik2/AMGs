var express = require('express');
const { listen } = require('../config/app');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var router = express.Router();
const routes= require('./users')
var bodyParser = require('body-parser');

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
  res.render('profile', { title: 'Your Profile' });
});

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
});

 //Creating the collection 
//  MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
    
//   });
// });


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { Fullname: "Peyman T", Date: "", time:"", Diagnostic:"", Other:"" };
  
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    
  });
});

//not working right
router.post('/post-data1', function (req, res) {
  var dbo = client.db("mydb");
  var bodyJson = JSON.parse(req.body.name)
  dbo.collection("customers").insertOne(bodyJson, function(err, res) {
    if (err) throw err;
    console.log("1 DATA RECIEVED");
    
  });
  
});
//redircting user to home page 
router.post('/post-data1', function (req, res) {
  res.render('Landing', { title: 'Home' });
  console.log(req.body.name, req.body.date)
  
});








module.exports = router;
