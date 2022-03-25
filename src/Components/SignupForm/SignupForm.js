import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './SignupForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
    }
  }

  onOpenModal = () => { this.setState({ signup: true }); }
  onCloseModal = () => { this.setState({ signup: false }); }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  //onSubmission = (event) => {
  //backend db code
  // }


  render() {
    const { signup } = this.state
    return (
      //<form onSubmit={this.onSubmit}></form>    
      <>
        <Nav.Link onClick={this.onOpenModal}>Signup</Nav.Link>
        <Modal show={signup} onExit={this.onCloseModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <form>
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
              <div className="form-group">
                <label for="exampleInputPassword1">Screen Name</label>
                <input
                  type="text"
                  name="screenname"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Screen Name"
                  value={this.state.password}
                />
              </div>
              <div className="d-grid gap-2">        
              <Button onClick= {this.onCloseModal} variant="primary" size="lg">
               Submit
              </Button>
              <br></br>
              <p classname="securitydet">
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
