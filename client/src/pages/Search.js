// ✅
import React, { Component } from 'react';
// Components
import Jumbotron from '../Components/Jumbotron';
import Card from '../Components/Card';
import Form from '../Components/Form';
import Book from '../Components/Book';
import { Col, Row, Container } from '../Components/Grid';
import { List } from '../Components/List';
// import API 
import API from "../utils/API";
//import styles 
import "../App.css"


// Search Books class component
class SearchBooks extends Component {
	
	// initial state of the component 
	state = {
		books: [],
		q: '',
		message: 'Search for a book',
	};

	// handle input change in search bar
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	// get books for search query
	getBooks = () => {
		API.getBooks(this.state.q)
			.then((res) =>
				this.setState({
					books: res.data,
				})
			)
			.catch(() =>
				this.setState({
					books: [],
					message: 'No books found!',
				})
			);
	};

	// handle search form submit
	handleFormSubmit = (event) => {
		event.preventDefault();

		// get books for search query
		this.getBooks();
	};

	// save book in database
	handleBookSave = (id) => {
		const book = this.state.books.find((book) => book.id === id);

		API.saveBook({
			googleId: book.id,
			title: book.volumeInfo.title,
			subtitle: book.volumeInfo.subtitle,
			link: book.volumeInfo.infoLink,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail,
		}).then(() => this.getBooks());
	};

	render() {
		return (
			<>
				<br />
				<br />
				{/* Container */}
				<Container>
					<div className="main-container">
						<Row>
							<Col size="md-12">
								{/* Jumbotron */}
								<Jumbotron>
									<h1 className="text-center">
										<strong style={{color:'white'}}>
											Google Books Search
										</strong>
									</h1>
									
								</Jumbotron>
							</Col>
							<Col size="md-12">
								{/* Book Search Form */}
								<Card
									title=" Book Search"
								>
									<Form
										handleInputChange={
											this.handleInputChange
										}
										handleFormSubmit={
											this.handleFormSubmit
										}
										q={this.state.q}
									/>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col size="md-12">
								{/* Search Results Card */}
								<Card title="Search Results">
									{this.state.books.length ? (
										<List>
											{this.state.books.map(
												(book) => (
													<Book
														key={ book.id }
														title={	book.volumeInfo.title }
														subtitle={ book.volumeInfo.subtitle }
														link={ book.volumeInfo.infoLink }
														authors={book.volumeInfo.authors.join(', ')}
														description={ book.volumeInfo.description }
														image={ book.volumeInfo.imageLinks.thumbnail }
														Button={() => (
															<button
																onClick={() => this.handleBookSave( book.id )}
																className="btn btn-primary ml-2" >
																Save
															</button>
														)}
													/>
												)
											)}
										</List>
									) : (
										<h5 className="text-center">
											{this.state.message}
										</h5>
									)}
								</Card>
							</Col>
						</Row>
						<br />
					</div>
					<br />
				</Container>
				<br />
			</>
		);
	}
}

export default SearchBooks;
