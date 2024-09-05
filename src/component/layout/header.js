import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../assets/3.jpeg';
import Text from '../../assets/2.jpeg';
import Fix from '../../assets/1.jpeg';
import Exit from '../../assets/4.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Life from '../../assets/5.jpeg';
import Lite from '../../assets/6.jpeg';
import Fate from '../../assets/7.jpeg';
import Hat from '../../assets/8.jpeg';
import Yas from '../../assets/9.jpeg';
import Tas from '../../assets/10.jpeg';
import Fit from '../../assets/11.jpeg';
import Wit from '../../assets/12.jpeg';



export const header = () => {
  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src={Logo}
          width="150"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{'  '}
        <b>PAKISTANI DRESS COLLECTION</b>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action1">ABOUT</Nav.Link>
            <Nav.Link href="#action1">PRODUCT</Nav.Link>
            <Nav.Link href="#action1">CONTACT</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel>
    <Carousel.Item>
      <img src={Image} height={600} width={1300}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={Text} height={600} width={1400}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={Fix} height={600} width={1400} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  <Container>
      <Row>
        <Col>
        <img src={Exit} height={550} width={550}/>
        </Col>
        <Col>
        <h1><b>ABOUT PAKISTANI COLLECTION</b></h1>
        <h5>A Pakistani style suit is a traditional outfit consisting of a long tunic (known as a kameez) 
          paired with loose-fitting pants (known as shalwar) and a scarf (known as a dupatta). This ensemble is popular among women in Pakistan and 
          is known for its vibrant colors, intricate embroidery, and unique designs.The fashion trends in Pakistan in 2023 are a blend of traditional and modern styles, incorporating bold colors, intricate embroidery, pantsuits, bell sleeves, cape dresses, and statement jewelry. These trends offer a lot of options
           for Pakistani girls to experiment with and express their personal style.he “shalwar kameez” — the knee-length tunic shirt with loose-fitting trousers underneath — is the national dress of Pakistan. It is worn by both sexes in Pakistan. Sometimes the men’s version is spelled shalwar kameez; while the woman’s version is spelled salwar kameez. The outfit make sense in a place with hot
            climate and customs that require one to keep one’s body covered.</h5>
        </Col>
      </Row>
      <img 
      src={Life} 
      height={400}
      width={270}
      ></img>

      <img src={Lite}
      height={400}
      width={270}
      ></img>

      <img src={Fate}
      height={400}
      width={270}
      ></img>

      <img src={Hat}
      height={400}
      width={270}
      ></img>
      </Container>

      <Carousel>
    <Carousel.Item>
      <img src={Yas} height={700} width={1400}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={Tas} height={700} width={1400}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={Fit} height={700} width={1400} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
      </Carousel.Item>
  </Carousel>

  <Container>
      <Row>
        <Col>
        <h5>A Pakistani style suit is a traditional outfit consisting of a long tunic (known as a kameez) 
          paired with loose-fitting pants (known as shalwar) and a scarf (known as a dupatta). This ensemble is popular among women in Pakistan and 
          is known for its vibrant colors, intricate embroidery, and unique designs.The fashion trends in Pakistan in 2023 are a blend of traditional and modern styles, incorporating bold colors, intricate embroidery, pantsuits, bell sleeves, cape dresses, and statement jewelry. These trends offer a lot of options
           for Pakistani girls to experiment with and express their personal style.he “shalwar kameez” — the knee-length tunic shirt with loose-fitting trousers underneath — is the national dress of Pakistan. It is worn by both sexes in Pakistan. Sometimes the men’s version is spelled shalwar kameez; while the woman’s version is spelled salwar kameez. The outfit make sense in a place with hot
            climate and customs that require one to keep one’s body covered.</h5>
        </Col>
        <Col>
        <img src={Wit}></img>
        </Col>
      </Row>
      </Container>
      


    </>
  )
}
export default header

