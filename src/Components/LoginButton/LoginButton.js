import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginShow: false,
            signupShow: false,
        }
        this.onLoginShowChange = this.onLoginShowChange.bind(this);
        this.onSignupShowChange = this.onSignupShowChange.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
    }

    openLoginModal() {
        this.onLoginShowChange(true);
    }

    onLoginShowChange(value) {
        this.setState({
            loginShow: value
        });
    }

    onSignupShowChange(value) {
        this.setState({
            signupShow: value
        });
    }

    render() { 
        return ( 
            <>
                <Nav.Link onClick={this.openLoginModal}>Login</Nav.Link>
                <LoginForm
                    show={this.state.loginShow}
                    onLoginShowChange={this.onLoginShowChange}
                    onSignupShowChange={this.onSignupShowChange}
                />
                <SignupForm
                    show={this.state.signupShow}
                    onLoginShowChange={this.onLoginShowChange}
                    onSignupShowChange={this.onSignupShowChange}
                />
            </>
        );
    }
}
 
export default LoginButton;