import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { TextField, MenuItem, Button } from '@material-ui/core';

import { register } from 'store/actions';


const styles = {

};
const roles = [
    {
        value: 'VERIFIED_CHEF',
        label: 'Verified Chef'
    },
    {
        value: 'DEFAULT',
        label: 'Kooker User'
    },
    {
        value: 'ADMIN',
        label: 'Admin'
    }
];

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            password2: '',
            email: '',
            role: '',
            error: false
        };
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    doRegistration = () => {
      if (this.state.password === '' || this.state.name === '' || this.state.email === '' || this.state.role === '' || this.state.password !== this.state.password2) {
        this.setState({ error: true });
        return;
      }

      const registration = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        role: this.state.role
      };
      this.props.register(registration);
    }

    render() {
        return (<div>

            <div className='row'>
                <div className='col-12'>
                    <TextField
                        id="name"
                        label="Name"
                        className=''
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth={true}
                        required={true}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        autoComplete="current-password"
                        required={true}
                        margin="normal"
                    />
                </div>
                <div className='col'>
                    <TextField
                        id="password2"
                        label="Validate Password"
                        type="password"
                        value={this.state.password2}
                        onChange={this.handleChange('password2')}
                        autoComplete="current-password"
                        required={true}
                        margin="normal"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <TextField
                        id="email"
                        label="Email"
                        className=''
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        required={true}
                        margin="normal"
                    />
                </div>
                <div className='col'>
                    <TextField
                        id="role"
                        select
                        label="Select Role"
                        value={this.state.role}
                        onChange={this.handleChange('role')}
                        margin="normal"
                        fullWidth={true}
                    >
                        {roles.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-5'>
                <div className="col">
                    &nbsp;
                </div>
                <div className='col-8'>
                    <Button variant="contained" color="primary" fullWidth={true} onClick={this.doRegistration}>
                        Sign up
                    </Button>
                </div>
                <div className="col">
                    &nbsp;
                </div>
            </div>
        </div>
        );
    }
};

const stateToProps = state => ({

});

const actionsToProps = dispatch => ({
  register: registration => dispatch(register(registration))
});

export default connect(stateToProps, actionsToProps)(withRouter(RegisterForm));
