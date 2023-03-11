import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Stylling/NavBar&Footer.css";
import { BsCart3 } from 'react-icons/bs';
import{AiOutlineMenu}from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React  from 'react';
import Search from './Search';

function BakeryNavBar(props) {

  return (
    <>
      <Navbar collapseOnSelect expand="lg"  >
        <Container style={{ minWidth: '90%' }}>

          <img src='https://i.ibb.co/F3nd0rL/logo3.png' className='nav-img' alt='...' />
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <AiOutlineMenu/>
          </Navbar.Toggle>
          <Navbar.Collapse >
            <Nav className="me-auto" id='main-nav'>
              <Link to="/" id='NavBar-Links'>Home</Link>
              <Link to="/shop" id='NavBar-Links'>Shop</Link>
              <Link to="/offers" id='NavBar-Links'>Offers</Link>
              <Link to="/MadeBakery" id='NavBar-Links'>How We Made</Link>
              <Nav id='main-nav2'>
                <Link id='NavBar-Icons'>
                  <Search />
                </Link>
                <Link  to="/cart" id='NavBar-Icons'><BsCart3 />
                
                </Link>
              </Nav>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>







    </>
  );
}

export default BakeryNavBar;