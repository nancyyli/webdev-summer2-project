import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import Homepage from 'containers/Homepage'

import store from 'store';

import { queryLoginStatus } from 'store/actions';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  componentDidMount () {
    this.props.checkLoginStatus();
  }

  render () {
    return (
      <Homepage />
    );
  }
}

const mapActionsToProps = dispatch => ({
  checkLoginStatus: () => dispatch(queryLoginStatus())
});

const mapStateToProps = state => ({

});

const ConnectedApp = connect(mapStateToProps, mapActionsToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

export default App;
