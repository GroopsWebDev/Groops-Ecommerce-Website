import React from 'react'
//react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from 'react-icons/bs';
//svg
import GroopLogo from '../../../public/assets/groop-logo.svg';
import Link from 'next/link';
import { NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light">
      <Container className='justify-content-start'>
        <Navbar.Brand href="/components/home" >
            <GroopLogo className="w-full"/>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {/* <Nav.Link href="#" className='text-black'>About Us</Nav.Link> */}
            <Nav.Link href="/components/product"><div className='text-black text-xl mr-[10px]'>SHOP</div></Nav.Link>
            <Nav.Link href="/components/group-order"><div className='text-black text-xl mr-[10px]'>GROUP ORDER</div></Nav.Link>
            <BsPersonCircle className='mt-[12px] text-xl'/>
            <Nav.Link href="#"><div className='text-black text-xl'>LOGIN</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    
    
    </Navbar>
    </>

  )
}

export default Header