import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import api from '../services/apiConfig/index.js';
import Delete from "./Delete.jsx";
import { Button } from "react-bootstrap"
import { Rating } from "react-simple-star-rating";

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
  }, [id]);

  console.log(book.fields?.endDate);

  //have edit button route to edit book form
  const routeEditBook = () => {
    navigate(`/books/${id}/edit`)
  }

  const fetchBookStatus = () => {
    if (book.fields?.endDate === undefined) {
      return <h6>Currently Reading </h6>
    } else {
      return <h6 className="current-reads">End Date: {book.fields?.endDate}</h6>
      }
  }

  return (
    <div>
      <img className = "book-thumbnail" src={book.fields?.thumbnail} alt={book.fields?.title}></img>
      <h5>{book.fields?.title}</h5>
      <h5 >{book.fields?.author}</h5>
      <h6>Start Date: {book.fields?.startDate}</h6>
      {/* <h6>End Date: {book.fields?.endDate}</h6> */}
      {fetchBookStatus()}
      <Rating initialValue={book.fields?.stars}/>
      <p>{book.fields?.review}</p>
      <Button variant="outline-dark" onClick={routeEditBook}>Edit Book</Button>
      <Delete id={id}/>
    </div>
  )
}
