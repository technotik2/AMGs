var express = require('express');
const { listen } = require('../config/app');

var router = express.Router();
const routes= require('./users')

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


module.exports = router;
