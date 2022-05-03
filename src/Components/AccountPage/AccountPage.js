/* eslint-disable no-undef */
import axios from 'axios';
import React, { Component } from 'react'
import './AccountPage.css';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: []
        }
    }

    componentDidMount() {
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
        console.log(sessionStorage.session);
        const url = 'http://localhost/staru/src/php/Accountinfo.php?email=' + sessionStorage.session;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    account: data
                })
            })
    }
    render() {
        return (

            <div className="body">

                <div className="innerBody">

                    <h4>Your Account</h4>
                    <br />


                    {this.state.account.map((account, index) => (
                        <div key={index}>
                            Hello <span className="accountSpan">{account.screen_name}</span>
                            <br />
                            <br />
                        </div>
                    ))}

                    {this.state.account.map((account, index) => (
                        <div key={index}>
                            This account's email is:
                            <br />
                            <span className="accountSpan"> {account.email} </span>
                            <br />
                            <br />
                        </div>
                    ))}

                    <a href="/editaccount" className="ogame">Edit Account</a>
                </div>

            </div>

        );
    }
}

export default AccountPage;