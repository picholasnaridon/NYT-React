var controller = require('../../controllers/articleController');

module.exports = function(app, Aritcle, Note) {
	app.get('/api/articles', controller.getArticles);
	app.delete('/api/articles', controller.delete);
	app.post('/api/articles', controller.saveArticle);
	app.get('/api/articles/saved', controller.getSavedArticles);
};
