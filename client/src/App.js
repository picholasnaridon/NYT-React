import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
	render() {
		return (
			<Router>
				<Main />
			</Router>
		);
	}
}

export default App;