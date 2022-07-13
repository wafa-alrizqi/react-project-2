import React , {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Row,Col} from 'react-bootstrap';

function Cat() {
  return (
    <>
    <div className='div-card'>
  <Card className='card'>
    <Card.Body>
        <Row>
            <Col>
                <Card.Img className='cat-image' variant="top" src="https://www.artennua.com/wp-content/uploads/2020/04/post.jpg" />
            </Col>
            <Col className='card-text'>
                <Card.Title>Mdicinal Plants</Card.Title>
                <Card.Text>
                Medicinal plants, also called medicinal herbs, have been discovered and used in traditional medicine practices since prehistoric times. 
                </Card.Text>
            </Col>
        </Row>
    </Card.Body>
  </Card>
   </div>   
   <div className='div-card'>
  <Card className='card'>
    <Card.Body>
        <Row>
        <Col className='card-text'>
                <Card.Title>Aromatic Plants</Card.Title>
                <Card.Text>
                Aromatic plants are those that have volatile oils in their leaves and stems , These types of plants are often cultivated for their essential oils
                </Card.Text>
            </Col>
            <Col>
                <Card.Img className='cat-image' variant="top" src="https://financialtribune.com/sites/default/files/field/image/17january/07-as-medicinal_plants_247-ab.jpg" />
            </Col>
        </Row>
    </Card.Body>
  </Card>
   </div>
   <div className='div-card'>
  <Card className='card'>
    <Card.Body>
        <Row>
            <Col>
                <Card.Img className='cat-image' variant="top" src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9pc29ub3VzJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
            </Col>
            <Col className='card-text'>
                <Card.Title>Poisonous Plants</Card.Title>
                <Card.Text>
                A poisonous plant is defined as a plant that when touched or ingested in sufficient quantity can be harmful
                or fatal to an organism or any plant capable evoking a toxic and/or fatal reaction.
                </Card.Text>
            </Col>
        </Row>
    </Card.Body>
  </Card>
   </div>
   {/* <div className='div-card'>
  <Card className='card'>
    <Card.Body>
        <Row>
        <Col className='card-text'>
                <Card.Title>Edible Plants</Card.Title>
                <Card.Text>
                The most commonly edible parts of plants are fruit, usually sweet, fleshy, and succulent.
                 Most edible plants are commonly cultivated for their nutritional value .
                </Card.Text>
            </Col>
            <Col>
                <Card.Img className='cat-image' variant="top" src="https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/16:9/w_2560%2Cc_limit/Mint_Leaves.jpg" />
            </Col>
        </Row>
    </Card.Body>
  </Card>
   </div> */}
   </> 
      )}

export default Cat