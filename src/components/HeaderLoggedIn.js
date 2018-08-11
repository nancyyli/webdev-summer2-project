import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';


const HeaderLoggedIn = ({ user }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            Kooker
          </Typography>
          <IconButton component={Link} to='/' color='inherit'>
            <Home />
          </IconButton>
          <IconButton component={Link} to='/profile' color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(HeaderLoggedIn);
