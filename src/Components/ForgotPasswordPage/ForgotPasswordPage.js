import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class ForgotPasswordPage extends Component {

    render() {
        return (
            <>
                <h1> Forgot Password</h1>

                <p> If you have forgotten your password and wish to reset it, please enter your email below and we will send you a link allowing you to do so. </p>

                <form>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <br />
                    <button href="/reset" type="submit"> Submit </button>
                </form>
            </>
        )
    }
}
export default ForgotPasswordPage;