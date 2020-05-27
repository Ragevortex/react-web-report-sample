import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';
import Flexbox from 'flexbox-react';
import $ from 'jquery';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface AppProps { }
interface AppState {
  name: string;
}
/*
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Project Name'
    };
  }*/

/*render() {
    return (
      
    
    
    );
  }
}*/

function HomeScreen() {
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
        <a href="faq">FAQ</a>
        <a href="reviews.html">Scientiffic Method</a>
      </div>
    </nav>
    <div id="content">
    <Hello name={this.state.name} />
    <header>
   
								<a onclick="load_Reports()" href="#" class="button">Go to Report</a>
							<p><img src="https://cdn.jsdelivr.net/gh/Ragevortex/react-web-report-sample@master/images/sample-cover.png" alt="Cover Image" /></p>
    
    </header>
    
    
    </div>
    <footer flex flex-end class="footer">Footer
    <ul class="flex-container">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
     
    </ul>
    </footer>
    </div>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
//render(<App />, document.getElementById('root'));
