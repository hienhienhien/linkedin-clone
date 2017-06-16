import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css'; import
import Home from './pages/Home'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
   
  }

  
  render() {
    return (
      <div className="container">

       <Home />

      </div>

    );
  }
}

export default App;
