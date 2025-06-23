import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';



const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
