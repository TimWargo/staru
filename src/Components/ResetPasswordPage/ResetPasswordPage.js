import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './ResetPasswordPage.css';

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
        let passwordError = "";
        let verifyPasswordError = "";
        let notEqualError = "";

        if (!this.state.password) {
            passwordError = "Password field cannot be empty";
        }
        if (!this.state.passwordVerify) {
            verifyPasswordError = "Re-type password field cannot be empty";
        }
        if (this.state.password != this.state.passwordVerify) {
            notEqualError = "Both passwords must be the same";
        }

        if (passwordError || verifyPasswordError || notEqualError) {
            this.setState({ passwordError, verifyPasswordError, notEqualError });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);
        const email1 = queryParams.get('email');
        console.log(email1);
        // temporary
        const user = {
            email: email1,
            password: this.state.password
        }

        //verify input
        if (this.validate()) {
            console.log(user);

            //submit new password to DB
            console.log(user);
            axios.post('http://localhost/staru/src/php/resetPass.php', user)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error.response);
                });

        }

    }

    render() {
        return (
            <div class="body">
                <h1>Reset Password</h1>

                <div class="innerBody">
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
                            <br />
                            <span className="text-danger">{this.state.notEqualError}</span>
                        </div>
                        <br />
                        <div class="text-center">
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

export default ResetPasswordPage;