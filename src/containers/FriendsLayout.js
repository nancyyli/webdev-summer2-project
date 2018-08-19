import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {unfollowUser} from 'store/actions';

import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';

import 'styles/Homepage.css';

class FriendsLayout extends React.Component {
    unfollow = (userId) => {
      this.props.unfollow(userId);
    }

    render() {
        return (
          <div>
            <div className='mt-4'>
                <Typography variant='display1'>
                  Following
                </Typography>
            </div>
            <div className='mt-3 card-list'>
              {this.props.following.map(user => {
                return (
                  <Card style={{width: 300}}>
                    <CardContent>
                      <Typography variant='title'>
                        {user.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' onClick={() => this.unfollow(user.id)}>Unfollow</Button>
                    </CardActions>
                  </Card>
                );
              })}
            </div>
        </div>
      );
    }

}

FriendsLayout.propTypes = {

};

const mapStateToProps = state => ({
  following: state.user.following
});

const mapActionsToProps = dispatch => ({
  unfollow: (userId) => dispatch(unfollowUser(userId))
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(FriendsLayout));
