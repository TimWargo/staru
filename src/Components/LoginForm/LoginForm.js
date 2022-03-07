import React, { Component } from "react";
import { Button, Form, Modal, Nav } from "react-bootstrap";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
 
export default LoginForm;