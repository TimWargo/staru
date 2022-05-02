/* eslint-disable no-undef */
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
            account:[],
            screen_nameError:"",
            changescreen_nameError:"",
            successmessage:""
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
        let changescreen_nameError="";
        let successmessage="";
        event.preventDefault();

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
                console.log(res);
                if(res.status==201){
                    console.log("success");
                    successmessage="screen name has been changed";
                    this.setState ({successmessage});
                    changescreen_nameError="";
                    this.setState ({ changescreen_nameError });

                }
                //window.location.href = window.location.href.substring(0, window.location.href.indexOf('/') + 1);
            })
            .catch(error => {
                changescreen_nameError="username already exists.Try again.";
                this.setState ({ changescreen_nameError });
                console.log(changescreen_nameError);
                successmessage="";
                    this.setState ({successmessage});
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
                            <table className="center">
                            <tbody>
                                <tr>
                                    <td>
                                    Screen Name:
                                    </td>
                                    <td>
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
                                </td>
                                  </tr>
                                  </tbody>
                                </table>                         


                            </label>

                            <br />
                            <span className="text-success">{this.state.successmessage}</span>
                            <span className="text-danger">{this.state.screen_nameError}</span>
                            <span className="text-danger">{this.state.changescreen_nameError}</span>

                        </div>
                        <div className="text-center">
                            <Button onClick={this.handleSubmit} variant="primary" size="md" className="buttAcc" type="submit">
                                Submit
                            </Button>
                            <br/>
                            <br/>
                        </div>
                    </form>
                    <div>
                    <Nav.Link href="/account" className="ogame">Account</Nav.Link>
                    <Nav.Link href="/forgot" className="ogame">Change Password</Nav.Link>
                    </div>
                </div>
          
            </div>
        )
    }
}


export default EditAccountPage;