import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';
import Flexbox from 'flexbox-react';
import $ from 'jquery';
interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Project Name'
    };
  }

  render() {
    return (
      
    <div class="container">
      <nav id="hamnav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>      
      <div id="hamitems">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="tech.html">Tech</a>
        <a href="games.html">Games</a>
        <a href="reviews.html">Reviews</a>
      </div>
    </nav>
    <div id="content">
    <ul class="flex-container">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
    
    </div>
    </div>
    );
  }
}




render(<App />, document.getElementById('root'));
