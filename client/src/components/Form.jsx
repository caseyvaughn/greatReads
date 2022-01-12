import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert";


export default function Form(props) {
  const { title, author, startDate, endDate, stars, review } = props.input;
  const {control } = useForm();
 
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

        <label>Author</label>
        <input
          id="author"
          value={author}
          placeholder="add author"
          onChange={props.handleTextInput} />
        <br />

        <label>Start Date</label>
        <Controller
          id="startDate"
          control={control}
          defaultValue={null} 
          render={({ field }) => (
            <DatePicker
              dateFormat = 'MM/dd/yyyy'
              onChange={(date) => { props.handleDateInput("startDate", date)}}
              placeholderText="select start date"
              value={startDate}
            />
          )} /> 
        
        <label>End Date</label>
        <Controller
          id="endDate"
          control={control}
          defaultValue={null} 
          render={({ field }) => (
            <DatePicker
              dateFormat = 'MM/dd/yyyy'
              onChange={(date) => {props.handleDateInput("endDate", date)}}
              placeholderText="select end date"
              value={endDate}
              minDate={startDate}
            />
          )} /> 
       
        <label>Stars</label>
        <Rating
          onClick={(rating)=>{props.handleStarInput("stars", rating)}}
          />
        
        <label>Review</label>
        <input
          id="review"
          value={review}
          placeholder="add review"
          onChange={props.handleTextInput} />
        <br /> 
        
        <button>{props.type} Book</button>

        <Alert>This is a button</Alert>
        <Button>{props.type} Book Bootstrap</Button>

      </form>
    </div>
  )
}
