import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";


class NavBar extends Component {
    render() { 
        return (
            <div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <LoginForm />
                </li>
            </div>
        );
    }
}
 
export default NavBar;