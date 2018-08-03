import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (<div className="container-fluid bg-light pb-5 pt-3">

      <h1>
        Kooker</h1>
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
