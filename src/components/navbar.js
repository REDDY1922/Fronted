import React, { useState } from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function Navbarcomponent() {
  const { id } = useParams();
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();

  const handlePreviousOrdersClick = () => {
    navigate(`/previous_orders/${id}`);
  };

  const handleBooks = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate(`/book/cart/${id}`);
    } else {
      navigate('/auth/login');
    }
  };

  const handleChatWithUsClick = () => {
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const handleContactSubmit = () => {
    // Handle contact form submission here
    // You can send an email or integrate with a chat service like Intercom or Drift
    setShowContactModal(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" style={{ background: 'linear-gradient(to right, #141e30, #243b55)', padding: '20px 20px', marginBottom: 0 }}>
        <Navbar.Brand as={Link} to={`/customer/dashboard/${id}`} style={{ fontSize: '2rem' }}>
          INFOLIBRA
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={handlePreviousOrdersClick} style={{ fontSize: '1.2rem' }}>Previous Orders</Nav.Link>
          <Nav.Link onClick={handleChatWithUsClick} style={{ fontSize: '1.2rem' }}>Chat with Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleBooks} style={{ fontSize: '1.2rem' }}>Cart</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {localStorage.getItem('isLoggedIn') ? (
            <>
              <Navbar.Text style={{ color: 'white', marginRight: '15px', fontSize: '1rem' }}>
                Signed in as:{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{localStorage.getItem('username')}</span>
              </Navbar.Text>
              <Nav.Link as={Link} to="/about" style={{ color: 'white', marginRight: '15px', fontSize: '1.2rem' }}>
                About
              </Nav.Link>
              <button
                className="btn btn-info btn-sm"
                style={{ fontSize: '1rem' }}
                onClick={() => {
                  localStorage.clear();
                  navigate('/auth/login?msg=you have logged out..');
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-primary" style={{ fontSize: '1rem' }} onClick={() => navigate('/auth/login')}>
              Login
            </button>
          )}
        </Navbar.Collapse>
      </Navbar>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleCloseContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContactModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleContactSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbarcomponent;
