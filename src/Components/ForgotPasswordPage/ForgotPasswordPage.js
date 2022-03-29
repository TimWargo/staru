import React, { Component, createRef } from "react";
import './ForgotPasswordPage.css';
import axios from "axios";

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
        [target.name]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
        }
        //axios.post('http://localhost/staru/src/php/sendmail.php', user);
        //verify input
        const emailField = document.getElementById("email");
        if (!emailField.value) {
            const nameError = document.getElementById("nameError");
            nameError.classList.add("visible");
            emailField.classList.add("invalid");
            nameError.setAttribute("aria-hidden", false);
            nameError.setAttribute("aria-invalid", true);
            return;
        }
        else{
            axios.post('http://localhost/staru/src/php/sendmail.php', user);            
        }
    }
    
    render() {
        return (
            <div class="body">
                
                <h1> Forgot Password? </h1>
    
                <div class="innerBody">
                <p> Enter your email below and we will send you a link to reset your password. </p>
    
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Email'
                            onChange={this.handleInputChange}
                        />
                        <button type='submit'>Submit</button>
    
                        <span role="alert" id="nameError" aria-hidden="true">
                            Please enter an email address
                        </span>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}
 
export default ForgotPasswordPage;