var Beer = require('../models/beer');
var msg = '';

module.exports = {
  renderList: function(req, res, conn) {
    var query = {};
    Beer.find(query, function (err, data) {
      conn(err, data, res);
    });
  },
  renderCreate: function(req, res, conn) {
    conn(null, null, res);
  },
  renderShow: function(req, res, conn) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      conn(err, data, res);
    });
  },
  renderEdit: function(req, res, conn) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      conn(err, data, res);
    });
  },
  renderRemove: function(req, res, conn) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      conn(err, data, res);
    });
  }
};
