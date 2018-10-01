import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const SiteNav = () => {
	return (
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
		</Navbar>
	);
};

export default SiteNav;
