import React, { Component } from "react";
import JackPic from '../Images/Sunset.jpg' //change this to pic of Jack
import AbhiPic from '../Images/Sunset.jpg' //change this to pic of Abhi
import BrentPic from '../Images/Sunset.jpg' //change this to pic of Brent
import TimPic from '../Images/Sunset.jpg' //change this to pic of Tim

class AboutUsPage extends Component {
    render() {
        return (
            <div className="body">
                <h1>About Us</h1>

                <div className="aboutUs">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src={JackPic} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Jack Gross</h2>
                                    <p className="aboutTitle">Floating Wizzard</p>
                                    <p className="cardText">Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={AbhiPic} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Abhishek Murugappan</h2>
                                    <p className="aboutTitle">Backend Bodybuilder</p>
                                    <p className="cardText">Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={BrentPic} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Brent Voyles</h2>
                                    <p className="aboutTitle">Frontend FlavorTown</p>
                                    <p className="cardText">Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={TimPic} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Tim Wargo</h2>
                                    <p className="aboutTitle">Database Guru</p>
                                    <p className="cardText">Some text that describes me lorem ipsum ipsum lorem.</p>
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