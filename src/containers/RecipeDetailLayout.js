import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as actions from 'store/actions';
import RecipeBody from '../components/RecipeDetail/RecipeBody';
import Ingredients from '../components/RecipeDetail/Ingredients';
import RecipeComments from 'components/RecipeComments';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { Paper, Typography, Button }
    from '@material-ui/core';


const styles = {
    tomato: {
        color: '#f04d22'
    },
    img: {
        width: '80%',
        height: '20vw',
        objectFit: 'cover',
    }
};
class RecipeDetailLayout extends React.Component {
    constructor(props) {
        super(props);
        this.props.getRecipeById(this.props.match.params.recipeId);
    }

    shouldComponentUpdate(nextProps) {
        this.props = nextProps;
        return true;
    }

    makeComment = comment => {
        this.props.commentOnRecipe(this.props.recipes.selected.id, comment);
    }

    isFollowing = (userId) => {
      return this.props.following.some(u => u.id === userId);
    }

    followUser = () => {

    }

    render() {
        return (
            <div className='row mt-5 mb-5'>
                <div className='col-10 offset-md-1 mt-3'>
                    <Paper elevation='2' component='div' className='pt-5 pb-5 pl-5 pr-5'>
                        <div className='row'>
                            <div className='col'>
                                <Typography variant="display2">
                                    {this.props.recipes.selected.title}
                                </Typography>
                                <Typography className="mt-1" variant="caption">
                                    <em>Published: {format(new Date(this.props.recipes.selected.created), "MMM D, YYYY")}</em>
                                </Typography>
                                <div className='mt-1'>
                                  <Typography  className="text-secondary" variant='body1' style={{display: 'inline'}}>
                                    Authored by: <b>{this.props.recipes.selected.author && this.props.recipes.selected.author.name}</b>
                                  </Typography>
                                  {this.props.loggedIn && this.props.recipes.selected.author && this.props.recipes.selected.author.id !== this.props.user.id ?
                                    (this.props.recipes.selected.author && this.isFollowing(this.props.recipes.selected.author.id) ?
                                        <Button className="ml-3" style={{outline: 'none'}} size='small' onClick={() => this.props.unfollowUser(this.props.recipes.selected.author.id)}>Unfollow</Button> :
                                        <Button className="ml-3" style={{outline: 'none'}} size='small' onClick={() => this.props.followUser(this.props.recipes.selected.author.id)}>Follow</Button>) : null}
                                </div>
                                <Typography className="mt-3" variant="headline">
                                    What is this Recipe?
                                </Typography>
                                <div className='row'>
                                    <div className="col-8">
                                        <Typography variant="body1" className='text-secondary'>
                                            {this.props.recipes.selected.description}
                                        </Typography>
                                    </div>

                                    <div className='col'>
                                        &nbsp;
                                     </div>
                                </div>
                            </div>
                            <div className='col d-flex justify-content-center'>
                                <img style={styles.img} src={this.props.recipes.selected.image}
                                    onError={(e) => { e.target.src = 'http://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png'; }} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <Ingredients ingredients={this.props.recipes.selected.ingredients} />
                            </div>
                            <div className='col'>
                                <RecipeBody steps={this.props.recipes.selected.steps} />
                            </div>
                        </div>
                        <div className='row'>
                            <RecipeComments currentUser={this.props.user} comments={this.props.recipes.selected.comments} onComment={this.makeComment} />
                        </div>
                    </Paper>
                </div>
            </div>

        );
    }
}

RecipeDetailLayout.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    scroll: PropTypes.string

};

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    user: state.user.info,
    following: state.user.following,
    recipes: state.recipe
});

const mapActionsToProps = dispatch => ({
    getRecipeById: recipeId => dispatch(actions.getRecipeById(recipeId)),
    commentOnRecipe: (recipeId, comment) => dispatch(actions.commentOnRecipe(recipeId, comment)),
    followUser: (userId) => dispatch(actions.followUser(userId)),
    unfollowUser: (userId) => dispatch(actions.unfollowUser(userId))
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RecipeDetailLayout));
