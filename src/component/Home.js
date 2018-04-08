import React from 'react';
import { Container, Row, Col, img } from 'react-bootstrap';

export class Home extends React.Component{
	render(){
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		return(
				<Row>
					<Col md={10}>
						<Row>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">Born to Acheive</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/haak_cover.jpeg'} className="blog-image card-shadow" alt="logo" />
									<Col className="overlay">
									</Col>
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">Books are best</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/books.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">A Beautiful Evening</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/child.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">Let it free</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/original.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">Beauty lies here</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/location.jpeg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">They are no different</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/ele.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">Color of joy</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/night.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>
							<Col md={5} className="card-custom">
								<Col md={12}>
									<h1 className="custom-header">It's not about Acme</h1>
								</Col>
								<Col md={12}>
									<img src={process.env.PUBLIC_URL + 'images/mountain.jpg'} className="blog-image card-shadow" alt="logo" />
								</Col>
								<Col md={12} class="align-right">
									<Row>
										<Col md={6} className="date-div">
											{new Date().toLocaleDateString("en-US",options)}	
										</Col>
									</Row>
								</Col>
								<Col md={12} className="text-justify">
									<Col md={12} className="blog-text text-justify blog-content">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
									</Col>
								</Col>
							</Col>							
						</Row>
					</Col>
					<Col md={2}>
						<Col className="menu-items">Home</Col>
						<Col className="menu-items">Blog</Col>
						<Col className="menu-items">About Me</Col>
						<Col className="menu-items">Reach Me</Col>
						<Col className="menu-items">Future Projects</Col>
					</Col>
				</Row>
		);
	}
}