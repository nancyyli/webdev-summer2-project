import React from 'react';
//import * as actions from 'store/actions';
import { withRouter } from 'react-router';

import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar, BottomNavigation, BottomNavigationAction, Typography, Icon }
  from '@material-ui/core';


import { Alarm, Email, Contacts, Subject, SettingsSharp, AddCircle } from '@material-ui/icons';
import FeedNav from './FeedNav';
import format from 'date-fns/format';


import RecipeList from '../containers/RecipeList';
import FriendsLayout from '../containers/FriendsLayout';
import CreateLayout from '../containers/CreateLayout';
import SettingsLayout from '../containers/SettingsLayout';

const styles = {
  largeIcon: {
    width: 200,
    height: 200,
    border: '3px solid grey'
  },
  followers: {
    margin: 8
  },
  bottom_nav: {
    color: 'white',
    background: '#f04d22'
  },
  bottom_nav_action: {
    outline: 'none',
    color: 'white',
    marginRight: 50
  },
  link: {
    textDecoration: 'none'
  },
  icon: {
    color: '#f04d22'
  }
};

export const Profile = ({ currentUser, followers }) => {
  const profilePicUrl = '/api/user/' + currentUser.id + '/picture.jpg';
  return (<div className="container-fluid mt-5 mb-5">
    <div className="row">
      <div className='col-xl-2 offset-md-1'>
        <div className='col-xl'>
          <Avatar style={styles.largeIcon} >
            <img src={profilePicUrl} onError={(e)=>{e.target.src='http://pcm.um.edu.my/wp-content/uploads/2017/11/empty-avatar-700x480.png';}}/>
            </Avatar>
          <Typography className="mt-4" variant="headline">{currentUser.name}</Typography>
          <div className="row mt-2">
            <div className='col-xl-1'>
              <Icon >
                <Alarm style={styles.icon} />
              </Icon>
            </div>
            <div className='col-xl-10 mt-2 ml-1'>
              <Typography variant="caption">
                {format(new Date(currentUser.joined), 'MMM D, YYYY')}
              </Typography>
            </div>
          </div>
          <div className="row mt-2">
            <div className='col-xl-1'>
              <Icon>
                <Email style={styles.icon} />
              </Icon>
            </div>
            <div className='col-xl-10 mt-3 ml-1'>
              <Typography variant="caption">
                {currentUser.email}
              </Typography>
            </div>
          </div>
          <div className="row mt-2">
            <div className='col-xl-1'>
              <Icon>
                <Contacts style={styles.icon} />
              </Icon>
            </div>
            <div className='col-xl-10 mt-3 ml-1'>
              <Typography variant="caption">
                {followers.length} followers
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-8'>
        <div className='row mb-5'>
          <div className='col mb-5'>
            &nbsp;
          </div>
        </div>
        <div className="row">
          <div className="col mb-4">
            <FeedNav user={currentUser} />
          </div>
        </div>
      </div>
    </div>
  </div>);

};
/* PLEASE DYNAMICALLY RENDER AVATAR FOLLOWERS */

const dispatchToPropsMapper = dispatch => ({});

const stateToPropsMapper = state => ({
  currentUser: state.user.info,
  followers: state.user.followers
});

export const ProfileContainer = withRouter(connect(stateToPropsMapper, dispatchToPropsMapper)(Profile));
