import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useForm} from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import Button from "react-bootstrap/Button"

export default function Form(props) {
  const { title, author, startDate, endDate, stars, review } = props.input;
  // const {control } = useForm();
 
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <label className="form-item">Title</label>
        <input
          id="title"
          value={title}
          placeholder="add title"
          onChange={props.handleTextInput}
          className={"form-item input-item"}/>
        <br />

        <label className="form-item">Author</label>
        <input
          id="author"
          value={author}
          placeholder="add author"
          onChange={props.handleTextInput}
          className={"form-item", "input-item"}/>
        <br />

        <label className="form-item">Start Date</label>
        <DatePicker
          className={"form-item input-item"}
          defaultValue={null}
          dateFormat='MM/dd/yyyy'
          onChange={(date) => { props.handleDateInput("startDate", date) }}
          placeholderText="select start date"
          value={startDate}/>
   
        <label className="form-item">End Date</label>
        <DatePicker
          className={"form-item input-item"}
              defaultValue={null}
              dateFormat='MM/dd/yyyy'
              onChange={(date) => { props.handleDateInput("endDate", date) }}
              placeholderText="select end date"
              value={endDate}
              //data validation for end date >= start date
              minDate={new Date(startDate)}
            />
         
        <label>Stars</label>
        <Rating
          transition
          allowHalfIcon
          className={"form-item input-item"}
          onClick={(rating)=>{props.handleStarInput("stars", rating)}}
        />
       <br />
        
        <label>Review</label>
        <input
          className={"form-item input-item review-input"}
          id="review"
          height="50"
          value={review}
          placeholder="add review"
          onChange={props.handleTextInput} />
        <br /> 
        <Button type="submit" variant="outline-dark" className="form-btn">{props.type} Book</Button>

      </form>
    </div>
  )
}
