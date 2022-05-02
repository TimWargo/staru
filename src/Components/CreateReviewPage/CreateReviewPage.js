import React, { Component } from "react";
import './CreateReviewPage.css';
import { Button} from "react-bootstrap";
import DarkSouls from '../Images/DarkSouls.jpg';
import StarRating from '../CreateReviewPage/StarRating.js';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from '../withRouter';
import axios from "axios";


class CreateReviewPage extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("session")) {
            window.location.pathname = "/";
        }
        this.state = {
            title: '',
            description: '',
            email: '',
            gameId: '',
            formProc: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

    onSubmit(e) {
          e.preventDefault();
          var pathArray = window.location.pathname.split('/');
          if (this.validate()) {
          const postdata = {
            title: this.state.title,
            description: this.state.description,
            email: sessionStorage.session,
            gameId: pathArray[3]
          };
          console.log(postdata)
          axios.post('http://localhost/staru/src/php/CreateReview.php', postdata)
          this.setState({
            formProc: 'Submitting Your Review...'
         })
          setTimeout(() => this.props.navigate('/'), 1500);
        }
      }

      onDiscard = () => {
          this.setState({
             title: '',
             description: '', 
            formProc: 'Discarding Your Review...'
          })
            setTimeout(() => this.props.navigate('/'), 1500);       
      }

      validate() {
        let isValid = true;
        let titleError = "";
        let descriptionError = "";

        if (!this.state.descriptionError) {
            descriptionError = "Review field is required.";
        } else {
          descriptionError = "";
          this.setState({ descriptionError });
        }

       if (!this.state.title) {
          titleError = "Title field is required.";
      } else {
        titleError = "";
        this.setState({ titleError });
      }

      if (titleError) {
        this.setState({ titleError });
        isValid = false;
    }
    if (descriptionError) {
        this.setState({ descriptionError });
        isValid = false;
    }
    return isValid;
    }

    render() { 
        return (           
            <div className="body">
                <h1>
                    Write a Review
                    </h1>       
                    <div className="cover-art" > 
                    <img src={DarkSouls} alt="Example1" width="300" height="200"></img>
                    </div>
                    <div className="star-group">
                    <StarRating/>                   
                    </div>
                    <div className= "section-format">
                    <section className="col-md-6">
<form onSubmit={this.onSubmit} className="form-group2 row">
    <div className="form-group">
        <label for="Title">Title </label>
        <input
         type="text" 
         className="form-control" 
         name="title" 
         placeholder="Description"
         value={this.state.title}
         onChange={this.handleInputChange}        
            />
            <span className="text-danger">{this.state.titleError}</span>
    </div>
    <div className="form-group2">
    <label for="txt-area">Review </label>
        <textarea rows="5" 
        name="description" 
        className="form-control" 
        value={this.state.description}
        onChange={this.handleInputChange}
        placeholder="Your feedback helps others decide which games to play."> 
        </textarea>
        <span className="text-danger">{this.state.descriptionError}</span>
    </div>
</form>
</section>
</div>
<div className= "mysubmit">
<Button onClick= {this.onDiscard} variant="primary" size="lg" className="discard">
                    Discard
                    </Button>                     
<Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Submit
                    </Button> 
                    </div>
                    <div className= "review-proc">
                    <p className="pReview">{this.state.formProc}</p>
                </div> 
            </div>
        );
    }
}
 
export default withRouter (CreateReviewPage);