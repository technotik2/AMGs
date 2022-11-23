var express = require('express');
var router = express.Router();
bodyParser  = require( 'body-parser' )
const cors = require("cors")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/reg', function (req, res) {
  
});


module.exports = router;
