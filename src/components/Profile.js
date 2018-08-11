import React from 'react';
//import * as actions from 'store/actions';
import {connect} from 'react-redux';
import {Avatar, BottomNavigation, BottomNavigationAction, Typography, Icon}
from '@material-ui/core';

import {Alarm, Email, Contacts, Subject, SettingsSharp} from '@material-ui/icons';

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
  }
};
const currentDate = Date();

export const Profile = ({currentUser}) => {
  return (<div className="container-fluid mt-5 mb-5">
    <div className="row">
      <div className='col-1'>
        &nbsp;
      </div>
      <div className='col-2'>
        <Avatar style={styles.largeIcon} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
        <Typography className="mt-4" variant="headline">{currentUser.name}</Typography>
        <Typography variant="body1">@username</Typography>
        <Typography className="mt-2" variant="caption">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam quis quam. Maecenas ipsum velit, consectetuer eu lobortis ut,
        </Typography>
        <div className="row mt-2">
          <div className='col-1'>
            <Icon>
              <Alarm/>
            </Icon>
          </div>
          <div className='col-10 mt-2 ml-1'>
            <Typography variant="caption">
              {currentDate}</Typography>
          </div>
        </div>
        <div className="row mt-2">
          <div className='col-1'>
            <Icon>
              <Email/>
            </Icon>
          </div>
          <div className='col-10 mt-3 ml-1'>
            <Typography variant="caption">
              user@gmail.com</Typography>
          </div>
        </div>
        <div className="row mt-2">
          <div className='col-1'>
            <Icon>
              <Contacts/>
            </Icon>
          </div>
          <div className='col-10 mt-3 ml-1'>
            <Typography variant="caption">
              x number of friends on Kooker</Typography>
          </div>
        </div>
        <div className="row mt-3">
          <div className="form-inline ml-2">
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            <Avatar style={styles.followers} src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
          </div>
        </div>
      </div>
      <div className='col-8'>
        <div className='row mb-5'>
          <div className='col mb-5'>
            &nbsp;
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BottomNavigation className="rounded" style={styles.bottom_nav}>
              <BottomNavigationAction showLabel={true} label="Recipes"
                style={styles.bottom_nav_action} icon={<Icon><Subject/></Icon>}/>
              <BottomNavigationAction showLabel={true} label="Friends"
                style={styles.bottom_nav_action} icon={<Icon><Contacts/></Icon>}/>
              <BottomNavigationAction showLabel={true} label="Settings"
                style={styles.bottom_nav_action} icon={<Icon><SettingsSharp/></Icon>}/>
            </BottomNavigation>
          </div>
        </div>

      </div>
    </div>
  </div>);

};
/* PLEASE DYNAMICALLY RENDER AVATAR FOLLOWERS */

const dispatchToPropsMapper = dispatch => ({})

const stateToPropsMapper = state => ({currentUser: state.user.info})

export const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
