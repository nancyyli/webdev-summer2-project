import React from 'react';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, IconButton, MenuItem, MenuList, Popper, Paper,
  Grow, ClickAwayListener
} from '@material-ui/core';

import { AccountCircle, Home } from '@material-ui/icons';

import { logout } from 'store/actions';


const styles = {
  appText: {
    color: '#ffffff',
  },
  link: {
    textDecoration: 'none',
    outline: 'none'
  },
  icon: {
    outline: 'none',
  }
};

class HeaderLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose(event) {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
  }

  handleLogout = () => {
    this.props.logout(this.props.history);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar variant="regular" className='d-flex justify-content-between'>
          <div className="form-inline">
            <Typography className="mr-5" variant="title" style={styles.appText}>
              Kooker
            </Typography>
            <Link className="mt-1 mr-4 ml-3" to='/profile/recipes' style={styles.link}>
              <Typography variant="subheading" style={styles.appText}>
                Home
              </Typography>
            </Link>
            <Link className="mt-1 mr-4" to='/explore' style={styles.link}>
              <Typography variant="subheading" style={styles.appText}>
                Explore
              </Typography>
            </Link>
          </div>
          <IconButton
            style={styles.icon}
            onClick={this.handleToggle}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.state.open ? 'menu-list-grow' : null}
            aria-haspopup="true" >
            <AccountCircle
            />
          </IconButton>
          <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <Link to='/profile/recipes' style={styles.link}>
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      </Link>
                      {(this.props.currentUser.role === 'ADMIN') ?
                        <Link to='/admin' style={styles.link}>
                          <MenuItem onClick={this.handleClose}>Admin Tools</MenuItem>
                        </Link> :
                        null}

                      <Link to='/' style={styles.link}>
                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>

    );
  }
}

const dispatchToPropsMapper = dispatch => ({
  logout: history => dispatch(logout(history))
});

const stateToPropsMapper = state => ({
  currentUser: state.user.info
});

export default connect(stateToPropsMapper, dispatchToPropsMapper)(withRouter(HeaderLoggedIn));
