import React, { Component } from 'react';
import { FormControl, Grid, Row, Col, ControlLabel } from 'react-bootstrap';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: '',
			startDate: null,
			endDate: null
		};
	}

	handleChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			function() {
				this.props.handleSearchChange(this.state);
			}
		);
	};

	render() {
		return (
			<div>
				<form>
					<Grid>
						<Row>
							<Col>
								<ControlLabel>Topic</ControlLabel>
								<FormControl
									type="text"
									name="subject"
									value={this.state.subject}
									onChange={this.handleChange.bind(this)}
								/>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								{' '}
								<ControlLabel>Starting Date</ControlLabel>
								<FormControl
									type="date"
									name="startDate"
									value={this.state.startDate ? this.state.startDate : 0}
									onChange={this.handleChange.bind(this)}
								/>
							</Col>
							<Col md={6}>
								<ControlLabel>Ending Date</ControlLabel>
								<FormControl
									type="date"
									name="endDate"
									value={this.state.endDate ? this.state.endDate : 2547992886}
									onChange={this.handleChange.bind(this)}
								/>
							</Col>
						</Row>
					</Grid>
				</form>
			</div>
		);
	}
}

export default Search;
