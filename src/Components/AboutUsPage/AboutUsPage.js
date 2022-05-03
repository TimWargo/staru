import React, { Component } from "react";
import JackPic from '../../resources/Images/Jack.jpg'
import AbhiPic from '../../resources/Images/Abhi.jpg'
import BrentPic from '../../resources/Images/BrentAlt.jpg'
import TimPic from '../../resources/Images/Tim.jpg'

class AboutUsPage extends Component {
    render() {
        return (
            <div className="body">
                <h1>About The Team</h1>
                <p className="aboutBio"> We're a group of four computer science majors that love video games. We noticed that most game review sites don't allow for indivduals to review the featured games themselves, so we sought to remedy this with a website dedicated to player feedback. Our goal is to create a fun and engaging place where people across all platforms can gather to rate and comment on the games they play.</p>
                <br />
                <div className="aboutUs">
                    <div className="row">

                        {/* Jack AboutUs Card */}
                        <div className="col">
                            <div className="card">
                                <img src={JackPic} className="aboutPic" alt="Jack"></img>
                                <div className="aboutContainer">
                                    <h2>Jack Gross</h2>
                                    <p className="aboutTitle">Floating Wizzard</p>
                                    <p className="cardText">Suwanee, GA</p>
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
                                    <p className="cardText">Marietta, GA</p>
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
                                    <p className="cardText">Duluth, GA</p>
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
                                    <p className="cardText">Lawrenceville, GA</p>
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