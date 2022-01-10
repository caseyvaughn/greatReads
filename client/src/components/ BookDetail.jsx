import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import api from '../services/apiConfig/index.js';


export default function BookDetail() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await api.get(`/${id}`);
      console.log(res.data);
      setBook(res.data);
    }
    fetchBook();
  }, []);

  return (
    <div>
      <h4>{book.fields?.title}</h4>
      <h5>{book.fields?.author}</h5>
      <h5>{book.fields?.startDate}</h5>
      <h5>{book.fields?.endDate}</h5>
      <h5>{book.fields?.stars}</h5>
      <p>{book.fields?.review}</p>
    </div>
  )
}
