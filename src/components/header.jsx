import '../index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

// HEADER BAR COMPONENT
// RENDERS A HEADER ATOP THE PAGE

function Header() {
  return (
    <Navbar sticky = "top" bg = 'light' variant = 'light'>
      <Container>
        <Navbar.Brand href="/">LITTERALLY!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Account Settings</NavDropdown.Item>
              <NavDropdown.Item href="/">Leaderboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style = {{paddingRight: "10px"}}>Signed in as: <a href="/signup">Yousuf Ahmed</a></Navbar.Text>
          <Nav.Link href="/signup">Sign Out?</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;