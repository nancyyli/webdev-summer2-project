import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import format from 'date-fns/format';

import {Typography, TextField, MenuItem, Button, Dialog, DialogTitle, DialogContent} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AdminUserLayout from 'containers/AdminUserLayout';


class AdminLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = { users: [], selectedUser: null }
  }

  componentDidMount () {
    this.refreshUsers();
  }

  refreshUsers = () => {
    axios.get('/api/user').then(response => {
      this.setState({ users: response.data });
    });
  }

  handleSave = changes => {
    axios.put(`/api/user/${this.state.selectedUser.id}`, changes).then(() => {
      this.setState({ selectedUser: null});
      this.refreshUsers();
    })
  }

  handleDelete = user => {
    axios.delete(`/api/user/${user.id}`).then(() => {
      this.setState({ selectedUser: null});
      this.refreshUsers();
    });
  }

  render () {
    return (
      <div className='container-fluid mt-4'>
        <Typography variant='display1'>
            Admin Tools
        </Typography>

        <Typography variant='display-2'>
          Manage Users
        </Typography>

        <Table className='mt-3'>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Join Date</TableCell>
          </TableHead>
          <TableBody>
            {this.state.users.map(u => {
              return (
                <TableRow hover key={u.id} onClick={() => this.setState({ selectedUser: u })}>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell>{format(new Date(u.joined), 'MMM DD, YYYY')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Dialog maxWidth='md' fullWidth={true} open={this.state.selectedUser !== null} onClose={() => this.setState({ selectedUser: null })}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <AdminUserLayout user={this.state.selectedUser} onSave={this.handleSave} onDelete={this.handleDelete} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const stateToPropsMapper = state => ({

});

const actionsToPropsMapper = dispatch => ({

});

export default connect(stateToPropsMapper, actionsToPropsMapper)(AdminLayout);
