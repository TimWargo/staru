import React, { Component } from "react";
import './SearchPage.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            showXbox: false,
            games: []
        }
        console.log(this.state.games)
    }

    handleAdd = e => {
        this.setState({
            input : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
console.log(this.state.input)
const url = 'http://localhost/staru/src/php/SearchPage.php?title='+this.state.input;
axios.get(url).then(response => response.data)
    .then((data) => {
        this.setState({
            games: data
        })
        console.log(this.state.games)
    })
    }

    componentDidMount() {
        const url = 'http://localhost/staru/src/php/defaultSearchPage.php';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    games: data
                })
                console.log(this.state.games)
            })
    }

    renderCols() {
        this.state.games.map(games => {
            return (
                <div className="col">
                    <Link to="/about">
                        <img src={games.pic} className="gamePic" alt={games.title} />
                    </Link>
                </div>
            );
        });
    }

    render() { 
        return (
            <div className="body">
                <div className="searchBar">
                    <input 
                    onChange={this.handleAdd}
                    type='text' 
                    className='search-title'
                    placeholder='Search by Title' />
                    <Button onClick= {this.handleSubmit} variant="primary" size="lg" className="custom">
                    Search
                    </Button> 
                </div>
                <div className= "console-filter">
                    <Button onClick = {this.onSubmit } variant="primary" size="lg" className="custom">
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
                    {/*<p className="pSearch">Most Reviewed Games</p>*/}
                        <div className="search-scroll">
                            <div className="row">                               
                            {this.state.games.slice(0,8).map((games) => (
                                <div className="col">
                                    <Link to={"/" + games.platform + "/" + games.title}>
                                        <img src={games.pic} className="gamePic" alt={games.title} />
                                        <div>
                                        {games.platform}
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            </div>
                        </div>
            </div>
            </div>
        );
    }
}
 
export default SearchPage;