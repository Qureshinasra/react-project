import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand>
            <img
              alt=""
              src="./assets/images.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./component/home">Home</Nav.Link>
            <Nav.Link href="#action2">about</Nav.Link>
            <Nav.Link href="#action2">product</Nav.Link>
            <Nav.Link href="#">contact</Nav.Link>
      </Nav>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
export default header
