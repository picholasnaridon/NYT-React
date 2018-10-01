import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
	return (
		<div>
			<hr />
			{props.articles.map((article) => {
				return (
					<Article
						key={article.id}
						article={article}
						saveArticle={props.saveArticle ? props.saveArticle : null}
						deleteArticle={props.deleteArticle ? props.deleteArticle : null}
					/>
				);
			})}
		</div>
	);
};

export default ArticleList;
