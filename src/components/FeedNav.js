import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Link, withRouter } from 'react-router-dom';

import { AppBar, Tabs, Typography, Tab, Button } from '@material-ui/core';
import { Contacts, Subject, SettingsSharp, AddCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import RecipeList from '../containers/RecipeList';
import FriendsLayout from '../containers/FriendsLayout';
import CreateLayout from '../containers/CreateLayout';
import SettingsLayout from '../containers/SettingsLayout';

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
    outline: 'none'
  }
});

class FeedNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            style={styles.tab}
          >
            <Tab label="Recipes"
              icon={<Subject />}
              style={{outline: 'none'}} />
            <Tab label="Create"
              icon={<AddCircle />}
              style={{outline: 'none'}}/>
            <Tab label="Following"
              icon={<Contacts />}
              style={{outline: 'none'}}/>
            <Tab label="Settings"
              icon={<SettingsSharp />}
              style={{outline: 'none'}}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><RecipeList /></TabContainer>
          <TabContainer dir={theme.direction}> <CreateLayout /></TabContainer>
          <TabContainer dir={theme.direction}><FriendsLayout /></TabContainer>
          <TabContainer dir={theme.direction}><SettingsLayout /></TabContainer>

        </SwipeableViews>
      </div>
    );
  }
}

FeedNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FeedNav);
