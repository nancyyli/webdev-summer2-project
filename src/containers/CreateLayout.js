import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Typography, Paper, TextField, Button, MenuItem, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import * as actions from 'store/actions';
import 'styles/Homepage.css';

const styles = {
    textField: {
        padding: 10
    }
}

let currDate = Date();
class CreateLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            created: '',
            yield: '',
            duration: '',
            image: '',
            ingredient: '',
            ingredients: [],
            quantity: '',
            modifer: '',
            ingredientName: '',
            steps: '',
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

    addNewIngredient() {
        let newIngredient = {
            name: this.state.ingredientName
        }
        this.props.addNewIngredient(newIngredient);
        this.setState( {
            ingredientName: ''
        })
    }

    getIngredientById(id) {
        var name = 'not ingredient';
        this.props.recipes.ingredients.map(ingredient => {
            if (ingredient.id == id) {
                name = ingredient.name;
            }
        })
        return name;
    }

    addIngredient() {
        let newIngredient = {
            ingredientId: this.state.ingredient,
            quantity: this.state.quantity,
            modifier: this.state.modifer
        }
        this.state.ingredients.push(newIngredient);
        this.setState({
            ingredient: 0,
            quantity: '',
            modifer: ''
        }, () => {
          });
    }


    addRecipe() {
        let newState;
        newState = Object.assign({}, this.state);
        let newDate = new Date(this.state.created);
        // let newIngredients = [
        //     {
        //         "ingredientId": 1,
        //         "quantity": "2 cloves",
        //         "modifier": "minced"
        //     },
        //     {
        //         "ingredientId": 2,
        //         "quantity": "1 stick",
        //         "modifier": "soft"
        //     }
        // ]
        let newSteps = [];
        this.state.steps.split('\n').map((value) => (
            newSteps.push({ text: value })
        ));
        newState.created = newDate;
        // newState.ingredients = newIngredients;
        newState.steps = newSteps;

        this.props.createRecipe(newState);
    }
    // ALERT: add alert when user adds a new ingredient (adding the ingredientName)
    render() {
        return (<div className='row mt-4'>
            <div className='col-xl'>
                <Typography variant='display1'>
                    Create
                </Typography>
                <div className='row mt-2'>
                    <div className='col bg-light rounded'>
                        &nbsp;
                </div>
                    <div className='col-10 bg-light pt-5 pb-5'>
                        <Paper className="mt-3 pl-5 pr-5 pt-2 pb-5">
                            <Typography variant='display3'>
                                Add Recipe:
                             </Typography>
                            <Typography variant='caption'>
                                Create your own Recipes! Fill in the fields bellow to add Recipes.
                            </Typography>
                            <div className="row">
                                <div className="col">
                                    <TextField
                                        id="title"
                                        label="Recipe title"
                                        helperText="Please add your Recipe's Title"
                                        value={this.state.name}
                                        onChange={this.handleChange('title')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <TextField
                                        id="yield"
                                        label="Sevings"
                                        onChange={this.handleChange('yield')}
                                        helperText="How many servings does this recipe make."
                                        fullWidth={true}
                                        className='mt-4'
                                    />
                                    <TextField
                                        id="duration"
                                        label="Time"
                                        onChange={this.handleChange('duration')}
                                        helperText="How long does it take to make this recipe?"
                                        fullWidth={true}
                                        className='mt-4'
                                    />
                                </div>
                                <div className='col'>
                                    <TextField
                                        id="description"
                                        label="Recipe Description"
                                        helperText="Please add a small description about your recipe"
                                        value={this.state.description}
                                        onChange={this.handleChange('description')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={true}
                                        rows="6"
                                        multiline
                                        className='mt-4'
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>  
                                <TextField
                                    id="image"
                                    label="Image of Recipe"
                                    onChange={this.handleChange('image')}
                                    helperText="Please paste the source link for the recipe image."
                                    fullWidth={true}
                                    className='mt-2'
                                />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <TextField
                                        id="ingredient"
                                        label="Recipe Ingredients"
                                        helperText="Please list all ingredients required, separated by line breaks"
                                        value={this.state.ingredient}
                                        onChange={this.handleChange('ingredient')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={false}
                                        rows="10"
                                        select
                                        className='mt-4'
                                    >
                                        {this.props.recipes.ingredients.map(option => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <div className='row'>
                                        <div className='col'>
                                            <TextField
                                                id="quantity"
                                                label="Quantity"
                                                value={this.state.quantity}
                                                onChange={this.handleChange('quantity')}
                                                className='mt-2'
                                            />
                                            <TextField
                                                id="modifier"
                                                label="Modifer"
                                                value={this.state.modifer}
                                                onChange={this.handleChange('modifer')}
                                                className='mt-2'
                                            />
                                        </div>
                                        <div className='col d-flex align-items-center'>
                                            <Button className="mt-5"
                                                variant='raised'
                                                style={{ outline: 'none' }}
                                                color='primary'
                                                onClick={() => this.addIngredient()}
                                                size='small'>
                                                Add ingredient
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        Added Ingredients:
                                    </div>
                                    {this.state.ingredients && this.state.ingredients.map(ingredient => (
                                    <div className='row'>
                                        {ingredient.quantity + ' ' + ingredient.modifier + ' ' + this.getIngredientById(ingredient.ingredientId)}
                                    </div>))}
                                    <div className='row'>
                                        <div className='col'>
                                            <TextField
                                                id="ingredientName"
                                                label="Ingredient Name"
                                                value={this.state.ingredientName}
                                                helperText="Can't find ingredient? Add the name here."
                                                onChange={this.handleChange('ingredientName')}
                                                className='mt-2'
                                            />
                                        </div>
                                        <div className='col d-flex align-items-center'>
                                            <Button className="mt-5"
                                                variant='raised'
                                                style={{ outline: 'none' }}
                                                color='primary'
                                                onClick={() => this.addNewIngredient()}
                                                size='small'>
                                                Add new ingredient
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <TextField
                                        id="steps"
                                        label="Recipe Steps"
                                        helperText="Please list all steps required, separated by line breaks"
                                        value={this.state.steps}
                                        onChange={this.handleChange('steps')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={true}
                                        multiline
                                        rows="10"
                                        className='mt-4'
                                    />
                                </div>
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
                                        onClick={() => this.addRecipe(this.state)}
                                        style={{ outline: 'none' }}>
                                        Submit recipe
                                     </Button>
                                </div>
                                <div className='col'>
                                    &nbsp;
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <div className='col bg-light rounded'>
                        &nbsp;
                </div>
                </div>
            </div>
        </div>);
    }

}
CreateLayout.propTypes = {
};

const mapStateToProps = state => ({
    recipes: state.recipe
});

const mapActionsToProps = dispatch => ({
    createRecipe: newRecipe => dispatch(actions.createRecipe(newRecipe)),
    addNewIngredient: newIngredient => dispatch(actions.addNewIngredient(newIngredient)),
    getIngredients: dispatch(actions.getIngredients())
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(CreateLayout));
