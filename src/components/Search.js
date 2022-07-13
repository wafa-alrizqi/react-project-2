import React from 'react';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantsData from './PlantsData';
import '../App.css'
import {Button,Container,Form,Nav,Navbar,Card,CardGroup} from 'react-bootstrap';


function Header() {
    const [names, setNames] = useState('');
    const arr = PlantsData.data.plant;
    const [found, setFound] = useState(arr);
    useEffect(() =>  {
        const filterres =arr.filter((per)=>
        per.name.toLowerCase().includes(names));
         setFound(filterres);
    },[names]);

  return (
    <div className='header1'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href='/'>Plants Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Button href="/Cat" variant="outline-secondary" style={{borderRadius: 40}}>  Medicinal</Button>
                <Button href="/Cat" variant="outline-secondary" style={{borderRadius: 40}}>  Scented</Button>
                <Button href="/Cat" variant="outline-secondary" style={{borderRadius: 40}}>  Toxic</Button>
              </Nav>
              <Form className="d-flex">
                <Form.Control variant="outline-secondary" style={{borderRadius: 40}}
                  type="search"
                  value={names}
                  onChange={(e)=>{setNames(e.target.value)}}
                  className="input"
                  placeholder="Filter"
                />
                <Button variant="outline-secondary" style={{borderRadius: 40}} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </Button>
              </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardGroup className='cardImgGroup'>
        {found && found.length > 0 ? (
              found.map((arr) => (
                <li key={arr.name} >
                  <Card className='cardImg' >
                    <Card.Img className='cardImg1' variant="top" src={arr.url} />
                    <Card.Body>
                      <Card.Title>{arr.name}</Card.Title>
                    </Card.Body> 
                  </Card>
                </li>
        ))
          ) : (
            <h3 className='search-filter'>No results found!</h3>
          )}
        </CardGroup>
    </div>
  );
}

export default Header