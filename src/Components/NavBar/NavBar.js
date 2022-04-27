import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";


class NavBar extends Component {
    constructor(props) {
        super(props);
        const isLoggedIn = (sessionStorage.getItem('session')) ? true : false;
        this.state = {
            isLoggedIn: isLoggedIn,
        }
        this.onLoginChange = this.onLoginChange.bind(this);
        this.renderAuth = this.renderAuth.bind(this);
        this.logout = this.logout.bind(this);
    }

    onLoginChange(e) {
        this.setState({
            isLoggedIn: e.target.value
        })
    }

    logout() {
        sessionStorage.removeItem('session');
        if (document.cookie.split(';').some((item) => item.trim().startsWith('email'))) {
            document.cookie = "email=; max-age=0";
        }
        this.onLoginChange(false);
    }

    renderAuth() {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            return (
                <>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>
                </>

            );
        } else {
            return (
                <>
                    <LoginButton />
                </>
            );
        }
    }

    render() {
        return (

            // new and improved working NavBar
            <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">StarU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>                          
                        {this.renderAuth()}            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;