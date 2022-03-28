import axios from "axios";
import React, { Component } from "react";
import './ResetPasswordPage.css';

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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

    handleSubmit(event) {
        event.preventDefault();

        // temporary
        const user = {
            email: 'timothywargo@yahoo.com',
            password: this.state.password
        }

        console.log(user);

        //verify input
        const pass1 = document.getElementById("password");
        const pass2 = document.getElementById("passwordVerify");
        if (!pass1.value) {
            const pass1Error = document.getElementById("pass1Error");
            pass1Error.classList.add("visible");
            pass1.classList.add("invalid");
            pass1Error.setAttribute("aria-hidden", false);
            pass1Error.setAttribute("aria-invalid", true);
            return;
        } else if (!pass2.value) {
            const pass2Error = document.getElementById("pass2Error");
            pass2Error.classList.add("visible");
            pass2.classList.add("invalid");
            pass2Error.setAttribute("aria-hidden", false);
            pass2Error.setAttribute("aria-invalid", true);
            return;
        }

        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) {
            const notEqualError = document.getElementById("notEqualError");
            notEqualError.classList.add("visible");
            //pass2.classList.add("invalid");
            notEqualError.setAttribute("aria-hidden", false);
            notEqualError.setAttribute("aria-invalid", true);
            return;
        }

        //submit new password to DB
        axios.post('http://localhost/staru/src/php/resetPass.php', user)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <div class="body">
                <h1>Reset Password</h1>

                <div class="innerBody">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Password
                            <br />
                            <input
                                name="password"
                                id="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Re-type password
                            <br />
                            <input
                                name="passwordVerify"
                                id="passwordVerify"
                                type="password"
                                value={this.state.passwordVerify}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Reset Password</button>

                        <span role="alert" id="pass1Error" aria-hidden="true">
                            Please enter a password
                        </span>

                        <span role="alert" id="pass2Error" aria-hidden="true">
                            Please enter your password again
                        </span>

                        <span role="alert" id="notEqualError" aria-hidden="true">
                            Please make sure both passwords match
                        </span>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResetPasswordPage;