import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css'; import
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar/NavBar'
// import axios from 'axios';
import Home from '../Home/Home'
import Jobs from '../Jobs/Jobs'
import Messaging from '../Messaging/Messaging'
import Mynetwork from '../Mynetwork/Mynetwork'
import Notifications from '../Notifications/Notifications'


class Appwrapper extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container-fluid">
          <NavBar />
          <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/jobs' component={Jobs}/>
                <Route path='/messaging' component={Messaging}/>
                <Route path='/mynetwork' component={Mynetwork}/>
                <Route path='/notifications' component={Notifications}/>
              </Switch>
          </main>

      </div>

    );
  }
}

export default Appwrapper;
