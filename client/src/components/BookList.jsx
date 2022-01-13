import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
      <Button className="btn-sort" onClick={() => { setSortParam("startDate") }}>Sort by Start Date</Button>
      <Button className="btn-sort" onClick={() => { setSortParam("endDate") }}>Sort by End Date</Button>
      <Button className="btn-sort" onClick={() => { setSortParam("author") }}>Sort by Author's Firstname</Button>
      <Button className="btn-sort" onClick={() => { setSortParam("title") }}>Sort by Title</Button>
      <Button className="btn-sort" onClick={() => { setSortParam("stars") }}>Sort by Star Rating</Button>

      <Container className="grid" class="m-5 pb-5">
        <Row>
        {books.map((book) => {
          return (
            // stack overflow explaining how to setup dynamic columns: https://stackoverflow.com/questions/57221956/how-to-map-items-in-row-with-react-bootstrap
            <Col xs="12" sm="6" lg="4" xl="3">
            <div>
              <Card
                style={{ width: "18rem" }}
                key={book.id}>
                <Card.Body>
                  <Card.Title>{book.fields.title}</Card.Title>
                  <Card.Text>{book.fields.author}</Card.Text>
                  <Link to={`/books/${book.id}`}>
                    <Button>View Book</Button>
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
