var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

var conn = function(err, data, res) {
  var msg = '';
  if (err) {
    msg = {error: err};
  }
  else {
    msg = data;
  }
  console.log(msg);
  res.json(msg);
}


/* GET users listing. */
router.get('/', function(req, res) {
  Controller.retrieve(req, res, conn);
});

router.get('/:id', function(req, res) {
  Controller.show(req, res, conn);
});

router.post('/', function(req, res) {
  Controller.create(req, res, conn);
});

router.put('/:id', function(req, res) {
  Controller.update(req, res, conn);
});

router.delete('/:id', function(req, res) {
  Controller.delete(req, res, conn);
});

module.exports = router;
