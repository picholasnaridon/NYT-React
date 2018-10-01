import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import Search from './Search';
import moment from 'moment';
import { Nav, Navbar, NavItem, Row, Grid, Col, Well } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import _ from 'lodash';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			filteredArticles: [],
			savedArticles: []
		};
	}
	componentDidMount() {
		var that = this;
		axios.get('/api/articles').then(function(response) {
			console.log(response.data.articles);
			that.setState({
				articles: response.data.articles
			});
		});
		axios.get('/api/articles/saved').then(function(response) {
			console.log(response.data.articles);
			that.setState({
				savedArticles: response.data.articles
			});
		});
	}

	saveArticle = (article) => {
		var that = this;
		axios
			.post('/api/articles', {
				title: article.title,
				published: article.created_date,
				url: article.url,
				multimedia: article.multimedia,
				abstract: article.abstract
			})
			.then(function(response) {
				that.componentDidMount();
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	deleteArticle = (deletedId) => {
		var that = this;
		axios('/api/articles', { params: { id: deletedId }, method: 'DELETE' }).then(function(response) {
			var newSaved = _.filter(that.state.savedArticles, function(article) {
				return article._id != deletedId;
			});
			that.setState({
				savedArticles: newSaved
			});
		});
	};

	handleSearchChange = (searchState) => {
		var startUnix = searchState.startDate ? moment(searchState.startDate).unix() : 0;
		var endUnix = searchState.endDate ? moment(searchState.endDate).unix() : 2547992886;
		var currentUnix = moment().unix();
		var subject = searchState.subject;

		var newArray = _.filter(this.state.articles, function(article) {
			return (
				article.title.toLowerCase().includes(subject.toLowerCase()) &&
				(moment(article.created_date).unix() > startUnix && moment(article.created_date).unix() < endUnix)
			);
		});
		this.setState({
			filteredArticles: newArray
		});
	};
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">New York Times Search</Link>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">
							<Link to="/">Home</Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/saved">Saved</Link>
						</NavItem>
					</Nav>
				</Navbar>;
				<Route
					path="/"
					render={(props) => (
						<Grid>
							<Row>
								<Col>
									<Search handleSearchChange={this.handleSearchChange} />
								</Col>
							</Row>
							<hr />
							<Row>
								<Col md={6}>
									<Well>
										<h1>All Articles</h1>
										<ArticleList
											articles={
												!this.state.filteredArticles.length ? (
													this.state.articles
												) : (
													this.state.filteredArticles
												)
											}
											saveArticle={this.saveArticle}
										/>
									</Well>
								</Col>
								<Col md={6}>
									<Route
										path="/saved"
										render={(props) => (
											<Well>
												<h1>Saved Articles</h1>
												<ArticleList
													deleteArticle={this.deleteArticle}
													articles={this.state.savedArticles}
												/>
											</Well>
										)}
									/>
								</Col>
							</Row>
						</Grid>
					)}
				/>
			</div>
		);
	}
}

export default Main;
