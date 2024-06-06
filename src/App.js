import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Features from './components/Features;
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Network from './components/Network';
import Events from './components/Events';
import Mentorship from './components/Mentorship';
import Blogs from './components/Blogs';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
	<main>
	  <switch>
            <Route path="/" exact component={Intro />} />
	    <Route path="/features" component={Features />} />
	    <Route path="about" component={About />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/network" element={<Network />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/" element={<Home />} />
	    <Route path="/login" component={Login />} />
            <Route path="/signup" component={SignUp />} />
         </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
