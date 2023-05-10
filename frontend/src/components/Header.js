import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
 return (
  <>
   <Navbar bg="dark" variant="dark">
    <Container fluid>
     <Navbar.Brand href="/">
      Todo App
     </Navbar.Brand>
     <Navbar.Collapse id="navbarScroll">
      <div className="d-flex m-auto my-2 my-lg-0">
       <Nav
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/todo">Todo</Nav.Link>
       </Nav>
      </div>
      <Button variant="info">
       Login
      </Button>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
 )
}