import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";



export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await api.get();
      // console.log(res.data.records);
      console.log(res.data);
    }
    fetchBooks();
  }, [])
  return (
    <div>
      Books
    </div>
  )
}
