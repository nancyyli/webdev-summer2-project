import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { roles } from 'util/constants';

import { Typography, TextField, MenuItem, Button } from '@material-ui/core';

import { updateProfile } from 'store/actions';

import 'styles/Homepage.css';

class SettingsLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      role: null,
      profile_picture: null
    };
  }

  doUpdate = () => {
    const updates = {
      name: this.state.name || this.props.currentUser.name,
      email: this.state.email || this.props.currentUser.email,
      role: this.state.role || this.props.currentUser.role,
      profile_picture: this.state.profile_picture || this.props.currentUser.profile_picture

    };
    this.props.update(updates);
  }

  render() {
    return (<div className='row mt-4'>
      <div className='col-xl'>
        <Typography variant='display1'>
          Profile Settings
        </Typography>

        <div className='container-fluid bg-light rounded'>
          <div className="row mt-5">
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  &nbsp;
              </div>
                <div className="col-8">
                  <TextField
                    id="name"
                    label="Name"
                    value={this.state.name || this.props.currentUser.name}
                    onChange={ev => this.setState({ name: ev.target.value })}
                    fullWidth={true}
                    margin='normal' />
                </div>
                <div className='col'>
                  &nbsp;
              </div>
              </div>
              <div className='row'>
                <div className='col'>
                  &nbsp;
              </div>
                <div className="col-8">
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.email || this.props.currentUser.email}
                    onChange={ev => this.setState({ email: ev.target.value })}
                    fullWidth={true}
                    margin='normal' />
                </div>
                <div className='col'>
                  &nbsp;
              </div>
              </div>
              <div className='row'>
                <div className='col'>
                  &nbsp;
              </div>
                <div className="col-8">
                  <TextField
                    id="role"
                    select
                    value={this.state.role || this.props.currentUser.role}
                    onChange={ev => this.setState({ role: ev.target.value })}
                    label="Select Role"
                    margin="normal"
                    fullWidth={true}>
                    {roles.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className='col'>
                  &nbsp;
              </div>
              </div>
              <div className='row'>
                <div className='col'>
                  &nbsp;
              </div>
                <div className='col-4'>
                  <Button style={{outline: 'none'}} variant="contained" color="primary" fullWidth={true} margin="normal" onClick={this.doUpdate}>
                    Save
              </Button>
                </div>
                <div className='col'>
                  &nbsp;
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

}

SettingsLayout.propTypes = {

};

const mapStateToProps = state => ({
  currentUser: state.user.info
});

const mapActionsToProps = dispatch => ({
  update: updates => dispatch(updateProfile(updates))
});

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SettingsLayout));
