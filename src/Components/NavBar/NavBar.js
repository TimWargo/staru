import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";


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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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


            // the old NavBar style, kept just in case the new one is awful
            /*
            <div>
                <Navbar className="navBar" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">StarU</Navbar.Brand>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <Nav>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>                           
                            {this.renderAuth()}            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            */

        );
    }
}

export default NavBar;