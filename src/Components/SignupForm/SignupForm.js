import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './SignupForm.css';
import axios from "axios";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      screenName: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
    this.openLogin = this.openLogin.bind(this);
  }

  onOpenModal = () => { this.props.onSignupShowChange(true); }
  onCloseModal = () => { this.props.onSignupShowChange(false); }

  openLogin = () => {
    this.onCloseModal();
    setTimeout(this.props.onLoginShowChange(true), 500);
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  verifyInput() {
    return true
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.verifyInput()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
        screenName: this.state.screenName,
      };
      axios.post('http://localhost/staru/src/php/insertAcc.php', user)
        .then(res => {
          console.log(res.data);
          this.onCloseModal();
          window.location.pathname = "/";
        })
        .catch(error => {
          if (error.responsestatus === 409) {
            // display email account already exists error
          } else {
            // display "something went wrong" error
          }
        });
    } else {
      // display invalid input error
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
            <h3>Sign Up</h3>         
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
              <div className="form-group">
                <label for="exampleInputScreenName1">Screen Name</label>
                <input
                  type="text"
                  name="screenName"
                  className="form-control"
                  id="exampleInputScreenName1"
                  placeholder="Screen Name"
                  value={this.state.screenName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="d-grid gap-2">
                <Button onClick={this.openLogin} variant="primary">Login</Button>
              <Button onClick= {this.onSubmit} variant="primary" size="lg">
               Submit
              </Button>
              <br></br>
              <p className="securitydet">
              StarU will never share your email address or account information with any third party.
                </p>  
              </div>   
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default SignupForm;
