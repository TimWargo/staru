/* eslint-disable no-undef */
import axios from 'axios';
import React, { Component } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import './AccountPage.css';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
        this.state = {
            account:[]
        }
    }

    componentDidMount(){
        console.log(sessionStorage.session);
        const url ='http://localhost/staru/src/php/Accountinfo.php?email='+sessionStorage.session;
        console.log(url);  
        axios.get(url).then(response=>response.data)
        .then((data)=> {
            this.setState({
                account:data
            })
            
            console.log(this.state.account)
        })
    }
    render() { 
        return (
            
            <div className="body">
               
                <div className="innerBody">

                    <h4>Account Page</h4>
                    
                    
                    <table className="center">
                        <tbody>
                        <tr>    
                            <td>
                                Screen Name:
                            </td>
                            
                            <td>
                            {this.state.account.map((account, index)=> ())}
                                {this.state.account.map((account, index)=> (
                                    <div key = {index}>
                                        {account.screen_name}, 
                                    
                                    </div>
                                ))}
                            </td>
                        </tr>
                    <tr>    
                            <td>
                            This account's email:
                            </td>
                            <td>
                                {this.state.account.map((account, index)=> (
                                    <div key = {index}>
                                        {account.email}.
                                    
                                    </div>
                                ))}
                                </td>
                                </tr>
                                </tbody>
                        </table>
                    
                    <Nav.Link href="/editaccount">Edit Account</Nav.Link>
                </div>
                
             </div>

        );
    }
}
 
export default AccountPage;