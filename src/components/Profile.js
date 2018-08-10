import React from 'react';
//import * as actions from 'store/actions';
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Alarm from '@material-ui/icons/Alarm';
import Email from '@material-ui/icons/Email';
import Contacts from '@material-ui/icons/Contacts';

const styles = {
  largeIcon: {
    width: 200,
    height: 200,
    border: '3px solid grey'
  },
  followers: {
    margin: 8
  }
};
const currentDate = Date();

export const Profile = ({currentUser}) => {
  return (<div className="container-fluid mt-5 mb-5">
    <div className="row">
      <div className='col-1'>
        &nbsp;
      </div>
      <div className='col-2 ml-3'>
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
    </div>
  </div>);

};
/* PLEASE DYNAMICALLY RENDER AVATAR FOLLOWERS */

const dispatchToPropsMapper = dispatch => ({})

const stateToPropsMapper = state => ({currentUser: state.user.info})

export const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
