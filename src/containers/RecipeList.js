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

class RecipeList extends React.Component {
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
                {this.props.recipes.list.map(recipe => (
                <RecipeCard recipe={recipe}/>))}
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    user: state.user.info, 
    recipes: state.recipe
  });
  
const mapActionsToProps = dispatch => ({
    getRecipes: dispatch(actions.getRecipes())
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RecipeList));


