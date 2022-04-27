import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import './CreateReviewPage.css';
import { Button} from "react-bootstrap";
import DarkSouls from '../Images/DarkSouls.jpg';
import StarRating from '../CreateReviewPage/StarRating.js';

class CreateReviewPage extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
        this.state = {
            title: '',
            subject: '',


        }
    }

    render() { 
        return (           
            <div className="body">
                <h1>
                    Write Review
                    </h1>       
                    <div className="cover-art" > 
                    <img src={DarkSouls} alt="Example1" width="300" height="200"></img>
                    </div>
                    <div className="star-group">
                    < StarRating />
                    </div>
                    <div className= "section-format">
                    <section className="col-md-6">
<form className="form-group2 row">
    <div className="form-group">
        <label for="Title">Title </label>
        <input
         type="text" 
         className="form-control" 
         name="Title" 
         value= {this.state.title}
         placeholder="Game Title">
            </input>
    </div>
    <div className="form-group2">
    <label for="Subject">Subject </label>
        <input
         type="text"
          className="form-control"
          name="Subject"
           value={this.state.subject}
           placeholder="Initial Comments">
        </input>
    </div>
    <div className="form-group2">
    <label for="txt-area">Review </label>
        <textarea rows="6" 
        name="Review" 
        class="form-control" 
        value={this.state.review}
        placeholder="Your feedback helps others decide which games to play."> 
        </textarea>
    </div>
</form>
</section>
</div>
<div className= "mysubmit">
<Button onClick= {this.onSubmit} variant="primary" size="lg" className="discard">
                    Discard
                    </Button>                     
<Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Submit
                    </Button> 
                    </div>
            </div>
        );
    }
}
 
export default CreateReviewPage;