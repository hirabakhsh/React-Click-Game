import React, { Component } from 'react';
import Navbar from "./Components/Navbar"
import ImageCard from "./Components/ImageCard";
import Gallery from "./Components/Gallery";
import './App.css';

class App extends Component {

  state = {
    score: 0
  }

  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default App;
