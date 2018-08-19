import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as actions from 'store/actions';
import RecipeBody from '../components/RecipeDetail/RecipeBody';
import Ingredients from '../components/RecipeDetail/Ingredients';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { Paper, Typography }
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
        console.log(this.props);
        return true;
    }

    render() {
        return (
            <div className='row mt-5'>
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
                                <img style={styles.img} src={this.props.recipes.selected.image} />
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-4'>
                            <Ingredients ingredients={this.props.recipes.selected.ingredients}/> 
                        </div>
                            <div className='col'>
                                <RecipeBody steps={this.props.recipes.selected.steps}/>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>

        );
    }
}
{/* <img src="https://res.cloudinary.com/hksqkdlah/image/upload/s--l2y15uPK--/c_scale,f_auto,h_688,q_jpegmini:2,w_688/24617_sfs-paella-for-two-10" />

<Typography paragraph variant="title">
    Method:
  </Typography>
<Typography paragraph variant="body">
    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
    minutes.
  </Typography>
<Typography paragraph variant="body">
    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
    chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
    salt and pepper, and cook, stirring often until thickened and fragrant, about 10
    minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
  </Typography>
<Typography paragraph variant="body">
    Add rice and stir very gently to distribute. Top with artichokes and peppers, and
    cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
    Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
    the rice, and cook again without stirring, until mussels have opened and rice is
    just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
  </Typography>
<Typography variant="body">
    Set aside off of the heat to let rest for 10 minutes, and then serve.
  </Typography> */}
RecipeDetailLayout.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    scroll: PropTypes.string

};

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    user: state.user.info, 
    recipes: state.recipe
  });
  
const mapActionsToProps = dispatch => ({
    getRecipeById: recipeId => dispatch(actions.getRecipeById(recipeId))
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RecipeDetailLayout));
