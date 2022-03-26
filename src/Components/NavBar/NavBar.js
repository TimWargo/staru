import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const { isLoggedIn } = this.props.isLoggedIn
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">StarU</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>                           
                            { isLoggedIn && (<Nav.Link href="/account">Account</Nav.Link>)}
                            { !isLoggedIn && (<LoginForm show={isLoggedIn} onLoginChange={this.props.onLoginChange} />)}
                            {/*If not logged on, allow user to sign up. */}                                
                            { !isLoggedIn && (<SignupForm show={isLoggedIn} onLoginChange={this.props.onLoginChange} />)}             
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </>
            
        );
    }
}
 
export default NavBar;