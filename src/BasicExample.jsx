import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'

function BasicExample() {
  return (
    <div><div className='bar'>
      <Navbar  >
        <Container>
          <img  src='\image\logo.png'></img>
          <Nav id="content">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Courses">Course</Nav.Link>
            <Nav.Link href="#liveclass">LiveClasses</Nav.Link>
            <Nav.Link href="#practice">Parctice</Nav.Link>
            <Nav.Link href="#Resource">Resource</Nav.Link>
          </Nav>
        </Container>
      </Navbar></div>

      
    </div>
  )
}

export default BasicExample