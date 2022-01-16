import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";

export default function BookList() {
  const [books, setBooks] = useState([]);
  //add useState for sortParams; default state is to sort by end date
  const [sortParam, setSortParam] = useState("endDate");
  
  useEffect(() => {
    const fetchBooks = async () => {
      //used airtable API encoder to sort book list
      //https://codepen.io/airtable/full/rLKkYB?baseId=appT3MFdDqZ1ffo0F&tableId=tblYtUeQquiXFRLuM
      const res = await api.get(`?sort%5B0%5D%5Bfield%5D=${sortParam}&sort%5B0%5D%5Bdirection%5D=asc`);
      setBooks(res.data.records);
    }
    fetchBooks();
  }, [sortParam])

  return (
    <div>
      <DropdownButton variant="dark" title="Sort Books" className="sort-books-btn">
        <Dropdown.Item onClick={() => { setSortParam("startDate") }}>Start Date</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("endDate") }}>End Date</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("title") }}>Title</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("author") }}>Author's Firstname</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("stars") }}>Rating</Dropdown.Item>
      </DropdownButton>

      <Container className="grid" class="m-5 pb-5">
        <Row>
        {books.map((book) => {
          return (
            // stack overflow explaining how to setup dynamic columns: https://stackoverflow.com/questions/57221956/how-to-map-items-in-row-with-react-bootstrap
            <Col xs="12" sm="6" lg="4" xl="3" key={book.id}>
            <div className="book-list-card">
              <Card
                style={{ width: "250px", height: "450px" }}
                key={book.id}>
                  <Card.Body>
                    <Card.Img className="book-thumbnail" src={book.fields.thumbnail} alt={book.fields.title}/>
                    <Card.Text>Start Date: {book.fields.startDate}</Card.Text>
                    <Card.Text>End Date: {book.fields.endDate}</Card.Text>
                    <Rating
                    className="form-item"
                    initialValue={book.fields.stars}/>
                  <Link to={`/books/${book.id}`}>
                    <Button variant="outline-dark">View Book</Button>
                  </Link>
                </Card.Body>
                </Card>
              </div> 
              </Col>
        )
        })}
          </Row>
          </Container>
    </div>
  )
}
