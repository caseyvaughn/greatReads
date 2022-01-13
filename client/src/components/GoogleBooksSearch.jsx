import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import api from '../services/apiConfig/index.js';

export default function GoogleBooksSearch() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  // const searchTerm = "intitle:"

  const handleChange = (e) => {
    const book = e.target.value;
    setBook(book);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${GOOGLE_API_KEY}&maxResults=5`
    //try to add intitle: as a search term!
    axios.get(googleBooksURL)
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
    } )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search a book" onChange={handleChange}></input>
        <button type = "submit">Search for Book</button>
      </form>
      {result.map((book) => {
        return (
          <div>
            <Card style={{width: "200px" }}>
              <Card.Img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} variant="top" className="book-cover" />
                <Card.Body>
                  <Card.Text>{book.volumeInfo.title}</Card.Text>
                  <Card.Text>{book.volumeInfo.authors}</Card.Text>
                </Card.Body>
              </Card>
          </div>
        )
      }
      )} 
    </div>
  )
}
