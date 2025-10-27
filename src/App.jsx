import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Profiles from './components/Profiles.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';

const App = () => {
  return (
    <>
  <Header/>
  <HeroSection/>
  <Routes>
    <Route path="/profiles" element={<Profiles />} />
  </Routes>
    </>
  )
}

export default App
