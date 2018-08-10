import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'store/actions';


class Login extends React.Component {
  componentDidMount () {
    this.refreshFacebook();
  }

  refreshFacebook (){
    window.FB.XFBML.parse();
    window.FB.Event.subscribe('auth.statusChange', this.props.fbLoggedIn);
  }

  render () {
    return (
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
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
    );
  }
}

const dispatchToPropsMapper = dispatch => ({
  fbLoggedIn: fbResponse => dispatch(actions.loginFacebook(fbResponse))
});

const stateToPropsMapper = state => ({
  user: state.user,
});

export default connect(stateToPropsMapper, dispatchToPropsMapper)(Login);
