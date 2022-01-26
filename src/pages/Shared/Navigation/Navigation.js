import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { AiOutlineUser } from "react-icons/ai";

const usersIcon = <AiOutlineUser />

const Navigation = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Navbar collapseOnSelect expand="lg" fixed='top'
            className={colorChange ? 'navbar1 colorChange' : 'navbar1'}
        >
            <Container>
                <Navbar.Brand href="/home" className='nav-logo text-white'>Travel<span className='main-font-color'>Sphere</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto" defaultActiveKey="/home">
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                    </Nav>


                    <NavDropdown title={usersIcon} className=' user-btn ms-auto rounded-circle' variant="none " >
                        <NavDropdown.Item href="#action/3.1" className="dropdown-menu-items main-font-color chngbg">Login</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="main-font-color chngbg">Login</NavDropdown.Item>
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;