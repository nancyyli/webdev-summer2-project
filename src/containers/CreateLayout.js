import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Typography, Paper, TextField, Button } from '@material-ui/core';

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
            date: '',
            yield: '',
            duration: '',
            img: '',
            ingredients: '',
            steps: '',
        };
    }
    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        });
    }

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
                                        onChange={this.handleChange('name')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <TextField
                                        id="date"
                                        label="Publish Date"
                                        type="date"
                                        defaultValue={currDate}
                                        onChange={this.handleChange('date')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText="When was this Recipe published?"
                                        fullWidth={true}
                                        className="mt-4"

                                    />
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
                                    <TextField
                                        id="img"
                                        label="Image of Recipe"
                                        onChange={this.handleChange('img')}
                                        helperText="Please paste the source link for the recipe image."
                                        fullWidth={true}
                                        className='mt-2'
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <TextField
                                        id="ingredients"
                                        label="Recipe Ingredients"
                                        helperText="Please list all ingredients required, separated by line breaks"
                                        value={this.state.ingredients}
                                        onChange={this.handleChange('ingredients')}
                                        margin='normal'
                                        fullWidth={true}
                                        required={true}
                                        multiline
                                        rows="10"
                                        className='mt-4'
                                    />

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
                                        onClick={this.doRegistration}
                                        style={{outline: 'none'}}>
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
});

const mapActionsToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(CreateLayout));
