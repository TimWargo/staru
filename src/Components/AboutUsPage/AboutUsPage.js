import React, { Component } from "react";
import Sunset from '../Images/Sunset.jpg'

class AboutUsPage extends Component {
    render() {
        return (
            <div className="body">
                <h1>About Us</h1>

                <div className="aboutUs">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src={Sunset} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Jack Gross</h2>
                                    <p className="aboutTitle">Floating Wizzard</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Sunset} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Abhishek Murugappan</h2>
                                    <p className="aboutTitle">Backend Bodybuilder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Sunset} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Brent Voyles</h2>
                                    <p className="aboutTitle">Frontend FlavorTown</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Sunset} className="w-100 border-bottom" alt="Sunset"></img>
                                <div className="aboutContainer">
                                    <h2>Tim Wargo</h2>
                                    <p className="aboutTitle">Database Guru</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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