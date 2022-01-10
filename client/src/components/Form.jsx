export default function Form(props) {
  const { title, author, startDate, endDate, stars, review} = props.input;
  console.log(props);
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
        <input
          id="startDate"
          value={startDate}
          placeholder="add start date"
          onChange={props.handleTextInput} />
        <br />

        <label>End Date</label>
        <input
          id="endDate"
          value={endDate}
          placeholder="add end date"
          onChange={props.handleTextInput} />
        <br />

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
        <br />
        
        <button>{props.type} Book</button>

      </form>
    </div>
  )
}
