import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import api from '../services/apiConfig/index.js';
import Delete from "./Delete.jsx";
import { Button } from "react-bootstrap"

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
      <img className = "book-thumbnail" src={book.fields?.thumbnail} alt={book.fields?.title}></img>
      <h5>{book.fields?.title}</h5>
      <h5 >{book.fields?.author}</h5>
      <h6>Start Date: {book.fields?.startDate}</h6>
      <h6>End Date: {book.fields?.endDate}</h6>
      <h5>{book.fields?.stars}</h5>
      <p>{book.fields?.review}</p>
      <Button variant="outline-dark" onClick={routeEditBook}>Edit Book</Button>
      <Delete id={id}/>
    </div>
  )
}
