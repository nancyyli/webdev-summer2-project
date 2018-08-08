import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Homepage from 'containers/Homepage'

import store from 'store';


import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
      <Provider store={store}>
        <Homepage />
      </Provider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
