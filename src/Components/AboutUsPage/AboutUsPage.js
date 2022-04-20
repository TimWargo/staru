import React, { Component } from "react";
import JackPic from '../Images/Jack.jpg'
import AbhiPic from '../Images/Abhi.jpg'
import BrentPic from '../Images/Brent.jpg'
import TimPic from '../Images/Tim.jpg'

class AboutUsPage extends Component {
    render() {
        return (
            <div className="body">
                <h1>About The Team</h1>
                <div className="aboutUs">
                    <div className="row">

                        {/* Jack AboutUs Card */}
                        <div className="col">
                            <div className="card">
                                <img src={JackPic} className="aboutPic" alt="Jack"></img>
                                <div className="aboutContainer">
                                    <h2>Jack Gross</h2>
                                    <p className="aboutTitle">Floating Wizzard</p>
                                    <p className="cardText">"Sheeeeesh"</p>
                                </div>
                            </div>
                        </div>

                        {/* Abhi AboutUs Card */}
                        <div className="col">
                            <div className="card">
                                <img src={AbhiPic} className="aboutPic" alt="Abhi"></img>
                                <div className="aboutContainer">
                                    <h2>Abhishek Murugappan</h2>
                                    <p className="aboutTitle">Backend Bodybuilder</p>
                                    <p className="cardText">"Actually I wouldn't mind ms paint."</p>
                                </div>
                            </div>
                        </div>

                        {/* Brent AboutUs Card */}
                        <div className="col">
                            <div className="card">
                                <img src={BrentPic} className="aboutPic" alt="Brent"></img>
                                <div className="aboutContainer">
                                    <h2>Brent Voyles</h2>
                                    <p className="aboutTitle">Frontend FlavorTown</p>
                                    <p className="cardText">[INPUT TEXT HERE]</p>
                                </div>
                            </div>
                        </div>

                        {/* Tim AboutUs Card */}
                        <div className="col">
                            <div className="card">
                                <img src={TimPic} className="aboutPic" alt="Tim"></img>
                                <div className="aboutContainer">
                                    <h2>Tim Wargo</h2>
                                    <p className="aboutTitle">Database Guru</p>
                                    <p className="cardText">[INPUT TEXT HERE]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AboutUsPage;