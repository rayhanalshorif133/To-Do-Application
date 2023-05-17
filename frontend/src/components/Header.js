import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

export default function Header() {

   let isLogin = false;
   sessionStorage.getItem('token') ? isLogin = true : isLogin = false;

   const handleLogout = () => {
      sessionStorage.removeItem('token');
      window.location.href = '/user/login';
   };

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container fluid>
               <Navbar.Brand href="/">
                  <span className='logo'>
                     Todo App
                  </span>
               </Navbar.Brand>
               <Navbar.Collapse id="navbarScroll">
                  <div className="d-flex m-auto my-2 my-lg-0">
                     <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/todo">Todo</Nav.Link>
                        <Nav.Link href="/todo-history">History</Nav.Link>
                     </Nav>
                  </div>
                  {
                     isLogin ? <>
                        <Button variant="danger" onClick={handleLogout}>
                           Logout
                        </Button>
                     </> : <>
                        <Button variant="info" href='/user/login'>
                           Login
                        </Button>
                     </>
                  }
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}
