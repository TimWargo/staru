import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
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
    }

    renderAuth() {
        const { isLoggedIn } = this.state;
        const user = sessionStorage.getItem('session');
        if (user) {
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
            <Navbar className="navBar" variant="dark" expand="lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">StarU</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <Nav>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>                           
                            {this.renderAuth()}            
                        </Nav> 
                    </div>
                </div>
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