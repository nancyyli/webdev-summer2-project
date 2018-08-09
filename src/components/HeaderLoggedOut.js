import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';

import Login from 'components/Login';


class HeaderLoggedOut extends React.Component {
  constructor (props) {
    super(props);
    this.state = { showLogin: false };
  }

  handleLoginOpen = () => {
    this.setState({ showLogin: true });
  }

  handleLoginClose = () => {
    this.setState({ showLogin: false });
  }

  render () {
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
            <Button color="inherit" onClick={this.handleLoginOpen}>
              Login
            </Button>
          </Toolbar>
          <Dialog open={this.state.showLogin} onClose={this.handleLoginClose}>
            <DialogContent>
              <Login visible={this.state.showLogin} />
            </DialogContent>
          </Dialog>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(HeaderLoggedOut);
