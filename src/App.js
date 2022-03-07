import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutContactUsPage from './Components/AboutContactUsPage/AboutContactUsPage';
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <>
      <NavBar isLoggedIn={isLoggedIn}/>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<AboutContactUsPage />} />
          <Route path="/contact" element={<AboutContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )}
}

export default App;
