import React from 'react';
import { withRouter } from 'react-router-dom';

import {  Typography }
    from '@material-ui/core';

import RecipeCard from '../components/RecipeCard';

class RecipeList extends React.Component {
    render() {
        return (
            <div className='row mt-4'>
                <div className='col'>
                    <Typography variant='display1'>Recipes</Typography>
                    <RecipeCard />
                </div>
            </div>
        );

    }
}

export default withRouter(RecipeList);


