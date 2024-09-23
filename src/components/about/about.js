import React from 'react'
 import Header from '../layout/header'
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import F from '../../assets/14.jpeg'

export const about = () => {
  return (
    <>
      <h1>About Page</h1>
       <Header /> 
       <Container>
        <Row>
          <Col>
            <img src={F} height={550} width={550} />
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
        </Container>


    </>
  )
}
export default about;
