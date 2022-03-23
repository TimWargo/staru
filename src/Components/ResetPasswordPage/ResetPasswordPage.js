import React, { Component } from "react";

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) {
            return;
        }

        //submit new password to DB

      }

    render() {
        return (
            <>
                <h1>Reset Password</h1>

                <div>
                    <form>
                    <label>
                        Password
                        <br />
                        <input
                        name="password"
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
                        type="password"
                        value={this.state.passwordVerify}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Reset Password</button>
                    </form>
                </div>
            </>
        )
    }
}
 
export default ResetPasswordPage;