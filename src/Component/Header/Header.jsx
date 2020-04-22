import React, {Component} from "react";
import './heade.style.scss'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component{

    render() {
        return(
            <div>
            <Navbar className="navbar-container" collapseOnSelect expand="lg">
                <Navbar.Brand href="/">Covid19Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-item" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-item" href="/news">News</Nav.Link>
                        <Nav.Link className="nav-item" href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }

}

export default Header
