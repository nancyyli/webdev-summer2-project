import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { connect } from 'react-redux';
import * as actions from 'store/actions';


import { Typography }
    from '@material-ui/core';


const styles = {
    link: {
        textDecoration: 'none',
    }
};

class SearchRecipeList extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        this.props = nextProps;
        return true;
    }
    render() {
        return (
            <div className='row mt-4'>
                <div className='col-xl'>
                    <Typography variant='display1'>Recipes</Typography>
                {this.props.recipes.list && this.props.recipes.list.map(recipe => (
                <RecipeCard recipe={recipe}/>))}
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    recipes: state.recipe
  });
  
const mapActionsToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(SearchRecipeList));


