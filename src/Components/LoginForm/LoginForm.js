import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import './LoginForm.css';
import axios from 'axios';
import { withRouter } from '../withRouter';
import StaruLogo from '../Images/StaruLogo.jpg';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember_me: true,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openSignup = this.openSignup.bind(this);
  }

  onOpenModal = () => { this.props.onLoginShowChange(true); }
  onCloseModal = () => {
    this.setState({
      email: '',
      password: '',
      remember_me: true,
      isValid: true,
      emailError: "",
      passwordError: "",
      credentialsError: "",
    });
    this.props.onLoginShowChange(false);
  }

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

  validate() {
    let isValid = true;
    let emailError = "";
    let passwordError = "";

   if (!this.state.email) {
      emailError = "Email field is required.";
  } else {
    emailError = "";
    this.setState({ emailError });
  }

  if (!this.state.password) {
   passwordError = "Password field is required."; 
  } else {
    passwordError = "";
    this.setState({ passwordError });
  }

  if (emailError) {
      this.setState({ emailError });
      isValid = false;
  }

  if (passwordError) {
    this.setState({ passwordError });
    isValid = false;
  }

  return isValid;
}

  onSubmit(e) {
    let credentialsError = "";
    this.setState ({ credentialsError });
    e.preventDefault();
    if (this.validate()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      }
      axios.post('http://localhost/staru/src/php/authLogin.php', user)
        .then(res=> {
          this.handleRememberme();
          sessionStorage.setItem("session", this.state.email);
          this.onCloseModal();
          this.props.navigate('/');
          this.props.navigate(0);
        })
        .catch(error => {
          credentialsError = "Invalid Login Credentials. Try again.";
          this.setState ({ credentialsError });
          /* We need to find the error code returned if a user is not 
          properly connected to the database in order to display 
          that error to a user as well. Or they will just think the
          login feature is broken.
          */
        });
    } 
  } // onSubmit

  render() {
    return (
      <>
        <Modal show={this.props.show} onExit={this.onCloseModal} onHide={this.onCloseModal}>
        <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={() => this.onSubmit()}>
            <h3>Log in</h3> 
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleInputChange}                
                />
                 <span className="text-danger">{this.state.emailError}</span>
              </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.passwordError}</span>
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
                <Button onClick= {() => this.onSubmit()} variant="primary" size="lg" className="buttModal" type="submit">
                Log In
                </Button>  
                <div className="bad-creds">
                <span className="text-danger">{this.state.credentialsError}</span>
                </div>                          
                <p className="forgot-password text-right">
                  Forgot your <a href="/forgot">password?</a>
                </p>   
                <p className="forgot-password text-right">
                  Don't have an account? <a href="#" onClick = {this.openSignup}>Sign up</a>
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

export default withRouter(LoginForm);