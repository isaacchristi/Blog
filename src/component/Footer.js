import React from 'react';
import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends React.Component{
	render(){
		return(
				<Row>
					<Col md={12} className="footer">
						<p className="text-center">
								&copy;{new Date().getFullYear()} Isaac Christie
						</p>
					</Col>
				</Row>
			);
	}
}