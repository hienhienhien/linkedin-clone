import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import SubHeader from './components/SubHeader'

ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/sub" component={SubHeader} />
      </div>
   </HashRouter>
), document.getElementById( 'root' ))


registerServiceWorker();
