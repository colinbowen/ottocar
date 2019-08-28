import { Nav, Navbar } from 'react-bootstrap';
import React from "react"

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="https://app.colinbowen.now.sh/">otto dash</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://app.colinbowen.now.sh/index.html">Home</Nav.Link>
                    <Nav.Link href="https://shielded-basin-67477.herokuapp.com/dashboard">Stats</Nav.Link>
                    <Nav.Link href="http://github.com/colinbowen">GitHub</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="https://app.colinbowen.now.sh/">Refresh</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )}}

export default Header;