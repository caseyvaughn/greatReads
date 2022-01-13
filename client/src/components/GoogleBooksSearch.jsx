import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';


export default function GoogleBooksSearch() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  const searchTerm = "intitle"
  let search = "";

  const handleChange = (e) => {
    const book = e.target.value;
    setBook(book);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);

  }

  const searchBooks = async () => {
    let googleBooksURL=`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${search}${GOOGLE_API_KEY}`
    const res = await axios.get(googleBooksURL);
    console.log(res.data);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search a book" onChange={handleChange}></input>
        <button type = "submit">Search for Book</button>
      </form>
      
    </div>
  )
}
