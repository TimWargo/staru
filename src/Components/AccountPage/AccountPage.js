import React, { Component } from 'react'

class AccountPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
    }
    
    render() { 
        return (
            <>
                <h1> Account Page </h1>
            </>
        );
    }
}
 
export default AccountPage;