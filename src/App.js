import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import LandingPage from './Components/LandingPage/LandingPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './Components/ResetPasswordPage/ResetPasswordPage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AccountPage from './Components/AccountPage/AccountPage';
import EditAccountPage from './Components/EditAccountPage/EditAccountPage';
import SearchPage from './Components/SearchPage/SearchPage';
import VerifyPage from './Components/VerifyPage/verifyPage';
import ViewGamePage from './Components/ViewGamePage/ViewGamePage';
import CreateReviewPage from './Components/CreateReviewPage/CreateReviewPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';

class App extends Component {
  constructor(props) {
    super(props);
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
      <BrowserRouter basename='/'>
        <NavBar />
        <Routes>
          {/* Default Routes */}
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/games/:platform/:name" element={<ViewGamePage />} />

          {/* Protected Routes */}
          <Route path="/games/create/:id" element={<CreateReviewPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route path="/verify" element={<VerifyPage/>} />
          <Route path="/editaccount" element={<EditAccountPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )}
}

export default App;

