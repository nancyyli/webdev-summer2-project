import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { InputAdornment, TextField, MenuItem, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SearchRecipeList from '../components/SearchRecipeList';
import * as actions from 'store/actions';
import 'styles/Homepage.css';

const filterOptions = [
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

    shouldComponentUpdate(nextProps) {
        this.props = nextProps;
        return true;
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    searchRecipe() {
        switch (this.state.filter) {
            case "AUTHOR":
                this.props.searchRecipeByAuthor(this.state.search);
                return;
            case "TITLE":
                this.props.searchRecipeByTitle(this.state.search);
                return;
            case "INGREDIENTS":
                this.props.searchRecipeByIngredient(this.state.search);
                return;
        }
    }

    render() {
        return (<div>
            <div className='row mt-4'>
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
                                onChange={this.handleChange('search')}
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

                        <div className='row mt-5'>
                            <div className='col'>
                                &nbsp;
                                </div>
                            <div className='col-6'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    onClick={() => this.searchRecipe()}
                                    style={{ outline: 'none' }}>
                                    Search
                                     </Button>
                            </div>
                            <div className='col'>
                                &nbsp;
                                </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    &nbsp;
            </div>

            </div>
            <div className='row'>
                <div className='col'>
                    <SearchRecipeList recipes={this.props.recipes.list} />
                </div>
            </div>
        </div>
        );
    }
}

SearchLayout.propTypes = {

};

const mapStateToProps = state => ({
    recipes: state.recipe
});

const mapActionsToProps = dispatch => ({
    searchRecipeByAuthor: authorName => dispatch(actions.searchRecipeByAuthor(authorName)),
    searchRecipeByTitle: title => dispatch(actions.searchRecipeByTitle(title)),
    searchRecipeByIngredient: ingredientName => dispatch(actions.searchRecipeByIngredient(ingredientName))
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(SearchLayout));
