import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image,  Button, Container, Form, Modal, Nav } from "react-bootstrap";
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
                        <Modal.Title>Signup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>  
                      <form>                                                        
                    <div className="form-group">                   
    <label for="exampleInputEmail1">Email Address</label>
      <input
        type="text"
        name="email"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Email Address"
        value={ this.state.email }
        onChange={ this.handleInputChange }
        required
      />
    </div>        
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="text"
        name="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        value={ this.state.password }
        onChange={ this.handleInputChange }
        required
      />
      </div>
       <div className="form-group">
      <label for="exampleInputPassword1">Screen Name</label>
      <input
        type="text"
        name="screenname"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Screen Name"
        value={ this.state.screenname }
        onChange={ this.handleInputChange }
        required
      />
    </div>    
    </form>                                   
            </Modal.Body>           
 <Modal.Footer>           
     <div className="div-footersu">
     <button type="button" class="btn btn-primary btn-lg btn-block">Signup</button>
         </div>
                    </Modal.Footer>
                </Modal>               
            </>           
        );       
    }   

}
 
export default SignupForm;
