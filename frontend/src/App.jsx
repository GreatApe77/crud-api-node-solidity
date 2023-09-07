import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav'
import Header from './components/Header';


function App() {
  

  return (
    <div>
      <Header></Header>
      {/*<Header/>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./src/assets/filimin.svg"
              width="50"
              
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>

          <Nav  className='me-auto'>
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

          </Nav>
        </Container>
      </Navbar>*/}
    </div>
  )
}

export default App
