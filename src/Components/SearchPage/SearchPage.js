import React, { Component } from "react";
import './SearchPage.css';
import { Button } from "react-bootstrap";
import { Link } from "react";
import HaloInfinite from '../Images/HaloInfinite.jpg'
import Witcher from '../Images/Witcher.jpg'
import EldenRing from '../Images/EldenRing.jpg'
import GodOfWar from '../Images/GodOfWar.jpg'


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
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Search
                    </Button> 
                </div>
                <div className= "console-filter">
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Xbox
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Playstation
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Nintendo
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    PC
                    </Button>
                </div>
                <div className= "console-filter">
                <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Role-Play
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    MMO
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Shooter
                    </Button>
                    <Button onClick= {this.onSubmit} variant="primary" size="lg" className="custom">
                    Adventure
                    </Button>
                    </div>
                    <div className="grid-container">
                    <div class="row gx-4">
    <div class="col">
      <div class="p-3"><img src={HaloInfinite} alt="Example1" width="250" height="340" margin-right="10"></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={GodOfWar} alt="Example1" width="250" height="340" margin-right="10"></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={Witcher} alt="Example1" width="250" height="340" margin-right="10"></img></div>
    </div>
    <div class="col">
    <div class="p-3"><img src={EldenRing} alt="Example1" width="250" height="340" margin-right="10"></img></div>
    </div>
  </div>
</div>
            </div>
        );
    }
}
 
export default SearchPage;