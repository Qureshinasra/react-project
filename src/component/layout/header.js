import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/images.jpeg';
import Image from '../../assets/4.jpeg';
import Title from '../../assets/3.jpeg';
import Jpeg from '../../assets/2.jpeg';




export const header = () => {
  return (

    <section>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"

            />{''}
            CONLINE
          </Navbar.Brand>
          <Nav
            className=" justify-content-end"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#product">PRODUCT</Nav.Link>
            <Nav.Link href="#conatct">CONTACT</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>


      <Carousel>
        <Carousel.Item>
          <img src={Image} height={400} width={1400} />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Title} height={400} width={1400} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Jpeg} height={400} width={1400}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </section>
  )
}
export default header




