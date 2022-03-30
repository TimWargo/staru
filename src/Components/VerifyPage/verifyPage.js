import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class VerifyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vkey: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const queryParams = new URLSearchParams(window.location.search);
        const email1 = queryParams.get('vkey');
        // temporary
        const user = {
            vkey: email1,
        }

        //submit new password to DB
        axios.post('http://localhost/staru/src/php/verify.php', user)
            .then(res => {
                window.location.href = window.location.href.substring(0, window.location.href.indexOf('/') + 1);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <div className="body">
                <h1>Activate Account</h1>
                
                <div className="innerBody">
                    <p className="pBody"> Click below to activate your account. </p>

                    <form onSubmit={this.handleSubmit}>

                    <div className="text-center">  
                        <Button onClick={this.handleSubmit} variant="primary" size="md" className="buttPass">
                            Activate
                        </Button>
                    </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default VerifyPage;