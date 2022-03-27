import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
                    <LoginForm show={isLoggedIn} />
                    <SignupForm show={isLoggedIn} />
                </>
            );
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">StarU</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>                           
                            {this.renderAuth()}            
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </>
            
        );
    }
}
 
export default NavBar;