import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderLoggedIn from 'components/HeaderLoggedIn';
import HeaderLoggedOut from 'components/HeaderLoggedOut';

import { ProfileContainer } from 'components/Profile';
import Home from 'components/Home';
import Login from 'components/Login';
import 'styles/Homepage.css';


class Homepage extends React.Component {
  render() {
    return (
      <div >
        <div>
          {this.props.loggedIn ?
            <HeaderLoggedIn user={this.props.user} /> :
            <HeaderLoggedOut />}
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/profile/recipes' render={() => <ProfileContainer user={this.props.user} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.info
});

const mapActionsToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Homepage));

