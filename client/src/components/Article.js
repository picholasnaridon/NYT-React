import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Article extends Component {
	constructor(props) {
		super(props);
	}

	saveArticle = () => {
		var article = this.props.article;
		console.log(article);
		this.props.saveArticle(article);
	};
	deleteArticle = () => {
		var id = this.props.article._id;
		this.props.deleteArticle(id);
	};
	showSaveOrDelete = () => {
		if (this.props.saveArticle) {
			return (
				<Button bsStyle="success" onClick={this.saveArticle}>
					Save
				</Button>
			);
		} else {
			return (
				<Button bsStyle="danger" onClick={this.deleteArticle}>
					Delete
				</Button>
			);
		}
	};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h3>{this.props.article.title}</h3>
				<div>{this.props.article.abstract}</div>
				<div>{moment(this.props.article.created_date).format('MM-DD-YYYY')} </div>
				{this.props.article.multimedia.slice(2, 3).map(function(media) {
					return <img key={media.url} src={media.url} />;
				})}
				<br />
				{this.showSaveOrDelete()}
			</div>
		);
	}
}

export default Article;
