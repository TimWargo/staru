import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './ResetPasswordPage.css';
import { withRouter } from '../withRouter';

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordVerify: "",
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
        let isValid = true;
        let passwordError = "";
        let verifyPasswordError = "";
        let notEqualError = "";
        let passFormatError = "";
        let passVerifFormatError = "";

        if (!this.state.password) {
            passwordError = "Password field cannot be empty";
        } else {
            passwordError = "";
            this.setState({ passwordError });
        }

        if ((this.state.password.length < 8) && (this.state.password.length > 0)) {
            passFormatError = "Password must be at least 8 characters long."
        } else {
            passFormatError = "";
            this.setState({ passFormatError });
        }

        if (!this.state.passwordVerify) {
            verifyPasswordError = "Re-type password field cannot be empty";
        } else {
            verifyPasswordError = "";
            this.setState({ verifyPasswordError });
        }

        if ((this.state.passwordVerify.length < 8) && (this.state.passwordVerify.length > 0)) {
            passVerifFormatError = "Password must be at least 8 characters long."
        } else {
            passVerifFormatError = "";
            this.setState({ passVerifFormatError });
        }

        if ((this.state.password !== this.state.passwordVerify) && (this.state.passwordVerify.length >= 8 && this.state.password.length >= 8)) {
            notEqualError = "Both passwords must be the same";
        } else {
            notEqualError = "";
            this.setState({ notEqualError });
        }

        if (passwordError) {
            this.setState({ passwordError });
            isValid = false;
        }
        if (verifyPasswordError) {
            this.setState({ verifyPasswordError });
            isValid = false;
        } 
        if (notEqualError) {
            this.setState({ notEqualError });
            isValid = false;
        } 
        if (passFormatError) {
            this.setState({ passFormatError });
            isValid = false;
        }
        if (passVerifFormatError) {
            this.setState({ passVerifFormatError });
            isValid = false;
        }
        return isValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);
        const email1 = queryParams.get('email');
        // temporary
        const user = {
            email: email1,
            password: this.state.password
        }

        //verify input
        if (this.validate()) {

            //submit new password to DB
            axios.post('http://localhost/staru/src/php/resetPass.php', user)
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
                <h1>Reset Password</h1>

                <div className="innerBody">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Password
                                <br />
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                            <br />
                            <span className="text-danger">{this.state.passwordError}</span>
                            <span className="text-danger">{this.state.passFormatError}</span>
                        </div>
                        <br />
                        <div>
                            <label>
                                Re-type password
                                <br />
                                <input
                                    name="passwordVerify"
                                    id="passwordVerify"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={this.state.passwordVerify}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                            <br />
                            <span className="text-danger">{this.state.verifyPasswordError}</span>
                            <span className="text-danger">{this.state.passVerifFormatError}</span>
                            <br />
                            <span className="text-danger">{this.state.notEqualError}</span>
                        </div>
                        <br />
                        <div className="text-center">
                            <Button onClick={this.handleSubmit} variant="primary" size="md" className="buttPass">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ResetPasswordPage);