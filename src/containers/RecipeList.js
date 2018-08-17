import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';


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

    render() {
        return (
            <div className='row mt-4'>
                <div className='col-xl'>
                    <Typography variant='display1'>Recipes</Typography>
                </div>
                    <RecipeCard />
            </div>
        );

    }
}

export default withRouter(RecipeList);


