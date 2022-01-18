import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/apiConfig";
import Form from "./Form";

const defaultInput = {
  title: "",
  author: "",
  startDate: null,
  endDate: null,
  stars: null,
  review: "",
};

export default function EditBook() {
  const [input, setInput] = useState(defaultInput)
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook= async () => {
      const res = await api.get(`/${id}`)
      setInput(res.data.fields);
    }
    fetchBook();
  }, [id]);


  //copied code from AddBook
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    //changed from addBook; using put to update fields
    await api.put(`${id}`, { fields });
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
    })
    )
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
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        handleDateInput={handleDateInput}
        handleStarInput={handleStarInput}
        type={"Save"}/>
    </div>
  )
}

