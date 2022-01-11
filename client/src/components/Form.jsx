
// import StartDatePicker from "./StartDatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { getValue } from "@testing-library/user-event/dist/utils";
// import AddBook from "./AddBook";


export default function Form(props) {
  const { title, author, startDate, endDate, stars, review } = props.input;
  const { handleSubmit, control, errors } = useForm();
  //may need to add handle text input as well ??????
  // const { register, handleSubmit, errors, control } = useForm();

  return (
    <div>
      
      <form onSubmit={props.handleSubmit}>

        <label>Title</label>
        <input
          id="title"
          value={title}
          placeholder="add title"
          onChange={props.handleTextInput} />
        <br />

        {/* <label>Author</label>
        <input
          id="author"
          value={author}
          placeholder="add author"
          onChange={props.handleTextInput} />
        <br /> */}

        
        <label>Start Date</label>
        <Controller
          id="startDate"
          // name="startDate"
          control={control}
          defaultValue={null} 
          
          render={({ field }) => (
            <DatePicker
              dateFormat = 'MM/dd/yyyy'
              // onChange={(date) => { props.handleDateInput("startDate", date); props.handleDateInput("endDate", date) }}
              onChange={(date) => { props.handleDateInput("startDate", date)}}
              placeholderText="select start date"
              value={startDate}
            />
          )} /> 
        
        {/* <label>Start Date</label>
        <input
          id="startDate"
          value={startDate}
          placeholder="add start date"
          onChange={props.handleTextInput} />
        <br />  */}
        
        <label>End Date</label>
        <Controller
          name="endDate"
          control={control}
          defaultValue={null} 
          
          render={({ field }) => (
            <DatePicker
              dateFormat = 'MM/dd/yyyy'
              onChange={(date) => {props.handleDateInput("endDate", date)}}
              placeholderText="select end date"
              value={endDate}
            />
          )} /> 
        


      

        {/* <label>End Date</label>
        <input
          id="endDate"
          value={endDate}
          placeholder="add end date"
          onChange={props.handleTextInput} />
        <br />  */}
{/* 
        <label>Stars</label>
        <input
          id="stars"
          value={stars}
          placeholder="add stars"
          onChange={props.handleTextInput} />
        <br />

        <label>Review</label>
        <input
          id="review"
          value={review}
          placeholder="add review"
          onChange={props.handleTextInput} />
        <br /> */} 
        
        <button>{props.type} Book</button>

      </form>
    </div>
  )
}