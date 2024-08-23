import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DonorRegistration from './components/DonorRegistration';
import RecipientRequest from './components/RecipientRequest';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Simple } from './components/Simple';

const App = () => {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorRegistration />} />
          <Route path="/request" element={<RecipientRequest />} />
          <Route path="/Bank" element={<Simple/>} />
        </Routes>
        <Footer />
        
      </div>
      
    </Router>
  );
};

export default App;
