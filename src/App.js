import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import DashBoard from './component/Dashboard';
import LandingPage from './component/LandingPage';
import Profile from './component/Profile';
import PropertySetup from './component/PropertySetup';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />}></Route>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/dashboard' element={<DashBoard />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/property-setup' element={<PropertySetup />}></Route>
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
