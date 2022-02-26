import React from 'react';
import {  Navbar, Nav, Image, Container} from 'react-bootstrap';
import logo from '../../images/logo.png';
import {Link, NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

let NavBar = () => {
 
    return(
        <>
    <Navbar className={classes.navbar}  expand="lg">
    <Container>
        <Navbar.Brand href="#home">         
         {/* <Image src={logo} className={classes.logo}/>  */}
         <h5 className={classes.logo}>Lubna Alamoudi</h5>
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />     
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`mx-auto ${classes.navbarItems}`}>  
        <NavLink className={(navData)=> navData.isActive ? classes.active: ''}  to="/">Home</NavLink>
        <NavLink className={(navData)=> navData.isActive ? classes.active: ''}  to="/projects">Projects</NavLink> 
        <NavLink  className={(navData)=> navData.isActive ? classes.active: ''} to="/contact">Contact</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    )

}
export default NavBar