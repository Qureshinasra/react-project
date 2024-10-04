import React from 'react'
import Header from '../layout/header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import T from '../../assets/15.jpeg'
import { Card, Button } from 'react-bootstrap';
import F from '../../assets/16.jpeg'
import Q from '../../assets/17.jpeg'
import Z from '../../assets/18.jpeg'
import N from '../../assets/19.jpeg'
import P from '../../assets/20.jpeg'
import H from '../../assets/21.jpeg'
import I from '../../assets/22.jpeg'
import M from '../../assets/23.jpeg'
import R from '../../assets/24.jpeg'
import s from '../../assets/25.jpeg'
import c from '../../assets/26.jpeg'
import Footer from '../layout/footer';





const product = () => {
  return (
    <>
      <h6>product Page</h6>
      <Header />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={T} height={300} width={250}></img>
                <Card.Title>DRESS 1</Card.Title>
                <Card.Text>1000 MRP</Card.Text>
                <Button variant="primary">buy now</Button>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={F} height={300} width={250}></img>
                <Card.Title>DRESS 2</Card.Title>
                <Card.Text>1150 MRP</Card.Text>
                <Button variant="primary">buy now</Button>

              </Card.Body>
            </Card></Col>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Body>
              <img src={Q} height={300} width={250}></img>
              <Card.Title>DRESS 3</Card.Title>
              <Card.Text>1350 MRP</Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>
        </Row>

        <Row>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Body>
              <img src={Z} height={300} width={250}></img>
              <Card.Title>DRESS 4</Card.Title>
              <Card.Text>1450 MRP</Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Body>
              <img src={N} height={300} width={250}></img>
              <Card.Title>DRESS 5</Card.Title>
              <Card.Text>1350 MRP</Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Body>
              <img src={P} height={300} width={250}></img>
              <Card.Title>DRESS 6</Card.Title>
              <Card.Text>999 MRP</Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={H} height={300} width={250}></img>
                <Card.Title>DRESS 7</Card.Title>
                <Card.Text>850 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={I} height={300} width={250}></img>
                <Card.Title>DRESS 8</Card.Title>
                <Card.Text>1200 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={M} height={300} width={250}></img>
                <Card.Title>DRESS 9</Card.Title>
                <Card.Text>1250 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={R} height={300} width={250}></img>
                <Card.Title>DRESS 10</Card.Title>
                <Card.Text>1400 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={s} height={300} width={250}></img>
                <Card.Title>DRESS 11</Card.Title>
                <Card.Text>1500 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <img src={c} height={300} width={250}></img>
                <Card.Title>DRESS 12</Card.Title>
                <Card.Text>1550 MRP</Card.Text>
                <Button variant="primary">buy now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  )
}
export default product;

