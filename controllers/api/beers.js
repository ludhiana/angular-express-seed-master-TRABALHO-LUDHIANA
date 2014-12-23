var Beer = require('../../models/beer');

module.exports = {
	create: function(req, res, conn) {
	    var dados = req.body;

		var model = new Beer(dados);
		model.save(function (err, data) {
			conn(err, data, res);
		});
	},
	retrieve: function(req, res, conn) {
		Beer.find(function (err, data) {
			conn(err, data, res);
		});
	},
	findOne: function(req, res, conn) {
	    var id = req.params.id;
	    var query = {_id: id};

		Beer.findOne(query, function (err, data) {
			conn(err, data, res);
		});
	},
	update: function(req, res, conn) {
	    var id = req.params.id;
	    var query = {_id: id};
	    var mod = req.body;

		Beer.update(query, mod, function (err, data) {
			conn(err, data, res);
		});
	},
	delete: function(req, res, conn) {
	    var id = req.params.id;
	    var query = {_id: id};

		Beer.remove(query, function (err, data) {
			conn(err, data, res);
		});
	}
};
