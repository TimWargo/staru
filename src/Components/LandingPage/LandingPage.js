import React, { Component, createRef } from "react";
import './main.css';
import { PcGames, XboxGames, PlaystationGames, NintendoGames } from './Games'
import Cols from './Cols'
import Banner from '../Images/Banner.jpg' //change this to pic of actual banner when we have one




class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">

                {/* Website landing page banner */}
                <div className="landingBanner">
                    <img src={Banner} className="bannerImg" alt="Landing page banner"></img>
                </div>

                {/* PC Games Row */}
                <p className="pLanding">Top PC Games</p>
                <div className="scroll">
                    <div className="row">
                        {PcGames.map((e) => {
                            return (
                                <Cols name={e.name} gameImg={e.gameImg} />
                            );
                        })}
                    </div>
                </div>

                {/* Xbox Games Row */}
                <p className="pLanding">Top Xbox Games</p>
                <div className="scroll">
                    <div className="row">
                        {XboxGames.map((e) => {
                            return (
                                <Cols name={e.name} gameImg={e.gameImg} />
                            );
                        })}
                    </div>
                </div>

                {/* Playstation Games Row */}
                <p className="pLanding">Top Playstation Games</p>
                <div className="scroll">
                    <div className="row">
                        {PlaystationGames.map((e) => {
                            return (
                                <Cols name={e.name} gameImg={e.gameImg} />
                            );
                        })}
                    </div>
                </div>

                {/* Nintendo Games Row */}
                <p className="pLanding">Top Nintendo Games</p>
                <div className="scroll">
                    <div className="row">
                        {NintendoGames.map((e) => {
                            return (
                                <Cols name={e.name} gameImg={e.gameImg} />
                            );
                        })}
                    </div>
                </div>



            </div>
        );
    }






}

export default LandingPage;