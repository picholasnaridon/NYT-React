var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String
	},
	abstract: {
		type: String,
		default: 'No abstract Available'
	},
	published: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	}
});

ArticleSchema.index({ title: 'text' });

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
