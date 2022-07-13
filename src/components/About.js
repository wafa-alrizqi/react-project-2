import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
function About() {
  return (
    <div>
         <Container className="About">
             
      <Row>
      <Col className="About1" s><h3>About</h3>
      <h3>  🌱</h3><br/></Col>
        
        <Col xs={{ order: 12 }} className="About2"> 
      
        <h3> For the love of gardening.<br></br>🍀</h3>



</Col>
        <Col xxs={{ order: 1 }}className="About3"><h3>We're a group of people that are passionate about plants and we want everyone to start gardening and to love it.<br></br>🌿</h3></Col>
      </Row>
       
        </Container>
        </div>
  )
}

export default About