import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './ForgotPasswordPage.css';
import axios from "axios";
import { withRouter } from '../withRouter';

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
        let emailFormatError = "";

        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!this.state.email) {
            emailError = "Email Address field is required.";
        } else {
            emailError = "";
            this.setState({ emailError });
        }

        if ((!pattern.test(this.state.email)) && (this.state.email)) {
            emailFormatError = "Email must be in the format xxxxx@xxxxx.xxx"
        } else {
            emailFormatError = "";
            this.setState({ emailFormatError });
        }

        if (emailError || emailFormatError) {
            this.setState({ emailError, emailFormatError });
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
            axios.post('http://localhost/staru/src/php/sendmail.php', user)
                .then(res => {
                    this.props.navigate('/');
                })
                .catch(error => {
                    console.log(error.response);
                });

        }
    }

    render() {
        return (
            <div className="body">
                <div className="innerBody">
                    <p className="pBody"> Enter your email below and we will send you a link to reset your password. </p>

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
                                    <span className="text-danger">{this.state.emailFormatError}</span>
                                </div>
                                <Button onClick={this.handleSubmit} variant="primary" size="md" className="buttPass">
                                    Submit
                                </Button>
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

export default withRouter(ForgotPasswordPage);