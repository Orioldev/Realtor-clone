import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PrivateRoute } from './components/PrivateRoute';
import { ForgotPassword } from './pages/ForgotPassword';
import { Offers } from './pages/Offers';
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { CreateListing } from './pages/CreateListing';


export const Realtor = () => {
  return (
    <>
      <Router>
          <Header />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/profile' element={<PrivateRoute /> }>
            <Route path='/profile' element={ <Profile /> } />
          </Route>

          <Route path='/sign-in' element={ <SignIn /> } />
          <Route path='/sign-Up' element={ <SignUp /> } />
          <Route path='/forgot-password' element={ <ForgotPassword /> } />
          <Route path='/offers' element={ <Offers /> } />
          <Route path='/create-listing' element={ <CreateListing /> } />


        </Routes>
      </Router>
      <ToastContainer
        position='bottom-center'
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    
    </>
  )
}
