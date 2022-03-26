import axios from "axios";
import React, { Component } from "react";

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
        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) {
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
            <>
                <h1>Reset Password</h1>

                <div>
                    <form onSubmit={this.handleSubmit}>
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