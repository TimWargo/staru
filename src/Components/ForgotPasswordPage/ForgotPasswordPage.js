import React, { Component } from "react";
import {Button} from "react-bootstrap";
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

    //validate input
    validate() {
        let emailError = "";

        if (!this.state.email) {
            emailError = "Email field cannot be empty ";
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
        }
        //axios.post('http://localhost/staru/src/php/sendmail.php', user);

        //verify input
        if (this.validate()) {
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        type='text'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="text-danger">{this.state.emailError}</span>
                                    <Button onClick= {this.handleSubmit} variant="primary" size="md" className="buttPass">
                                        Submit
                                    </Button>
                                </div>
                            </div>


                            {/*
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
                             */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPasswordPage;