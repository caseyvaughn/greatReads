import { useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/apiConfig/index.js";
import Form from "./Form";

const defaultInput = {
  title: "",
  author: "",
  startDate: "",
  endDate: "",
  stars: "",
  review: "",
}
export default function AddBook() {
  const [input, setInput] = useState(defaultInput)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    const res = await api.post("/", { fields });
    console.log(res.data);
    setInput(defaultInput);
    navigate("/");
    console.log(input);
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
  const handleStarInput = (e) => {
    const { id, valueAsNumber } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: valueAsNumber,
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
        type={"Add"}/>
    </div>
  )
}
