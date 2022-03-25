import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './LoginForm.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

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
          </Modal.Header>
          <Modal.Body>
            <form>
            <h3>StarU</h3>         
              <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email Address"
                  value={this.state.email}                
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                />
              </div>
              <div className="d-grid gap-2">        
              <Button onClick= {this.onCloseModal} variant="primary" size="lg">
               Log In
              </Button>
              <p className="forgot-password text-right">
                  Forgot your <a href="/forgot">password?</a>
                </p>   
              </div>
              <br></br>   
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default LoginForm;