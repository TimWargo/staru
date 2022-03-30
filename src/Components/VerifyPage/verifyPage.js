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
        console.log(email1);
        // temporary
        const user = {
            vkey: email1,
        }

        console.log(user);

        //submit new password to DB
        console.log(user);
        axios.post('http://localhost/staru/src/php/verify.php', user)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <div class="body">
                <h1>Activate Account</h1>
                
                <div class="innerBody">
                    <p class="pBody"> Click below to activate your account. </p>

                    <form onSubmit={this.handleSubmit}>

                    <div class="text-center">  
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