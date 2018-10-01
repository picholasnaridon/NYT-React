var express = require('express');
var mongoose = require('mongoose');
var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

require('./routes/api/articles.js')(app);
require('./routes/views/index.js')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactArticles', { useNewUrlParser: true });

app.listen(PORT, function() {
	console.log('Mongoose news scraper alive and listening on Port ' + PORT);
});
