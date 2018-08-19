import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { TextField, MenuItem, Button } from '@material-ui/core';


const styles = {

};
const roles = [
    {
        value: 'chef',
        label: 'Verified Chef'
    },
    {
        value: 'user',
        label: 'Kooker User'
    },
];

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            email: '',
            role: ''
        };
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (<div>

            <div className='row'>
                <div className='col'>
                    <TextField
                        id="firstName"
                        label="First Name"
                        className=''
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                        margin="normal"
                        required="true"
                    />
                </div>
                <div className='col'>
                    <TextField
                        id="lastName"
                        label="Last Name"
                        className=''
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        margin="normal"
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
                        required="true"
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
                        required="true"
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
                        require='true'
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
                        fullWidth='true'
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
                    <Button variant="contained" color="primary" fullWidth='true'>
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

export default withRouter(RegisterForm);
