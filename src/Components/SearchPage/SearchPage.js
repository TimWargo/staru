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
            filter: '',
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

    xboxHandleFilter = e => {
        this.setState({
            filter : 'Xbox'
        })
        console.log(this.state.filter)
        const url = 'http://localhost/staru/src/php/xboxFilterSearch.php';
        axios.get(url).then(response => response.data)
    .then((data) => {
        this.setState({
            games: data
        })
        console.log(this.state.games)
    })
    }

    psHandleFilter = e => {
        this.setState({
            filter : 'Playstation'
        })
        console.log(this.state.filter)
        const url = 'http://localhost/staru/src/php/psFilterSearch.php';
        axios.get(url).then(response => response.data)
    .then((data) => {
        this.setState({
            games: data
        })
        console.log(this.state.games)
    })
    }

    nHandleFilter = e => {
        this.setState({
            filter : 'Nintendo Switch'
        })
        console.log(this.state.filter)
        const url = 'http://localhost/staru/src/php/nFilterSearch.php';
        axios.get(url).then(response => response.data)
    .then((data) => {
        this.setState({
            games: data
        })
        console.log(this.state.games)
    })
    }

    pcHandleFilter = e => {
        this.setState({
            filter : 'PC'
        })
        console.log(this.state.filter)
        const url = 'http://localhost/staru/src/php/pcFilterSearch.php';
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
                    <Button onClick = { this.xboxHandleFilter } variant="primary" size="lg" className="custom">
                    Xbox
                    </Button>
                    <Button onClick= { this.psHandleFilter } variant="primary" size="lg" className="custom">
                    Playstation
                    </Button>
                    <Button onClick= { this.nHandleFilter } variant="primary" size="lg" className="custom">
                    Nintendo
                    </Button>
                    <Button onClick= { this.pcHandleFilter } variant="primary" size="lg" className="custom">
                    PC
                    </Button>
                </div>
                    <div className="grid-container">
                    <p className="pSearch"><u>Highest Rated Games</u></p>
                        <div className="search-scroll">
                            <div className="row">                               
                            {this.state.games.slice(0,4).map((games) => (
                                <div className="col">
                                    <Link to={"/" + games.platform + "/" + games.title}>
                                        <img src={games.pic} className="gamePic" alt={games.title} />
                                        <div>
                                        {games.title}
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            </div>
                        </div>
                        <div className="search-scroll">
                            <div className="row">                               
                            {this.state.games.slice(5,9).map((games) => (
                                <div className="col">
                                    <Link to={"/" + games.platform + "/" + games.title}>
                                        <img src={games.pic} className="gamePic" alt={games.title} />
                                        <div>
                                        {games.title}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="search-scroll">
                            <div className="row">                               
                            {this.state.games.slice(10,14).map((games) => (
                                <div className="col">
                                    <Link to={"/" + games.platform + "/" + games.title}>
                                        <img src={games.pic} className="gamePic" alt={games.title} />
                                        <div>
                                        {games.title}
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