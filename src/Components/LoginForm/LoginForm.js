import React, { Component } from "react";
import { Button, Form, Modal, Nav } from "react-bootstrap";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: false,
            login: false,
        }
    }

    onOpenModal = () => { this.setState({ login: true }); }
    onCloseModal = () => { this.setState({ login: false }); }

    render() { 
        const { login } = this.state
        return (
            <>
                <Nav.Link onClick={this.onOpenModal}>Login</Nav.Link>
                <Modal show={login} onExit={this.onCloseModal} onHide={this.onCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <h1>hello</h1>
                        <p>
                        <img src="logo192.png" alt="Default Staru Logo" style="float:left;width:42px;height:42px;"></img>
                        Screen Name:
                        Password:
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
 
export default LoginForm;