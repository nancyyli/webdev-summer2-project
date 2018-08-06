import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/Homepage'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  render() {
    return (
        <div class=''>
          <Homepage />
        </div>

  );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
