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
                    <Link to="/forgot">Forgot Password?</Link> {/* Delete this and add this to the login page once that is completed*/ }
                </li>
            </div>
        );
    }
}
 
export default Footer;