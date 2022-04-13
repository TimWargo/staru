import React, { Component } from "react";
import './SearchPage.css';
import { Button} from "react-bootstrap";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    render() { 
        return (
            <div className="body">
                <div className="searchBar">
                    <input type='text' className='input' placeholder='Search by Title' />
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Search
                    </Button> 
                </div>
                <div className= "console-filter">
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Xbox
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Playstation
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Nintendo
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    PC
                    </Button>
                </div>
                <div className= "console-filter">
                <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Role-Playing
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    MMO
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Shooter
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Adventure
                    </Button>
                </div>
                <div className= "console-filter">
                <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Rated E
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Rated PG-13
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="buttModal">
                    Rated M
                    </Button>
                </div>              
            </div>
        );
    }
}
 
export default SearchPage;