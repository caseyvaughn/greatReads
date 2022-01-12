import { useEffect, useState } from "react";
import api from '../services/apiConfig/index.js';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Box.css"


export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await api.get();
      setBooks(res.data.records);
    }
    fetchBooks();
  }, [])
  return (
    <div>
      <Container className="grid">
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


              {/* original code for displaying all books without react bootstrap
            <li key={book.id}>
              <div>
                <Link to = {`/books/${book.id}`}>
                  <h3>{book.fields.title}</h3>
                </Link>
                <h4>{book.fields.author}</h4>
                <h5>{book.fields.startDate}</h5>
                <h5>{book.fields.endDate}</h5>
                <h5>{book.fields.stars}</h5>
                <p>{book.fields.review}</p>
              </div>
            </li> */}