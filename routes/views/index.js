const path = require('path');

module.exports = function(app, Aritcle, Note) {
	app.get(function(req, res) {
		res.sendFile(path.join(__dirname, '../../client/build/index.html'));
	});
};
