import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';

import 'styles/Homepage.css';

class CreateLayout extends React.Component {
    render() {
        return (<div className='row mt-4'>
            <div className='col-xl'>
                <Typography variant='display1'>
                    Create
                </Typography>
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
