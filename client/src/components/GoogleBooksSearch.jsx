import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
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
    console.log(book);

    let googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${GOOGLE_API_KEY}&maxResults=5`
    
    //try to add intitle: as a search term!
    axios.get(googleBooksURL)
      .then(data => {
        // console.log(data)
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
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            <h3>{book.volumeInfo.authors}</h3>
            <h3>{book.volumeInfo.title}</h3>
          </div>
        )
      }
      )} 
    </div>
  )
}
