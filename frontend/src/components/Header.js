import axios from 'axios';
import React, { useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

export default function Header() {

   const [user, setUser] = React.useState({});
   const BASEAPIURL = process.env.REACT_APP_API_URL;
   let isLogin = false;
   const token = sessionStorage.getItem('token');
   token ? isLogin = true : isLogin = false;

   const Headers =
   {
      headers: {
         'Authorization': `Bearer ${token}`
      },
   };


   const handleLogout = () => {
      sessionStorage.removeItem('token');
      window.location.href = '/user/login';
   };

   useEffect(() => {
      // /auth/user-info
      if (isLogin) {
         const URL = BASEAPIURL + '/user/auth/user-info';
         axios.get(URL, Headers)
            .then(response => {
               const { user_info, status } = response.data;
               if (status == true) {
                  setUser(user_info);
               }
            });
      }
   }, [isLogin, BASEAPIURL]);

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
                        <Badge bg="secondary" className="m-2">
                           {user ? user.userName : 'NotFound'}
                        </Badge>
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
