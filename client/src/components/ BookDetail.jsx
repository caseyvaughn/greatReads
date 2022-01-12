import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams} from "react-router-dom";
import api from '../services/apiConfig/index.js';
import Delete from "./Delete.jsx";
import EditBook from "./EditBook.jsx";


export default function BookDetail() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await api.get(`/${id}`);
      setBook(res.data);
    }
    fetchBook();
  }, []);

  //have edit button route to edit book form
  const routeEditBook = () => {
    navigate(`/books/${id}/edit`)
  }

  return (
    <div>
      <h4>{book.fields?.title}</h4>
      <h5>{book.fields?.author}</h5>
      <h5>{book.fields?.startDate}</h5>
      <h5>{book.fields?.endDate}</h5>
      <h5>{book.fields?.stars}</h5>
      <p>{book.fields?.review}</p>
      <button onClick={routeEditBook}>Edit Book</button>
      <Delete id={id}/>
    </div>
  )
}
