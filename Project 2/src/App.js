 
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Uplode from './Components/Uplode';
import Login from './Components/Login';
import SighUp from './Components/SighUp';

const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/uplode' element={<Uplode/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SighUp/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
