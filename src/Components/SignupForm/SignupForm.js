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
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.state.email)) {
    return false
  }
  else if (this.state.screenName.length < 5) {
return false
  }
  else if (this.state.password.length < 8 &&this.state.password.length > 16) {
    return false
  }
  else {
    return true
  }
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
          sessionStorage.setItem("session", this.state.email);
          this.onCloseModal();
          window.location.pathname = "/";
        })
        .catch(error => {
          if (error.responsestatus === 409) {
            alert("Unknown Error. Try Again.");
          } else {
            alert("An account with this email already exists.");
            //it appears the error for an email already being in the database is an error with a response status other than 409..
          }
        });
    } else {
      // Initial Signup Error. Going to replace. 
      alert("Please use a screen name that is greater than 5 characters long, a password that is greater than 8 characters long, and a valid email address.")
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
              <div className="d-grid gap-2">
              <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
               Submit
              </Button>
              <br></br>
              <p className="have-account text-right">
                  Already have an account? <a href="#" onClick = {this.openLogin}>Log In</a>
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