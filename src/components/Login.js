import React from 'react';
import { connect } from 'react-redux';

import { TextField, Button, Typography } from '@material-ui/core';

import * as actions from 'store/actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  componentDidMount() {
    this.refreshFacebook();
  }

  refreshFacebook = () => {
    window.FB.XFBML.parse();
    window.FB.Event.subscribe('auth.statusChange', response => {
      if (response.status === 'connected') {
        this.props.fbLoggedIn(response);
      }
    });
  }

  handleLogin = () => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid mt-5 mb-5">
          <div className='row'>
            <div className='col'>
              <Typography variant='display1'>
                Sign In
          </Typography>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <TextField
                id="email"
                label="Email"
                value={this.state.username}
                onChange={ev => this.setState({ username: ev.target.value })}
                margin="normal"
                fullWidth={true}
                required={true} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <TextField
                id="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={ev => this.setState({ password: ev.target.value })}
                margin="normal"
                fullWidth={true}
                required={true} />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              &nbsp;
          </div>
            <div className='col-8'>
              <Button style={{outline: 'none'}}variant="contained" color="primary" fullWidth={true} onClick={this.handleLogin}>
                Sign In
            </Button>
            </div>
            <div className='col'>
              &nbsp;
          </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <Typography variant='body2'>
            Or login with FaceBook
        </Typography>
        </div>
        <div className="container-fluid mt-5 mb-5">
          <div className="text-center">
            <div className="fb-login-button"
              data-scope="public_profile,email"
              data-max-rows="1"
              data-size="large"
              data-button-type="login_with"
              data-show-faces="false"
              data-auto-logout-link="false"
              data-use-continue-as="true"></div>
          </div>
        </div>

      </div>
    );
  }
}

const dispatchToPropsMapper = dispatch => ({
  fbLoggedIn: fbResponse => dispatch(actions.loginFacebook(fbResponse)),
  login: credentials => dispatch(actions.login(credentials))
});

const stateToPropsMapper = state => ({
  user: state.user,
});

export default connect(stateToPropsMapper, dispatchToPropsMapper)(Login);
