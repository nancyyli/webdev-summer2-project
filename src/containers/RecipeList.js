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

    componentDidMount() {
        var userId = this.props.user.id;
        this.props.getRecipesByAuthor(userId);
    } 
    shouldComponentUpdate(nextProps) {
        this.props = nextProps;
        var userId = this.props.user.id;
        return true;
    }
    render() {
        return (
            <div className='row mt-4'>
                <div className='col-xl'>
                    <Typography variant='display1'>Recipes</Typography>
                {this.props.recipes.currentList && this.props.recipes.currentList.map(recipe => (
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
    getRecipesByAuthor: authorId => dispatch(actions.getRecipesByAuthor(authorId))
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RecipeList));


