import React from 'react';
import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap';

export class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
  				<a class="navbar-brand" href="#">
    			<img src={logo} className="App-logo" alt="logo" />
    				<Col className="site-heading">Isaac Blog</Col>
  				</a>
			</nav>
		);
	}
}