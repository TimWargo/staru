import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() { 
        return (
            <div>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/forgot">Forgot Password (delete later) </Link> {/* Delete this and add this to the login page once that is completed*/ }
                </li>
                <li>
                    <Link to="/reset">Reset Password (delete later) </Link> {/* Delete this later, should only be accesible via email*/ }
                </li>

            </div>
        );
    }
}
 
export default Footer;