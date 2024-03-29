/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbarcomponent from "../navbar";
import { Button, NavDropdown, Form } from "react-bootstrap"; 
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import AdminNavbar from "./adminnavbar";

function AddingBook() {
  const { id } = useParams();
  const [book, setBook] = useState({})
  
  const [bookTitle, setBookTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookDesc, setBookDesc] = useState('');
  const [authorDesc, setAuthorDesc] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [noOfCopies, setNoOfCopies] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = ({
      "bookTitle": bookTitle,
      "category": category,
      "author": author,
      "rating": rating,
      "isbn": isbn,
      "bookDesc": bookDesc,
      "authorDesc": authorDesc,
      "bookPrice": bookPrice,
      "noOfCopies": noOfCopies,
    });
    console.log(Data);
    axios.post(`http://localhost:8182/Book/add/${id}`, Data)
      .then(response => {
        setBook(response.data);
        // Navigate to admin dashboard with the admin ID
        navigate(`/admin/dashboard/${id}`);
      })
      .catch(error => console.error("Error adding book:", error));

  };
  

  return (<div>
    <AdminNavbar />
  
    
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBookTitle">
          <Form.Label><h5>Book Title</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            name="bookTitle"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label><h5>Author</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            name="author"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label><h5>Rating</h5></Form.Label>
          <Form.Control
            type="float"
            placeholder="Enter rating"
            name="rating"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label><h5>Category</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formNoOfCopies">
          <Form.Label><h5>Number of Copies</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number of copies"
            name="noOfCopies"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setNoOfCopies(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formIsbn">
          <Form.Label><h5>ISBN</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ISBN"
            name="isbn"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBookDesc">
          <Form.Label><h5>Book Description</h5></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter book description"
            name="bookDesc"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setBookDesc(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAuthorDesc">
          <Form.Label><h5>Author Description</h5></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter author description"
            name="authorDesc"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setAuthorDesc(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBookPrice">
          <Form.Label><h5>Book Price</h5></Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter book price"
            name="bookPrice"
            style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            onChange={(e) => setBookPrice(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
  );
}
export default AddingBook;