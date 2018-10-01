import React, { Component } from 'react';
import Article from './Article';
import moment from 'moment';

class ArticleList extends Component {
	render() {
		return (
			<div>
				{this.props.articles.map((article) => {
					return (
						<Article
							key={article.id}
							article={article}
							saveArticle={this.props.saveArticle ? this.props.saveArticle : null}
							deleteArticle={this.props.deleteArticle ? this.props.deleteArticle : null}
						/>
					);
				})}
			</div>
		);
	}
}

export default ArticleList;
