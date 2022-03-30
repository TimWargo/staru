import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './SignupForm.css';
import axios from "axios";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
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
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.screenName) {
      nameError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    return true;
} // validateInput

  onSubmit(e) {
    if (this.verifyInput()) {
      this.props.onSubmit([this.state]);
      e.preventDefault();
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
            alert("Unknown Error. Try Again.");
          } else {
            alert("An account with this email already exists or you are not connected to the database.");
            //it appears the error for an email already being in the database is an error with a response status other than 409..
          }
        });
    }
    /*
     else {
      // Initial Signup Error. Going to replace. 
      alert("Please use a screen name that is greater than 5 characters long, a password that is greater than 8 characters long, and a valid email address.")
    }
    */
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
                <label for="exampleInputScreenName1">Screen Name</label>
                <input
                  type="text"
                  name="screenName"
                  className="form-control"
                  placeholder="Screen Name"
                  value={this.state.screenName}
                  onChange={this.handleInputChange}
                />                 
              </div> 
              
              <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleInputChange}                
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="d-grid gap-2">
              <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
               Submit
              </Button>
              <br></br>
              <p className="have-account text-right">
                  Already have an account? <a href="/#" onClick = {this.openLogin}>Log In</a>
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