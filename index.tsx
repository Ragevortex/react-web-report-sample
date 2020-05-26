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
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/Ragevortex/react-web-report-sample@master/images/icc.png" alt="ICC Logo" class="ICCLogo"/></a> 
        <a href="index.html">Intro</a>
        <a href="about.html">Building Index</a>
        <a href="reviews.html">Files</a>
        <a href="tech.html">Narrative</a>
        <a href="games.html">Full List</a>
        <a href="reviews.html">SQFT</a>
        <a href="reviews.html">Percentage</a>
        <a href="faq.html">FAQ</a>
        <a href="reviews.html">Scientiffic Method</a>
      </div>
    </nav>
    <div id="content">
    <Hello name={this.state.name} />
    <header>
   
								<a onclick="load_Reports()" href="#" class="button">Go to Report</a>
							<p><img src="https://cdn.jsdelivr.net/gh/Ragevortex/react-web-report-sample@master/images/sample-cover.png" alt="Cover Image" /></p>
    
    </header>
    <ul class="flex-container">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
      <li class="flex-item">5</li>
      <li class="flex-item">6</li>
    </ul>
    
    </div>
    <footer flex flex-end class="footer">Footer</footer>
    </div>
    
    );
  }
}




render(<App />, document.getElementById('root'));
