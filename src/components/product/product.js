import React from 'react'
import Header from '../layout/header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import T from '../../assets/15.jpeg'
import { Container } from 'react-bootstrap';

const product = () => {
  return (
    <>
    <h6>product Page</h6>
    <Header />
    <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={T} height={300} width={350} />
      <Card.Body >
        <Card.Title>design 1</Card.Title>
        <Card.Text>
        <p>RS:1300</p>Rs:1000
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img src={T} height={300} width={350} />
      <Card.Body >
        <Card.Title>design 1</Card.Title>
        <Card.Text>
        <p>RS:1300</p>Rs:1000
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}
export default product;

