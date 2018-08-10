import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import store from 'store';
import {queryLoginStatus} from 'store/actions';
import Homepage from 'containers/Homepage'

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'typeface-roboto'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({appId: '1734361039950244', autoLogAppEvents: true, xfbml: true, version: 'v3.1'});
      window.FB.Event.subscribe('auth.statusChange', this.props.fbLoggedIn);
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    this.props.checkLoginStatus();
  }

  render() {
    return (<Homepage/>);
  }
}

const kookerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f04d22'
    },
    secondary: {
     main: '#e91e63',
   },
    text: {
      primary: '#f04d22'
    },
  }
});

const mapActionsToProps = dispatch => ({
  checkLoginStatus: () => dispatch(queryLoginStatus())
});

const mapStateToProps = state => ({});

const ConnectedApp = connect(mapStateToProps, mapActionsToProps)(App);

ReactDOM.render(<Provider store={store}>
  <Router>
    <MuiThemeProvider theme={kookerTheme}>
      <Route component={ConnectedApp}/>
    </MuiThemeProvider>
  </Router>
</Provider>, document.getElementById('root'));

export default App;
