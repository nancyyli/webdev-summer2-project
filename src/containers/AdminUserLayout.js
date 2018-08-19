import React from 'react';

import {TextField, Button, MenuItem} from '@material-ui/core';

import { roles } from 'util/constants';


export default class AdminUserLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: ""
    };
  }

  handleSave = () => {
    this.props.onSave({
      name: this.state.name || this.props.user.name,
      email: this.state.email || this.props.user.email,
      role: this.state.role || this.props.user.role
    });
    this.setState({ name: "", email: "", role: ""});
  }

  handleDelete = () => {
    this.props.onDelete(this.props.user);
    this.setState({ name: "", email: "", role: ""});
  }

  render () {
    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        <div>
          <TextField
            id="name"
            label="Name"
            value={this.state.name || this.props.user.name}
            onChange={ev => this.setState({ name: ev.target.value })}
            fullWidth={true}
            margin='normal'/>
        </div>
        <div>
          <TextField
            id="email"
            label="Email"
            value={this.state.email || this.props.user.email}
            onChange={ev => this.setState({ email: ev.target.value })}
            fullWidth={true}
            margin='normal'/>
        </div>
        <div>
          <TextField
            id="role"
            select
            label="Role"
            value={this.state.role || this.props.user.role}
            onChange={ev => this.setState({ role: ev.target.value })}
            fullWidth={true}
            margin='normal'>
            {roles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='mt-1 text-right'>
          <Button onClick={this.handleSave}>Save</Button>
          <Button onClick={this.handleDelete}>Delete User</Button>
        </div>
      </div>
    );
  }
}
