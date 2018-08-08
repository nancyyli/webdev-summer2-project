import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'store/actions';


class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    window.fbAsyncInit = () => {
        window.FB.init({
          appId            : '1734361039950244',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.1'
        });

        window.FB.Event.subscribe('auth.statusChange', this.handleFbLogin);
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  handleFbLogin = (response) => {
    console.log(response);
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

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const LoginContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Login);
