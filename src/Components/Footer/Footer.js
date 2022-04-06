import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() { 
        return (
            <div className="footer">
                <li>
                    <Link className="link" to="/about">About Us</Link>
                </li>
            </div>
        );
    }
}
 
export default Footer;