import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image,  Button, Container, Form, Modal, Nav } from "react-bootstrap";
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
                    <div className="form-group">
    <label for="exampleInputEmail1">Email Address</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Email Address"
      />
    </div>        
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>                                           
            </Modal.Body>           
 <Modal.Footer>           
 <div className="div-footer2">
 <button type="button" class="btn btn-outline-primary mr-1">Sign up</button>
   </div>  
   
   <div className="div-footer1">                                                                            
                    <button type="button" class="btn btn-outline-primary mr-1">Forgot Password?</button>                                  
                    </div>       

                    <div className="div-footer3">                                                                            
                    <button type="button" class="btn btn-outline-primary mr-1">Login</button>                                  
                    </div> 

                    </Modal.Footer>
                </Modal>               
            </>           
        );       
    }   

}
 
export default LoginForm;