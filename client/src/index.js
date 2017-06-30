import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import {
  BrowserRouter
} from 'react-router-dom';
import Appwrapper from './modules/Appwrapper/Appwrapper'
// import Home from './modules/Home/Home'
// import Jobs from './modules/Jobs/Jobs'
// import Messaging from './modules/Messaging/Messaging'
// import Mynetwork from './modules/Mynetwork/Mynetwork'
// import Notifications from './modules/Notifications/Notifications'


ReactDOM.render((
   <BrowserRouter>
      <Appwrapper/>
   </BrowserRouter>
), document.getElementById( 'root' ))

// <div>
//   <Route exact path="/" component={Appwrapper}>
//       <Route exact path="/" component={Home} />
//       <Route path="/app" component={App} />
//       <Route path="/jobs" component={Jobs} />
//       <Route path="/messaging" component={Messaging} />
//       <Route path="/mynetwork" component={Mynetwork} />
//       <Route path="/notifications" component={Notifications} />
//   </Route>
//
// </div>

registerServiceWorker();
