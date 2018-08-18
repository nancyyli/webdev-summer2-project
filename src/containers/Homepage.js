import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderLoggedIn from 'components/HeaderLoggedIn';
import HeaderLoggedOut from 'components/HeaderLoggedOut';

import { ProfileContainer } from 'components/Profile';
import Home from 'components/Home';
import Login from 'components/Login';
import 'styles/Homepage.css';

{/* <Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/> */}

class Homepage extends React.Component {
  render() {
    return (

      <div >
        <div>
          {this.props.loggedIn ?
            <div>
              <HeaderLoggedIn user={this.props.user} />
              <Redirect to="/profile/recipes">
              </Redirect>
            </div> :
            <HeaderLoggedOut />}
        </div>
        <Switch>
          {this.props.loggedIn ?
            <Route path='/profile/recipes' render={() => <ProfileContainer user={this.props.user} />} /> :
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
            </div>
          }
        </Switch>
      </div>
    );
  }

}

Homepage.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.info
});

const mapActionsToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Homepage));

