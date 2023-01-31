
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {BsCart2} from 'react-icons/bs'

// yarn add react-bootstrap
const NavbarTop = () => {
    const { CartTotalQuantity } = useSelector(state => state.cart)

    return (
        <Navbar bg="light" expand="lg" className="shadow-lg position-fixed fixed-top ">
            <Container className="d-flex flex-coulmn"> 
                <NavLink to="/" className="navbar-brand p-2">
                    <span className="text-muted">Home</span>

                </NavLink>
                {/* Burger: */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                        <NavLink className='nav-link' to='/cards'>Cards</NavLink>
                        <NavLink className='nav-link flex-grow' to='/cart'>
                            <BsCart2 size={'2rem'} />
                            <span>
                                <span>{CartTotalQuantity}</span>
                            </span>
                        </NavLink>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;