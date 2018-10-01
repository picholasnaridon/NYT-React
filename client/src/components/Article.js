import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class Article extends Component {
	constructor(props) {
		super(props);

		this.deleteArticle = this.deleteArticle.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
		this.showSaveOrDelete = this.showSaveOrDelete.bind(this);
	}

	saveArticle() {
		var article = this.props.article;
		console.log(article);
		this.props.saveArticle(article);
	}
	deleteArticle() {
		var id = this.props.article._id;
		this.props.deleteArticle(id);
	}
	showSaveOrDelete() {
		if (this.props.saveArticle) {
			return <button onClick={this.saveArticle}>Save</button>;
		} else {
			return <button onClick={this.deleteArticle}>Delete</button>;
		}
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h4>{this.props.article.title}</h4>
				<div>{this.props.article.abstract}</div>
				<div>date: {moment(this.props.article.created_date).unix()} </div>
				<img
					src={
						this.props.article.img ? (
							this.props.article.img
						) : (
							'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg'
						)
					}
				/>
				<br />
				{this.showSaveOrDelete()}
			</div>
		);
	}
}

export default Article;
