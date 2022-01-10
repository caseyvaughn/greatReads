import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";



export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await api.get();
      console.log(res.data.records);
      setBooks(res.data.records);
    }
    fetchBooks();
  }, [])
  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <div>
                <h3>{book.fields.title}</h3>
                <h4>{book.fields.author}</h4>
              </div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}
