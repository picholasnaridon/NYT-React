var Article = require('../models/article.js');
require('dotenv').config();
var axios = require('axios');

module.exports = {
	delete: function(req, res) {
		console.log(req.query.id);
		Article.findByIdAndDelete(req.query.id, function(err, article) {
			if (err) {
				console.log(err);
			} else {
				res.json({ msg: req.query.id });
			}
		});
	},

	saveArticle: function(req, res) {
		var result = {
			title: req.body.title,
			url: req.body.url,
			published: req.body.published,
			abstract: req.body.abstract,
			multimedia: req.body.multimedia
		};
		var entry = new Article(result);
		entry.save(function(err, doc) {
			if (err) {
				console.log(err);
			} else {
				console.log(doc);
				res.json({ res: doc });
			}
		});
	},

	getSavedArticles: function(req, res) {
		Article.find({}, function(err, articles) {
			res.json({ articles: articles });
		});
	},

	getArticles: function(req, res) {
		axios
			.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API}`)
			.then(function(response) {
				res.json({ articles: response.data.results });
			})
			.catch(function(err) {
				res.send(err);
			});
	}
};
