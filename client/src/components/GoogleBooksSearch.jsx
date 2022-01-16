import axios from 'axios';
import React from 'react'
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container, Button, Collapse } from "react-bootstrap";

export default function GoogleBooksSearch({fetchBookData}) {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const handleChange = (e) => {
    const book = e.target.value;
    setBook(book);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${GOOGLE_API_KEY}&maxResults=8`
    //try to add intitle: as a search term!
    axios.get(googleBooksURL)
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
    } )
  }

// function to get selected book's information
  // const handleSelectBook = (book) => {
  //   const title = book.volumeInfo.title;
  //   const author = book.volumeInfo.authors;
  //   const thumbnail = book.volumeInfo.imageLinks.thumbnail;
  //   console.log(title);
  // }

  const [open, setOpen] = useState(false);
  return (
    <Collapse in={!open}>
    <div >
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search a book" onChange={handleChange}></input>
        <Button type = "submit"  variant="dark" size="sm">Search</Button>
      </form>
      <Container className="grid" class="m-5 pb-5" >
        <Row>
          {result.map((book) => {
            return (
              <Col xs="12" sm="6" lg="4" xl="3" key={book.id}>
              <div >
                  <Card style={{ width: "200px" }} >
                  <Card.Img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} variant="top" className="book-cover" />
                    <Card.Body>
                      <Card.Text>{book.volumeInfo.title}</Card.Text>
                      <Card.Text>{book.volumeInfo.authors}</Card.Text>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => { fetchBookData(book); setOpen(!open) }}>
                        Select Book</Button>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
            )
          }
          )} 
          </Row>
        </Container>
      </div>
      </Collapse>
  )
}
