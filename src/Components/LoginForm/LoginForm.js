import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image,  Button, Container, Form, Modal, Nav } from "react-bootstrap";
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,          
            email: '',
            password: '' 
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

    //onSubmission = (event) => {
    //backend db code
    // }


    render() { 
        const { login } = this.state
        return (     
          //<form onSubmit={this.onSubmit}></form>    
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
        type="email"
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
        type="password"
        name="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        value={ this.state.password }
        onChange={ this.handleInputChange }
        required
      />
    </div>                                        
            </Modal.Body>           
 <Modal.Footer>           
     <div className="div-footer2">
         <Button type="button" class="btn btn-outline-primary mr-1">Sign up</Button>
     </div>  
   <div className="div-footer1">                                                                            
       <Button type="button" class="btn btn-outline-primary mr-1" onClick= {this.onCloseModal}>
         Forgot Password?
         </Button>                                  
   </div>       
   <div className="div-footer3">                                                                            
       <Button type="button" class="btn btn-outline-primary mr-1">Login</Button>                                  
   </div> 
                    </Modal.Footer>
                </Modal>               
            </>           
        );       
    }   

}
 
export default LoginForm;