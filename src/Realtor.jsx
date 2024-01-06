import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';


export const Realtor = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/signin' element={ <SignIn/> } />
        <Route path='/' element={ <Home/> } />
        <Route path='/' element={ <Home/> } />
        <Route path='/' element={ <Home/> } />

      </Routes>
    </Router>
  )
}
