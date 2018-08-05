import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from './containers/Homepage'

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div class=''>
        <Homepage />
      </div>
    </Router>

  );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
