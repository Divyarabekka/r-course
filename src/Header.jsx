import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Navbar';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import App from './App';
import All from './All';
import Fsd from './Fsd';
import Cyb from './Cyb';
import Data from './Data';
import Career from './Career';
import GridExample from './GridExample';


function Header() {
  return (
    <>
        <Router>
        <h1>GUVI</h1><div id='im'>
        <img style={{width:"95%", margin:"10px 30px"}} src={"/image/img1.webp"}/></div>
        <Nav  className="bg-body-tertiary">
        
      <Container >
      <Link to="/" ><h4></h4></Link>
        <a><Link to="/All"style={{textDecorationLine:"none", color:"black"}} ><h4>All</h4></Link></a>
        <Link to="/Fsd" style={{textDecorationLine:"none",color:"black"}}><h4>FullStackDevelopment</h4></Link>
        <Link to="/Cyb" style={{textDecorationLine:"none",color:"black"}}><h4>Cyber Security</h4></Link>
        <Link to="/Data"style={{textDecorationLine:"none",color:"black"}}><h4>Data Science</h4></Link>
        <Link to="/Career" style={{textDecorationLine:"none",color:"black"}}><h4>Career</h4></Link>
      </Container>
    </Nav>
    <Routes>
    <Route path='/' exact Component={GridExample}></Route>
    <Route path='/All' exact Component={All}></Route>
    <Route path='/Fsd'  Component={Fsd}></Route>
    < Route path='/Cyb'  Component={Cyb}></Route>
    < Route path='/Data'  Component={Data}></Route>
    < Route path='/Career'  Component={Career}></Route>
    </Routes>
    </Router>
    </>
    
  )
}

export default Header