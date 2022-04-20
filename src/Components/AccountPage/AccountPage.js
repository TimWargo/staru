/* eslint-disable no-undef */
import axios from 'axios';
import React, { Component } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";

class AccountPage extends Component {
    state={
        account:[]
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
                <h1> Account Page </h1>
                <div className="innerBody">
                    
                    {this.state.account.map((account, index)=> (
                        <div key = {index}>
                            Hello {account.screen_name}, 
                            <br/>
                            <br/>
                        </div>
                    ))}
                    {this.state.account.map((account, index)=> (
                        <div key = {index}>
                            this is account's email is:
                            <br/>
                            {account.email}.
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    ))}

                    
                    <Nav.Link href="/editaccount">Edit Account</Nav.Link>
                </div>
                
             </div>

        );
    }
}
 
export default AccountPage;