import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} >
            </Route>
            <Route path="/about" element={<About />} >
            </Route>
            <Route path="/contact" element={<Contact />} >
            </Route>
            <Route path="/:post_id" element={<Post />} >
            </Route>
          </Routes>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
