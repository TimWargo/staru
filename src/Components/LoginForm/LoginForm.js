import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './LoginForm.css';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: {
        email: '',
        password: '',
      }
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onOpenModal = () => { this.setState({ login: true }); }
  onCloseModal = () => { this.setState({ login: false }); }

  onChangeEmail(e) {
    this.setState({
      user: {
        email: e.target.value
      }
    });
  }

  onChangePassword(e) {
    this.setState({
      user: {
        password: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    axios.post('http://localhost/staru/src/php/authLogin.php', user)
      .then(res=> console.log(res.data))
      .catch(error => console.log(error.response));
  }

  render() {
    const { login, user } = this.state
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