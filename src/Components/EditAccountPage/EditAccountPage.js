import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import './EditAccountPage.css';
class EditAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen_name: "",
            account:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
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
    validate() {
        let isValid = true;
        let screen_nameError = "";
        if (!this.state.screen_name) {
            screen_nameError = "Screen Name hasn't changed";
        } else {
            screen_nameError = "";
            this.setState({ screen_nameError });
        }
        if (screen_nameError) {
            this.setState({ screen_nameError });
            isValid = false;
        }
        return isValid;
    }


    handleSubmit(event) {
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);
        const email1 = queryParams.get('email');
        console.log(email1);
        // temporary
        const user = {
            email: sessionStorage.session,
            screen_name: this.state.screen_name
        }

        //verify input
        if (this.validate()) {
            console.log(user);
            //submit new password to DB
            axios.post('http://localhost/staru/src/php/editAccount.php', user)
                .then(res => {
                    console.log(res.data);
                    //window.location.href = window.location.href.substring(0, window.location.href.indexOf('/') + 1);
                })
                .catch(error => {
                    console.log(error.response);
                });
        }

        

    }

    render() {
        return (
            <div className="body">
              
                
                <div className="innerBody">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <h4>Edit Account</h4>
                            <br />
                            
                            <label>
                                <table>
                            <tr>
                            <td>    
                                Picture
                                <br />
                                <img src="https://picsum.photos/seed/picsum/150/150"></img>
                                <br/>
                            </td>
                            <td>
                                Screen Name
                                <br />
                                
                                {this.state.account.map((account, index)=> (
                                    <div key = {index}>
                                        <input
                                    name="screen_name"
                                    id="screen_name"
                                    type="screen_name"
                                    placeholder="screen Name"
                                    className="form-control"
                                    defaultValue={account.screen_name}
                                    onChange={this.handleInputChange}
                                />
                                    </div>
                                ))}
                                <br />                           
                                <p>Email cannot be changed </p>
                                </td>
                            </tr>
                            </table>
                            </label>

                            <br />
                            <span className="text-danger">{this.state.screen_nameError}</span>

                        </div>
                        <p>
                           
                        </p>
                        <div className="text-center">
                            <Button onClick={this.handleSubmit} variant="primary" size="md" className="buttPass">
                                Submit
                            </Button>
                        </div>
                    </form>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/forgot">Change Password</Nav.Link>
                </div>
          
            </div>
        )
    }
}


export default EditAccountPage;