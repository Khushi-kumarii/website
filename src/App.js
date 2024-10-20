// src/App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Your existing landing page component
import DiscoverPage from './pages/DiscoverPage';
// import AboutPage from './components/AboutPage'; // New example page

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage/>} /> {/* Home route */}
                   <Route path='/discover'element={<DiscoverPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
