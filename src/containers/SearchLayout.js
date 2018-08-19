import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { InputAdornment, TextField, MenuItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import 'styles/Homepage.css';

const filterOptions = [
    {
        value: 'UNFILTERED',
        label: 'Any'
    },
    {
        value: 'TITLE',
        label: 'Recipe Title'
    },
    {
        value: 'AUTHOR',
        label: 'Author'
    },
    {
        value: 'INGREDIENTS',
        label: 'Ingredients'
    },
];

class SearchLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: ''
        };
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        return (<div className='row mt-4'>
            <div className='col'>
                &nbsp;
    </div>
            <div className='col-xl-8'>
                <div className='row'>
                    <div className='col-10 mt-3'>
                        <TextField
                            id="search"
                            label="Search for Recipes"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                            type='search'
                            fullWidth={true}
                        />
                    </div>
                    <div className='col'>
                        <TextField
                            id="filter"
                            select
                            label="Select filter"
                            defaultValue='UNFILTERED'
                            placeholder='Any'
                            value={this.state.filter}
                            onChange={this.handleChange('filter')}
                            margin="normal"
                            fullWidth={true}
                        >
                            {filterOptions.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
            </div>
            <div className='col'>
                &nbsp;
    </div>

        </div>);
    }
}

SearchLayout.propTypes = {

};

const mapStateToProps = state => ({
});

const mapActionsToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(SearchLayout));
