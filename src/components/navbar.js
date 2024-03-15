import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Navbarcomponent() {
  const { id } = useParams();
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
    // Open WhatsApp for chat (replace with your WhatsApp number)
    window.location.href = 'https://wa.me/+918464862920'; // Replace with your WhatsApp number
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" style={{ background: 'linear-gradient(to right, #141e30, #243b55)', padding: '20px 20px', marginBottom: 0 }}>
        <Navbar.Brand style={{ fontSize: '2rem' }}>
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
    </div>
  );
}

export default Navbarcomponent;
