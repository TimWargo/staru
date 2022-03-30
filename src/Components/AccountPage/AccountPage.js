import React, { Component } from 'react'

class AccountPage extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
    }
    
    render() { 
        return (
            <div className="body">
                <h1> Account Page </h1>
            </div>
        );
    }
}
 
export default AccountPage;