import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutContactUsPage from './Components/AboutContactUsPage/AboutContactUsPage';
import LandingPage from './Components/LandingPage/LandingPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Components/ResetPasswordPage/ResetPasswordPage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('email'))) {
      const email = document.cookie.split(';').find((item) => item.trim().startsWith("email=")).split('=')[1];
      if (!sessionStorage.getItem('session')) {
        sessionStorage.setItem('session', email);
      }
    }
  }

  render() {
    return (
      <>
      <NavBar />
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<AboutContactUsPage />} />
          <Route path="/contact" element={<AboutContactUsPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )}
}

export default App;
