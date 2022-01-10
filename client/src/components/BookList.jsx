import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";



export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await api.get();
      // console.log(res.data.records);
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
                <Link to = {`/books/${book.id}`}>
                  <h3>{book.fields.title}</h3>
                </Link>
                <h4>{book.fields.author}</h4>
                <h5>{book.fields.startDate}</h5>
                <h5>{book.fields.endDate}</h5>
                <h5>{book.fields.stars}</h5>
                <p>{book.fields.review}</p>
              </div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}
