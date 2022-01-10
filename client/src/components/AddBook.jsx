import { useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/apiConfig/index.js";
import Form from "./Form";

const defaultInput = {
  title: "",
  // author: "",
  // startDate: "",
  // endDate: "",
  // stars: "",
  // review: "",
}
export default function AddBook() {
  const [input, setInput] = useState(defaultInput)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    const res = await api.post("/", { fields });
    console.log(res.data);
    // setInput(defaultInput);
    // navigate("/characters");
  }
  const handleTextInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  return (
    <div>
      Add a new character!
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        type={"Create"}/>
    </div>
  )
}
