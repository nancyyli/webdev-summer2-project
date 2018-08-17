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

function TabContainer(props) {
    const { children, dir } = props;
  
    return (
      <Typography component="div" dir={dir}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };
  
  const styles = theme => ({
    root: {
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
    },
  });
  
  class FeedNav extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
    render() {
      const { classes, theme } = this.props;
  
  
      const fabs = [
        {
          color: 'primary',
          className: classes.fab,
          icon: <AddIcon />,
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <EditIcon />,
        },
        {
          color: 'inherit',
          className: classNames(classes.fab, classes.fabGreen),
          icon: <UpIcon />,
        },
      ];
  
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Home" />
              <Tab label="Profile" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>            
            <Home />
            </TabContainer>
            <TabContainer dir={theme.direction}> <ProfileContainer /></TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
          </SwipeableViews>
        </div>
      );
    }
  }
  
  FeedNav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(Feed);