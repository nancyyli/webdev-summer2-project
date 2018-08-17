import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { AccountCircle, Home } from '@material-ui/icons';
import { ProfileContainer } from './Profile';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';


const styles = {
  appText: {
    color: '#ffffff',
  },
  link: {
    textDecoration: 'none',
  },
  icon: {
    outline: 'none',
  }
};
const HeaderLoggedIn = ({ user }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="regular" className='d-flex justify-content-between'>
        <div className="form-inline">
          <Typography className="mr-5" variant="title" style={styles.appText}>
            Kooker
          </Typography>
          <Link className="mt-1 mr-3"  to='/' style={styles.link}>
            <Typography variant="subheading" style={styles.appText}>
              Home
            </Typography>
          </Link>
          <Link className="mt-1 mr-3"  to='/' style={styles.link}>
            <Typography variant="subheading" style={styles.appText}>
              About
            </Typography>
          </Link>
          <Link className="mt-1 mr-3"  to='/' style={styles.link}>
            <Typography variant="subheading" style={styles.appText}>
              Explore
            </Typography>
          </Link>
        </div>
        <Link to='/profile/recipes' style={styles.link}>
          <IconButton styles={styles.icon} >
            <AccountCircle />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>

  );
};

export default withRouter(HeaderLoggedIn);
