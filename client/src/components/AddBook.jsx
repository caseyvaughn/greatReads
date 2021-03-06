import { useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/apiConfig/index.js";
import Form from "./Form";
import GoogleBooksSearch from "./GoogleBooksSearch.jsx";

const defaultInput = {
  title: "",
  author: "",
  startDate: null,
  endDate: null,
  stars: null,
  review: "",
  thumbnail: "",
}
export default function AddBook() {
  const [input, setInput] = useState(defaultInput)
  const navigate = useNavigate();

  const fetchBookData = (book, id) => {

    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors[0];
    const thumbnail = book.volumeInfo.imageLinks.thumbnail
   
    setInput((prevInput) => ({
      ...prevInput,
      "title": title,
      "author": author,
      "thumbnail": thumbnail,
    }));
    console.log(input);
  }

  <GoogleBooksSearch fetchBookData={fetchBookData}/>

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    await api.post("/", { fields });
    setInput(defaultInput);
    navigate("/");
  }
  const handleTextInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };
  const handleDateInput = (id, date) => {
    //need to reformat the date from long string to DD-MM-YYY
    //took formatter from stack overflow: https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
    const formattedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
    setInput((prevInput) => ({
      ...prevInput,
      [id]: formattedDate,
    }))
  }
  const handleStarInput = (id, rating) => {
    //star rating returns ratings out of 100 (ex. 5 stars = 100); need to divide by 20
    const formattedRating = (rating / 20);
    setInput((prevInput) => ({
      ...prevInput,
      [id]: formattedRating,
    }))
  }

  return (
    <div>
      <GoogleBooksSearch fetchBookData={fetchBookData}/>
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        handleDateInput={handleDateInput}
        handleStarInput={handleStarInput}
        type={"Add"}/>
    </div>
  )
}
