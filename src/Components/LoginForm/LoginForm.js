import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './LoginForm.css';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember_me: true,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
    this.openSignup = this.openSignup.bind(this);
  }

  onOpenModal = () => { this.props.onLoginShowChange(true); }
  onCloseModal = () => { this.props.onLoginShowChange(false); }

  openSignup = () => {
    this.onCloseModal();
    setTimeout(this.props.onSignupShowChange(true), 500);
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleCheckChange = (e) => {
    const isChecked = e.target.checked;
    this.setState({
      remember_me: isChecked
    })
  }

  handleRememberme() {
    try {
      if (this.state.remember_me) {
        const date = new Date(new Date().getDate() + 30).toUTCString;
        document.cookie = "email=" + this.state.email + "; expires=" + date + ";";
      }
    } catch (e) {
      console.log(e);
    }
  }

  verifyInput() {
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.verifyInput()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      }
      axios.post('http://localhost/staru/src/php/authLogin.php', user)
        .then(res=> {
          console.log(res.data);
          this.handleRememberme();
          sessionStorage.setItem("session", this.state.email);
          this.onCloseModal();
          window.location.pathname = "/";
        })
        .catch(error => {
          // display invalid credentials message
        });
    } else {
      // display invalid input message
    }
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onExit={this.onCloseModal} onHide={this.onCloseModal}>
        <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
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
                  onChange={this.handleInputChange}                
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
                />
              </div>
              <div className="remember-me-wrapper">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="exampleInputCheckbox"
                  defaultChecked={this.state.remember_me}
                  onChange={this.handleCheckChange} />
                <label htmlFor="exampleInputCheckbox">Remember Me</label>
              </div>
              <div className="d-grid gap-2">
                <Button onClick={this.openSignup} variant="primary">Sign up</Button>
              <Button onClick= {this.onSubmit} variant="primary" size="lg">
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