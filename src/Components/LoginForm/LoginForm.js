import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }

  onOpenModal = () => { this.setState({ login: true }); }
  onCloseModal = () => { this.setState({ login: false }); }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  //onSubmit = (event) => {
  //backend db code
  // }

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
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
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
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <br />
              <div>
                <a href="/forgot"> Forgot Password? </a>
              </div>
              <br />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className="div-footer2">
              <Button type="button" class="btn btn-outline-primary mr-1">Login</Button>
            </div>
            <div>
              <p> Don't have an account? <a href="/"> Sign Up </a> </p> {/* Link this to the signup modal */}
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

}

export default LoginForm;