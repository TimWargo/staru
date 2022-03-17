import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Forgot Password</h1>
                <h4> <Link to="/reset">Reset Password</Link> </h4>
            </div>
        )

    }
}
 
export default ForgotPasswordPage;