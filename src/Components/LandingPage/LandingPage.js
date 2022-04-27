import React, { Component } from "react";
import axios from 'axios';
import './main.css';
import Banner from '../../resources/Images/StarU_Banner.png' 
import { Link } from "react-router-dom";


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
        console.log(this.state.games)
    }

    componentDidMount() {
        const url ='http://localhost/staru/src/php/landingPage.php';
        axios.get(url).then(response=>response.data)
        .then((data)=> {
            this.setState({
                games:data
            })
            console.log(this.state.games[2])
           
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

            <div>
            <div>
            {this.state.games.slice(0,2).map((games, index)=> (
                                    <div key = {index}>
                                         return <img src={(games.pic)} className="img-responsive" />
                                         <br/>
                                        Hello {games.title}, 
                                        <br/>
                                        {games.price},
                                        
                                    </div>
                                ))}

            </div>

                {/* Website landing page banner */}
                <div className="landingBanner">
                    <img src={Banner} className="bannerImg" alt="Landing page banner"></img>
                </div>


                <div className="body">
                    <div className="landingContent">

                        {/* PC Games Row */}
                        <p className="pLanding">Top PC Games</p>
                        <div className="scroll">
                            <div className="row">
                                {/* INSERT COLS OF GAME PICS HERE */}
                            </div>
                        </div>

                        {/* Xbox Games Row */}
                        <p className="pLanding">Top Xbox Games</p>
                        <div className="scroll">
                            <div className="row">
                                {/* INSERT COLS OF GAME PICS HERE */}
                            </div>
                        </div>

                        {/* Playstation Games Row */}
                        <p className="pLanding">Top Playstation Games</p>
                        <div className="scroll">
                            <div className="row">
                                {/* INSERT COLS OF GAME PICS HERE */}  
                            </div>
                        </div>

                        {/* Nintendo Games Row */}
                        <p className="pLanding">Top Nintendo Games</p>
                        <div className="scroll">
                            <div className="row">
                                {/* INSERT COLS OF GAME PICS HERE */}                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default LandingPage;